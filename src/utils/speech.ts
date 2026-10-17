/**
 * Web Speech API text-to-speech for German pronunciation
 */

let activeUtterance: SpeechSynthesisUtterance | null = null;

export function playGermanAudio(text: string, rate: number = 0.85): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('Speech synthesis is not supported on this browser.');
      resolve();
      return;
    }

    try {
      window.speechSynthesis.cancel();

      // Clean German article if concatenated or keep pure phrase
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = rate;
      utterance.pitch = 1.0;

      // Try to find a high quality German voice
      const voices = window.speechSynthesis.getVoices();
      const germanVoice = voices.find(
        (v) => v.lang.startsWith('de') || v.lang.includes('German')
      );
      if (germanVoice) {
        utterance.voice = germanVoice;
      }

      utterance.onend = () => {
        activeUtterance = null;
        resolve();
      };

      utterance.onerror = () => {
        activeUtterance = null;
        resolve();
      };

      activeUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    } catch {
      resolve();
    }
  });
}

export function stopAudio(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
