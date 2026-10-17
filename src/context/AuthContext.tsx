import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  signInWithPopup, 
  signOut as fbSignOut, 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  getDocs, 
  serverTimestamp 
} from 'firebase/firestore';
import { auth, db, googleProvider, handleFirestoreError, OperationType } from '../firebase';
import { Level } from '../types';

export interface StudentProfile {
  uid: string;
  email: string;
  displayName: string;
  currentLevel: Level;
  masteredCount: number;
  completedHomeworkCount: number;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  profile: StudentProfile | null;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  signUpWithEmail: (email: string, pass: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  saveMasteredWords: (words: string[]) => Promise<void>;
  saveHomeworkRecord: (record: { level: Level; score: number; totalQuestions: number; percentage: number }) => Promise<void>;
  cloudMasteredIds: Set<string> | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [cloudMasteredIds, setCloudMasteredIds] = useState<Set<string> | null>(null);

  // Sync state on Auth change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await loadUserData(currentUser);
      } else {
        setProfile(null);
        setCloudMasteredIds(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loadUserData = async (currentUser: User) => {
    const userDocRef = doc(db, 'users', currentUser.uid);
    try {
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setProfile({
          uid: currentUser.uid,
          email: currentUser.email || '',
          displayName: data.displayName || currentUser.displayName || 'طالب الأكاديمية',
          currentLevel: data.currentLevel || 'A1',
          masteredCount: data.masteredCount || 0,
          completedHomeworkCount: data.completedHomeworkCount || 0
        });
      } else {
        // Create initial profile
        const newProfile: StudentProfile = {
          uid: currentUser.uid,
          email: currentUser.email || '',
          displayName: currentUser.displayName || 'طالب الأكاديمية',
          currentLevel: 'A1',
          masteredCount: 0,
          completedHomeworkCount: 0
        };

        await setDoc(userDocRef, {
          uid: newProfile.uid,
          email: newProfile.email,
          displayName: newProfile.displayName,
          currentLevel: newProfile.currentLevel,
          masteredCount: 0,
          completedHomeworkCount: 0,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
        setProfile(newProfile);
      }

      // Load progress
      const progressRef = doc(db, 'users', currentUser.uid, 'progress', 'mastery');
      const progressSnap = await getDoc(progressRef);
      if (progressSnap.exists()) {
        const pData = progressSnap.data();
        if (Array.isArray(pData.masteredWordIds)) {
          setCloudMasteredIds(new Set(pData.masteredWordIds));
        }
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, `users/${currentUser.uid}`);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Google Sign In failed:', error);
      throw error;
    }
  };

  const signInWithEmail = async (email: string, pass: string) => {
    await signInWithEmailAndPassword(auth, email, pass);
  };

  const signUpWithEmail = async (email: string, pass: string, name: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    if (cred.user) {
      const userDocRef = doc(db, 'users', cred.user.uid);
      await setDoc(userDocRef, {
        uid: cred.user.uid,
        email,
        displayName: name || 'طالب الأكاديمية',
        currentLevel: 'A1',
        masteredCount: 0,
        completedHomeworkCount: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }
  };

  const signOut = async () => {
    await fbSignOut(auth);
  };

  const saveMasteredWords = async (words: string[]) => {
    if (!user) return;
    const progressRef = doc(db, 'users', user.uid, 'progress', 'mastery');
    const userDocRef = doc(db, 'users', user.uid);

    try {
      await setDoc(progressRef, {
        userId: user.uid,
        masteredWordIds: words.slice(0, 500),
        currentLevel: profile?.currentLevel || 'A1',
        updatedAt: new Date().toISOString()
      });

      await setDoc(userDocRef, {
        masteredCount: words.length,
        updatedAt: new Date().toISOString()
      }, { merge: true });

      setCloudMasteredIds(new Set(words));
      setProfile(prev => prev ? { ...prev, masteredCount: words.length } : null);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `users/${user.uid}/progress/mastery`);
    }
  };

  const saveHomeworkRecord = async (record: { level: Level; score: number; totalQuestions: number; percentage: number }) => {
    if (!user) return;
    const submissionId = `sub_${Date.now()}`;
    const subDocRef = doc(db, 'users', user.uid, 'homework_submissions', submissionId);
    const userDocRef = doc(db, 'users', user.uid);

    try {
      await setDoc(subDocRef, {
        id: submissionId,
        userId: user.uid,
        level: record.level,
        score: record.score,
        totalQuestions: record.totalQuestions,
        percentage: record.percentage,
        completedAt: new Date().toISOString()
      });

      const nextCount = (profile?.completedHomeworkCount || 0) + 1;
      await setDoc(userDocRef, {
        completedHomeworkCount: nextCount,
        updatedAt: new Date().toISOString()
      }, { merge: true });

      setProfile(prev => prev ? { ...prev, completedHomeworkCount: nextCount } : null);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `users/${user.uid}/homework_submissions/${submissionId}`);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        profile,
        signInWithGoogle,
        signInWithEmail,
        signUpWithEmail,
        signOut,
        saveMasteredWords,
        saveHomeworkRecord,
        cloudMasteredIds
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
