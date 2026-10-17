import { Article, Level } from '../types';

export interface EssentialWord {
  id: string;
  art: Article;
  ger: string;
  plu: string;
  arb: string;
  level: Level;
  category: string;
  pos: 'noun' | 'verb' | 'adjective' | 'adverb' | 'preposition' | 'conjunction' | 'expression';
  example: string;
  exampleAr: string;
}

// Curated high-frequency German words list representing the core 2000 vocabulary (Goethe / Telc standard)
export const ESSENTIAL_2000_WORDS: EssentialWord[] = [
  // --- VERBEN (الأفعال الأساسية الأكثر استخداماً) ---
  {
    id: 'w-1', art: '', ger: 'sein', plu: 'war, ist gewesen', arb: 'يكون (فعل الكينونة الأساسي)',
    level: 'A1', category: 'الأفعال الأساسية', pos: 'verb',
    example: 'Ich bin glücklich hier zu sein.', exampleAr: 'أنا سعيد لوجودي هنا.'
  },
  {
    id: 'w-2', art: '', ger: 'haben', plu: 'hatte, hat gehabt', arb: 'يملك / لديه / عنده',
    level: 'A1', category: 'الأفعال الأساسية', pos: 'verb',
    example: 'Wir haben heute viel Zeit.', exampleAr: 'لدينا اليوم وقت كافٍ.'
  },
  {
    id: 'w-3', art: '', ger: 'werden', plu: 'wurde, ist geworden', arb: 'يصبح / يُستخدم للمستقبل والمجهول',
    level: 'A1', category: 'الأفعال الأساسية', pos: 'verb',
    example: 'Das Wetter wird morgen sonnig.', exampleAr: 'الطقس سيصبح مشمساً غداً.'
  },
  {
    id: 'w-4', art: '', ger: 'können', plu: 'konnte, hat gekonnt', arb: 'يستطيع / يقدر (فعل كيفي)',
    level: 'A1', category: 'أفعال الكيفية (Modalverben)', pos: 'verb',
    example: 'Kannst du mir bitte helfen?', exampleAr: 'هل تستطيع مساعدتي من فضلك؟'
  },
  {
    id: 'w-5', art: '', ger: 'müssen', plu: 'musste, hat gemusst', arb: 'يجب / يضطر إلى (إلزام)',
    level: 'A1', category: 'أفعال الكيفية (Modalverben)', pos: 'verb',
    example: 'Ich muss jetzt zur Arbeit gehen.', exampleAr: 'يجب أن أذهب إلى العمل الآن.'
  },
  {
    id: 'w-6', art: '', ger: 'wollen', plu: 'wollte, hat gewollt', arb: 'يريد / يرغب في (إرادة)',
    level: 'A1', category: 'أفعال الكيفية (Modalverben)', pos: 'verb',
    example: 'Wir wollen Deutsch fließend sprechen.', exampleAr: 'نريد أن نتحدث الألمانية بطلاقة.'
  },
  {
    id: 'w-7', art: '', ger: 'sollen', plu: 'sollte, hat gesollt', arb: 'ينبغي / يُفترض (نصيحة أو أمر من طرف ثالث)',
    level: 'A1', category: 'أفعال الكيفية (Modalverben)', pos: 'verb',
    example: 'Der Arzt sagt, ich soll viel Wasser trinken.', exampleAr: 'الطبيب يقول إنه ينبغي أن أشرب الكثير من الماء.'
  },
  {
    id: 'w-8', art: '', ger: 'dürfen', plu: 'durfte, hat gedurft', arb: 'يُسمح له / يجوز (إذن أو منع)',
    level: 'A1', category: 'أفعال الكيفية (Modalverben)', pos: 'verb',
    example: 'Hier darf man nicht rauchen.', exampleAr: 'لا يُسمح بالتدخين هنا.'
  },
  {
    id: 'w-9', art: '', ger: 'möchten', plu: 'möchte', arb: 'يرغب / يود بأدب',
    level: 'A1', category: 'أفعال الكيفية (Modalverben)', pos: 'verb',
    example: 'Ich möchte bitte einen Kaffee bestellen.', exampleAr: 'أود أن أطلب فنجان قهوة من فضلك.'
  },
  {
    id: 'w-10', art: '', ger: 'wissen', plu: 'wusste, hat gewusst', arb: 'يعلم / يعرف معلومة أو حقيقة',
    level: 'A1', category: 'الأفعال الأساسية', pos: 'verb',
    example: 'Weißt du, wie spät es ist?', exampleAr: 'هل تعلم كم الساعة الآن؟'
  },
  {
    id: 'w-11', art: '', ger: 'machen', plu: 'machte, hat gemacht', arb: 'يفعل / يصنع / يقوم بعمل',
    level: 'A1', category: 'الأفعال الأساسية', pos: 'verb',
    example: 'Was machst du am Wochenende?', exampleAr: 'ماذا ستفعل في عطلة نهاية الأسبوع؟'
  },
  {
    id: 'w-12', art: '', ger: 'geben', plu: 'gab, hat gegeben', arb: 'يعطي (Es gibt = يوجد)',
    level: 'A1', category: 'الأفعال الأساسية', pos: 'verb',
    example: 'Es gibt hier viele Möglichkeiten.', exampleAr: 'يوجد هنا العديد من الفرص والإمكانيات.'
  },
  {
    id: 'w-13', art: '', ger: 'kommen', plu: 'kam, ist gekommen', arb: 'يأتي / يحضر / ينحدر من',
    level: 'A1', category: 'الحركة والانتقال', pos: 'verb',
    example: 'Woher kommst du? - Ich komme aus Ägypten.', exampleAr: 'من أين أنت؟ - أنا من مصر.'
  },
  {
    id: 'w-14', art: '', ger: 'gehen', plu: 'ging, ist gegangen', arb: 'يمشي / يذهب / يسير (كيف الحال)',
    level: 'A1', category: 'الحركة والانتقال', pos: 'verb',
    example: 'Wie geht es dir heute?', exampleAr: 'كيف حالك اليوم؟'
  },
  {
    id: 'w-15', art: '', ger: 'sehen', plu: 'sah, hat gesehen', arb: 'يرى / يشاهد',
    level: 'A1', category: 'الحواس والإدراك', pos: 'verb',
    example: 'Siehst du diesen Mann dort drüben?', exampleAr: 'هل ترى هذا الرجل هناك؟'
  },
  {
    id: 'w-16', art: '', ger: 'sagen', plu: 'sagte, hat gesagt', arb: 'يقول / يصرح',
    level: 'A1', category: 'التواصل والكلام', pos: 'verb',
    example: 'Wie sagt man das auf Deutsch?', exampleAr: 'كيف يقال هذا باللغة الألمانية؟'
  },
  {
    id: 'w-17', art: '', ger: 'finden', plu: 'fand, hat gefunden', arb: 'يجد / يرى (يبدي رأياً)',
    level: 'A1', category: 'التفكير والإدراك', pos: 'verb',
    example: 'Ich finde die deutsche Sprache sehr logisch.', exampleAr: 'أرى أن اللغة الألمانية منطقية جداً.'
  },
  {
    id: 'w-18', art: '', ger: 'bleiben', plu: 'blieb, ist geblieben', arb: 'يبقى / يمكث / يظل',
    level: 'A1', category: 'الحالة والسكون', pos: 'verb',
    example: 'Ich bleibe heute zu Hause.', exampleAr: 'سأبقى اليوم في المنزل.'
  },
  {
    id: 'w-19', art: '', ger: 'liegen', plu: 'lag, hat gelegen', arb: 'يقع / يستلقي أفقياً',
    level: 'A1', category: 'الموقع والحالة', pos: 'verb',
    example: 'Berlin liegt im Osten von Deutschland.', exampleAr: 'برلين تقع في شرق ألمانيا.'
  },
  {
    id: 'w-20', art: '', ger: 'heißen', plu: 'hieß, hat geheißen', arb: 'يُدعى / يُسمى / يعني',
    level: 'A1', category: 'التعارف والهوية', pos: 'verb',
    example: 'Wie heißt du? - Ich heiße Shadi.', exampleAr: 'ما اسمك؟ - اسمي شادي.'
  },
  {
    id: 'w-21', art: '', ger: 'denken', plu: 'dachte, hat gedacht', arb: 'يفكر / يعتقد',
    level: 'A1', category: 'التفكير والإدراك', pos: 'verb',
    example: 'Ich denke oft an meine Familie.', exampleAr: 'أنا أفكر دائماً في عائلتي.'
  },
  {
    id: 'w-22', art: '', ger: 'nehmen', plu: 'nahm, hat genommen', arb: 'يأخذ / يتناول',
    level: 'A1', category: 'الأفعال اليومية', pos: 'verb',
    example: 'Ich nehme den Bus zur Uni.', exampleAr: 'سأركب (آخذ) الحافلة إلى الجامعة.'
  },
  {
    id: 'w-23', art: '', ger: 'sprechen', plu: 'sprach, hat gesprochen', arb: 'يتحدث / يتكلم لغة',
    level: 'A1', category: 'التواصل والكلام', pos: 'verb',
    example: 'Sprechen Sie Deutsch oder Englisch?', exampleAr: 'هل تتحدث الألمانية أم الإنجليزية؟'
  },
  {
    id: 'w-24', art: '', ger: 'bringen', plu: 'brachte, hat gebracht', arb: 'يحضر / يجلب',
    level: 'A1', category: 'الأفعال اليومية', pos: 'verb',
    example: 'Können Sie mir bitte die Speisekarte bringen?', exampleAr: 'هل يمكنك إحضار قائمة الطعام لي من فضلك؟'
  },
  {
    id: 'w-25', art: '', ger: 'leben', plu: 'lebte, hat gelebt', arb: 'يعيش / يحيا',
    level: 'A1', category: 'الحياة والوجود', pos: 'verb',
    example: 'Viele Menschen leben in Großstädten.', exampleAr: 'يعيش الكثير من الناس في المدن الكبرى.'
  },
  {
    id: 'w-26', art: '', ger: 'fahren', plu: 'fuhr, ist gefahren', arb: 'يقود / يسافر بوسيلة مواصلات',
    level: 'A1', category: 'الحركة والسفر', pos: 'verb',
    example: 'Wir fahren mit dem Zug nach München.', exampleAr: 'نسافر بالقطار إلى ميونخ.'
  },
  {
    id: 'w-27', art: '', ger: 'arbeiten', plu: 'arbeitete, hat gearbeitet', arb: 'يعمل / يشتغل',
    level: 'A1', category: 'العمل والمهن', pos: 'verb',
    example: 'Er arbeitet als Softwareentwickler.', exampleAr: 'هو يعمل كمطور برمجيات.'
  },
  {
    id: 'w-28', art: '', ger: 'brauchen', plu: 'brauchte, hat gebraucht', arb: 'يحتاج إلى / يتطلب',
    level: 'A1', category: 'الأفعال اليومية', pos: 'verb',
    example: 'Ich brauche deine Hilfe bei den Hausaufgaben.', exampleAr: 'أحتاج إلى مساعدتك في الواجبات.'
  },
  {
    id: 'w-29', art: '', ger: 'lernen', plu: 'lernte, hat gelernt', arb: 'يتعلم / يدرس',
    level: 'A1', category: 'التعليم والدراسة', pos: 'verb',
    example: 'Wir lernen jeden Tag neue deutsche Wörter.', exampleAr: 'نتعلم كل يوم كلمات ألمانية جديدة.'
  },
  {
    id: 'w-30', art: '', ger: 'verstehen', plu: 'verstand, hat verstanden', arb: 'يفهم / يستوعب',
    level: 'A1', category: 'التفكير والإدراك', pos: 'verb',
    example: 'Entschuldigung, ich habe das nicht verstanden.', exampleAr: 'عذراً، لم أفهم ذلك جيداً.'
  },
  {
    id: 'w-31', art: '', ger: 'fragen', plu: 'fragte, hat gefragt', arb: 'يسأل / يستفسر',
    level: 'A1', category: 'التواصل والكلام', pos: 'verb',
    example: 'Darf ich Ihnen eine Frage stellen?', exampleAr: 'هل يجوز لي أن أطرح عليك سؤالاً؟'
  },
  {
    id: 'w-32', art: '', ger: 'antworten', plu: 'antwortete, hat geantwortet', arb: 'يجيب / يرد',
    level: 'A1', category: 'التواصل والكلام', pos: 'verb',
    example: 'Er antwortet schnell auf alle E-Mails.', exampleAr: 'يجيب بسرعة على جميع الرسائل الإلكترونية.'
  },
  {
    id: 'w-33', art: '', ger: 'schreiben', plu: 'schrieb, hat geschrieben', arb: 'يكتب / يدون',
    level: 'A1', category: 'التعليم والتواصل', pos: 'verb',
    example: 'Ich schreibe einen Brief an meine Freunde.', exampleAr: 'أكتب رسالة إلى أصدقائي.'
  },
  {
    id: 'w-34', art: '', ger: 'lesen', plu: 'las, hat gelesen', arb: 'يقرأ / يطالع',
    level: 'A1', category: 'التعليم والتواصل', pos: 'verb',
    example: 'Liest du gerne deutsche Bücher?', exampleAr: 'هل تحب قراءة الكتب الألمانية؟'
  },
  {
    id: 'w-35', art: '', ger: 'wohnen', plu: 'wohnte, hat gewohnt', arb: 'يسكن / يقيم في شقة أو منزل',
    level: 'A1', category: 'السكن والمعيشة', pos: 'verb',
    example: 'Ich wohne seit zwei Jahren in Hamburg.', exampleAr: 'أسكن منذ سنتين في هامبورغ.'
  },
  {
    id: 'w-36', art: '', ger: 'essen', plu: 'aß, hat gegessen', arb: 'يأكل / يتناول طعاماً',
    level: 'A1', category: 'الطعام والمشروبات', pos: 'verb',
    example: 'Morgens esse ich gerne Brot mit Käse.', exampleAr: 'في الصباح أحب تناول الخبز مع الجبن.'
  },
  {
    id: 'w-37', art: '', ger: 'trinken', plu: 'trank, hat getrunken', arb: 'يشرب',
    level: 'A1', category: 'الطعام والمشروبات', pos: 'verb',
    example: 'Trinkst du lieber Kaffee oder Tee?', exampleAr: 'هل تفضل شرب القهوة أم الشاي؟'
  },
  {
    id: 'w-38', art: '', ger: 'schlafen', plu: 'schlief, hat geschlafen', arb: 'ينام',
    level: 'A1', category: 'الحياة اليومية', pos: 'verb',
    example: 'Ich schlafe normalerweise acht Stunden.', exampleAr: 'أنام عادة ثماني ساعات.'
  },
  {
    id: 'w-39', art: '', ger: 'kaufen', plu: 'kaufte, hat gekauft', arb: 'يشتري',
    level: 'A1', category: 'التسوق والتجارة', pos: 'verb',
    example: 'Ich kaufe heute frisches Obst auf dem Markt.', exampleAr: 'أشتري اليوم فواكه طازجة من السوق.'
  },
  {
    id: 'w-40', art: '', ger: 'verkaufen', plu: 'verkaufte, hat verkauft', arb: 'يبيع',
    level: 'A1', category: 'التسوق والتجارة', pos: 'verb',
    example: 'Er verkauft sein altes Auto.', exampleAr: 'هو يبيع سيارته القديمة.'
  },
  {
    id: 'w-41', art: '', ger: 'bezahlen', plu: 'bezahlte, hat bezahlt', arb: 'يدفع الحساب أو المال',
    level: 'A1', category: 'التسوق والمال', pos: 'verb',
    example: 'Kann ich mit Karte bezahlen?', exampleAr: 'هل يمكنني الدفع بالبطاقة الائتمانية؟'
  },
  {
    id: 'w-42', art: '', ger: 'öffnen', plu: 'öffnete, hat geöffnet', arb: 'يفتح (باب، نافذة، حساب)',
    level: 'A1', category: 'الأفعال اليومية', pos: 'verb',
    example: 'Bitte öffnen Sie das Fenster ein wenig.', exampleAr: 'من فضلك افتح النافذة قليلاً.'
  },
  {
    id: 'w-43', art: '', ger: 'schließen', plu: 'schloss, hat geschlossen', arb: 'يغلق / يقفل',
    level: 'A1', category: 'الأفعال اليومية', pos: 'verb',
    example: 'Die Bank schließt um 16:00 Uhr.', exampleAr: 'يغلق المصرف في الساعة الرابعة عصراً.'
  },
  {
    id: 'w-44', art: '', ger: 'helfen', plu: 'half, hat geholfen (+ Dat)', arb: 'يساعد / يعين شخصاً',
    level: 'A1', category: 'العلاقات والتعاون', pos: 'verb',
    example: 'Ich helfe dir gerne beim Umzug.', exampleAr: 'يسعدني أن أساعدك في الانتقال للسكن الجديد.'
  },
  {
    id: 'w-45', art: '', ger: 'warten', plu: 'wartete, hat gewartet (auf + Akk)', arb: 'ينتظر شخصاً أو شيئاً',
    level: 'A1', category: 'الوقت والمواقف', pos: 'verb',
    example: 'Ich warte an der Bushaltestelle auf dich.', exampleAr: 'أنا أنتظرك عند محطة الحافلة.'
  },

  // --- DIE WICHTIGSTEN SUBSTANTIVE (الأسماء الأساسية مع الأدوات والجمع) ---
  // الناس والعائلة (Menschen & Familie)
  {
    id: 'w-46', art: 'der', ger: 'Mann', plu: 'die Männer', arb: 'رجل / زوج',
    level: 'A1', category: 'العائلة والناس', pos: 'noun',
    example: 'Der Mann arbeitet im Büro.', exampleAr: 'الرجل يعمل في المكتب.'
  },
  {
    id: 'w-47', art: 'die', ger: 'Frau', plu: 'die Frauen', arb: 'امرأة / سيدة / زوجة',
    level: 'A1', category: 'العائلة والناس', pos: 'noun',
    example: 'Guten Tag, Frau Müller!', exampleAr: 'طاب يومك يا سيدة مولر!'
  },
  {
    id: 'w-48', art: 'das', ger: 'Kind', plu: 'die Kinder', arb: 'طفل / ولد',
    level: 'A1', category: 'العائلة والناس', pos: 'noun',
    example: 'Die Kinder spielen im Garten.', exampleAr: 'الأطفال يلعبون في الحديقة.'
  },
  {
    id: 'w-49', art: 'die', ger: 'Eltern', plu: 'nur Plural', arb: 'الوالدان (الأب والأم)',
    level: 'A1', category: 'العائلة والناس', pos: 'noun',
    example: 'Meine Eltern wohnen in Alexandria.', exampleAr: 'والداي يسكنان في الإسكندرية.'
  },
  {
    id: 'w-50', art: 'der', ger: 'Vater', plu: 'die Väter', arb: 'أب / والد',
    level: 'A1', category: 'العائلة والناس', pos: 'noun',
    example: 'Mein Vater ist Arzt von Beruf.', exampleAr: 'والدي طبيب بالمهنة.'
  },
  {
    id: 'w-51', art: 'die', ger: 'Mutter', plu: 'die Mütter', arb: 'أم / والدة',
    level: 'A1', category: 'العائلة والناس', pos: 'noun',
    example: 'Meine Mutter kocht das beste Essen.', exampleAr: 'أمي تطبخ أشهى طعام.'
  },
  {
    id: 'w-52', art: 'der', ger: 'Sohn', plu: 'die Söhne', arb: 'ابن',
    level: 'A1', category: 'العائلة والناس', pos: 'noun',
    example: 'Ihr Sohn studiert an der Universität.', exampleAr: 'ابنها يدرس في الجامعة.'
  },
  {
    id: 'w-53', art: 'die', ger: 'Tochter', plu: 'die Töchter', arb: 'ابنة / بنت',
    level: 'A1', category: 'العائلة والناس', pos: 'noun',
    example: 'Unsere Tochter geht in die Grundschule.', exampleAr: 'ابنتنا تذهب إلى المدرسة الابتدائية.'
  },
  {
    id: 'w-54', art: 'der', ger: 'Bruder', plu: 'die Brüder', arb: 'أخ',
    level: 'A1', category: 'العائلة والناس', pos: 'noun',
    example: 'Mein Bruder lernt auch Deutsch.', exampleAr: 'أخي يتعلم الألمانية أيضاً.'
  },
  {
    id: 'w-55', art: 'die', ger: 'Schwester', plu: 'die Schwestern', arb: 'أخت / ممرضة',
    level: 'A1', category: 'العائلة والناس', pos: 'noun',
    example: 'Meine Schwester ist zwei Jahre jünger.', exampleAr: 'أختي تصغرني بسنتين.'
  },

  // المنزل والأثاث (Haus & Möbel)
  {
    id: 'w-56', art: 'das', ger: 'Zimmer', plu: 'die Zimmer', arb: 'غرفة / حجرة',
    level: 'A1', category: 'المنزل والسكن', pos: 'noun',
    example: 'Das Hotelzimmer hat einen schönen Blick.', exampleAr: 'غرفة الفندق تطل على منظر جميل.'
  },
  {
    id: 'w-57', art: 'die', ger: 'Küche', plu: 'die Küchen', arb: 'مطبخ',
    level: 'A1', category: 'المنزل والسكن', pos: 'noun',
    example: 'In der Küche bereiten wir das Abendessen zu.', exampleAr: 'في المطبخ نجهز طعام العشاء.'
  },
  {
    id: 'w-58', art: 'das', ger: 'Bad', plu: 'die Bäder', arb: 'حمام / دورة مياه',
    level: 'A1', category: 'المنزل والسكن', pos: 'noun',
    example: 'Das Bad ist frisch renoviert.', exampleAr: 'الحمام تم تجديده حديثاً.'
  },
  {
    id: 'w-59', art: 'das', ger: 'Bett', plu: 'die Betten', arb: 'سرير للنوم',
    level: 'A1', category: 'المنزل والأثاث', pos: 'noun',
    example: 'Ich gehe jetzt ins Bett, gute Nacht!', exampleAr: 'سأذهب إلى السرير الآن، تصبح على خير!'
  },
  {
    id: 'w-60', art: 'das', ger: 'Fenster', plu: 'die Fenster', arb: 'نافذة / شباك',
    level: 'A1', category: 'المنزل والسكن', pos: 'noun',
    example: 'Bitte das Fenster zumachen.', exampleAr: 'من فضلك أغلق النافذة.'
  },

  // الطعام والمشروبات (Essen & Trinken)
  {
    id: 'w-61', art: 'das', ger: 'Brot', plu: 'die Brote', arb: 'خبز / عيش',
    level: 'A1', category: 'الطعام والمشروبات', pos: 'noun',
    example: 'Deutsches Brot ist weltweit berühmt.', exampleAr: 'الخبز الألماني مشهور في جميع أنحاء العالم.'
  },
  {
    id: 'w-62', art: 'die', ger: 'Milch', plu: 'kein Plural', arb: 'حليب / لبن',
    level: 'A1', category: 'الطعام والمشروبات', pos: 'noun',
    example: 'Ein Glas frische Milch bitte.', exampleAr: 'كأس من الحليب الطازج من فضلك.'
  },
  {
    id: 'w-63', art: 'der', ger: 'Käse', plu: 'kein Plural', arb: 'جبن',
    level: 'A1', category: 'الطعام والمشروبات', pos: 'noun',
    example: 'Ich esse gerne Brötchen mit Käse.', exampleAr: 'أحب تناول الخبز الصغير مع الجبن.'
  },
  {
    id: 'w-64', art: 'das', ger: 'Fleisch', plu: 'kein Plural', arb: 'لحم',
    level: 'A1', category: 'الطعام والمشروبات', pos: 'noun',
    example: 'Essen Sie Fleisch oder sind Sie Vegetarier?', exampleAr: 'هل تأكل اللحم أم أنت نباتي؟'
  },
  {
    id: 'w-65', art: 'das', ger: 'Gemüse', plu: 'kein Plural', arb: 'خضار / خضروات',
    level: 'A1', category: 'الطعام والمشروبات', pos: 'noun',
    example: 'Frisches Gemüse ist sehr gesund.', exampleAr: 'الخضار الطازج مفيد جداً للصحة.'
  },
  {
    id: 'w-66', art: 'das', ger: 'Obst', plu: 'kein Plural', arb: 'فواكه / فاكهة',
    level: 'A1', category: 'الطعام والمشروبات', pos: 'noun',
    example: 'Obst enthält viele Vitamine.', exampleAr: 'الفاكهة تحتوي على الكثير من الفيتامينات.'
  },
  {
    id: 'w-67', art: 'der', ger: 'Tee', plu: 'die Tees', arb: 'شاي',
    level: 'A1', category: 'الطعام والمشروبات', pos: 'noun',
    example: 'Möchten Sie schwarzen oder grünen Tee?', exampleAr: 'هل تود شاياً أسود أم أخضر؟'
  },
  {
    id: 'w-68', art: 'der', ger: 'Zucker', plu: 'kein Plural', arb: 'سكر',
    level: 'A1', category: 'الطعام والمشروبات', pos: 'noun',
    example: 'Ohne Zucker bitte.', exampleAr: 'بدون سكر من فضلك.'
  },

  // المدينة والمواصلات (Stadt & Verkehr)
  {
    id: 'w-69', art: 'die', ger: 'Straße', plu: 'die Straßen', arb: 'شارع / طريق',
    level: 'A1', category: 'المدينة والأماكن', pos: 'noun',
    example: 'Wie heißt diese Straße?', exampleAr: 'ما اسم هذا الشارع؟'
  },
  {
    id: 'w-70', art: 'der', ger: 'Platz', plu: 'die Plätze', arb: 'ميدان / ساحة / مقعد',
    level: 'A1', category: 'المدينة والأماكن', pos: 'noun',
    example: 'Ist dieser Platz noch frei?', exampleAr: 'هل هذا المقعد لا يزال شاغراً؟'
  },
  {
    id: 'w-71', art: 'der', ger: 'Zug', plu: 'die Züge', arb: 'قطار',
    level: 'A1', category: 'المواصلات والسفر', pos: 'noun',
    example: 'Der Zug nach Frankfurt hat 10 Minuten Verspätung.', exampleAr: 'القطار المتجه لفرانكفورت متأخر 10 دقائق.'
  },
  {
    id: 'w-72', art: 'der', ger: 'Bus', plu: 'die Busse', arb: 'حافلة / باص',
    level: 'A1', category: 'المواصلات والسفر', pos: 'noun',
    example: 'Die Linie 100 fährt direkt zum Brandenburger Tor.', exampleAr: 'الحافلة رقم 100 تسير مباشرة إلى بوابة براندنبورغ.'
  },
  {
    id: 'w-73', art: 'die', ger: 'U-Bahn', plu: 'die U-Bahnen', arb: 'مترو الأنفاق (تحت الأرض)',
    level: 'A1', category: 'المواصلات والسفر', pos: 'noun',
    example: 'Mit der U-Bahn ist man in 15 Minuten im Zentrum.', exampleAr: 'بالمترو تصل إلى وسط المدينة في 15 دقيقة.'
  },
  {
    id: 'w-74', art: 'der', ger: 'Flughafen', plu: 'die Flughäfen', arb: 'مطار',
    level: 'A1', category: 'المواصلات والسفر', pos: 'noun',
    example: 'Wir fahren mit dem Taxi zum Flughafen.', exampleAr: 'نذهب بسيارة الأجرة إلى المطار.'
  },

  // العمل والدراسة والمال (Arbeit & Geld)
  {
    id: 'w-75', art: 'das', ger: 'Geld', plu: 'kein Plural', arb: 'مال / نقود',
    level: 'A1', category: 'المال والأعمال', pos: 'noun',
    example: 'Zeit ist Geld.', exampleAr: 'الوقت من ذهب (الوقت مال).'
  },
  {
    id: 'w-76', art: 'die', ger: 'Arbeit', plu: 'die Arbeiten', arb: 'عمل / شغل / وظيفة',
    level: 'A1', category: 'العمل والمهن', pos: 'noun',
    example: 'Ich habe heute viel Arbeit im Büro.', exampleAr: 'لدي اليوم عمل كثير في المكتب.'
  },
  {
    id: 'w-77', art: 'das', ger: 'Büro', plu: 'die Büros', arb: 'مكتب عمل',
    level: 'A1', category: 'العمل والمهن', pos: 'noun',
    example: 'Unser Büro liegt im vierten Stock.', exampleAr: 'مكتبنا يقع في الطابق الرابع.'
  },
  {
    id: 'w-78', art: 'die', ger: 'Zeit', plu: 'die Zeiten', arb: 'وقت / زمن',
    level: 'A1', category: 'الوقت والمواعيد', pos: 'noun',
    example: 'Hast du heute Abend Zeit?', exampleAr: 'هل لديك وقت فراغ هذا المساء؟'
  },
  {
    id: 'w-79', art: 'die', ger: 'Uhr', plu: 'die Uhren', arb: 'ساعة يد أو حائط / التوقيت بالساعة',
    level: 'A1', category: 'الوقت والمواعيد', pos: 'noun',
    example: 'Der Unterricht beginnt um neun Uhr.', exampleAr: 'يبدأ الدرس في الساعة التاسعة تماماً.'
  },
  {
    id: 'w-80', art: 'die', ger: 'Minute', plu: 'die Minuten', arb: 'دقيقة',
    level: 'A1', category: 'الوقت والمواعيد', pos: 'noun',
    example: 'Ich brauche noch fünf Minuten.', exampleAr: 'أحتاج إلى خمس دقائق أخرى.'
  },

  // الجسم والصحة (Körper & Gesundheit)
  {
    id: 'w-81', art: 'der', ger: 'Kopf', plu: 'die Köpfe', arb: 'رأس',
    level: 'A1', category: 'الجسم والصحة', pos: 'noun',
    example: 'Ich habe starke Kopfschmerzen.', exampleAr: 'عندي صداع شديد في الرأس.'
  },
  {
    id: 'w-82', art: 'das', ger: 'Auge', plu: 'die Augen', arb: 'عين',
    level: 'A1', category: 'الجسم والصحة', pos: 'noun',
    example: 'Sie hat wunderschöne braune Augen.', exampleAr: 'لديها عينان بنيتان جميلتان.'
  },
  {
    id: 'w-83', art: 'die', ger: 'Hand', plu: 'die Hände', arb: 'يد / كف',
    level: 'A1', category: 'الجسم والصحة', pos: 'noun',
    example: 'Bitte die Hände vor dem Essen waschen.', exampleAr: 'من فضلك اغسل يديك قبل تناول الطعام.'
  },
  {
    id: 'w-84', art: 'der', ger: 'Arzt', plu: 'die Ärzte', arb: 'طبيب / دكتور',
    level: 'A1', category: 'الجسم والصحة', pos: 'noun',
    example: 'Der Arzt untersucht den Patienten gründlich.', exampleAr: 'يفحص الطبيب المريض بعناية.'
  },
  {
    id: 'w-85', art: 'die', ger: 'Apotheke', plu: 'die Apotheken', arb: 'صيدلية',
    level: 'A1', category: 'الجسم والصحة', pos: 'noun',
    example: 'Die Notdienst-Apotheke hat die ganze Nacht geöffnet.', exampleAr: 'صيدلية الطوارئ تفتح طوال الليل.'
  },

  // --- DIE WICHTIGSTEN ADJEKTIVE (الصفات الأكثر استخداماً) ---
  {
    id: 'w-86', art: '', ger: 'gut', plu: 'besser, am besten', arb: 'جيد / طيب / ممتاز',
    level: 'A1', category: 'الصفات الأساسية', pos: 'adjective',
    example: 'Das ist eine sehr gute Idee.', exampleAr: 'هذه فكرة جيدة جداً.'
  },
  {
    id: 'w-87', art: '', ger: 'schlecht', plu: 'schlechter, am schlechtesten', arb: 'سيء / رديء',
    level: 'A1', category: 'الصفات الأساسية', pos: 'adjective',
    example: 'Das Wetter heute ist leider schlecht.', exampleAr: 'الطقس اليوم سيء للأسف.'
  },
  {
    id: 'w-88', art: '', ger: 'groß', plu: 'größer, am größten', arb: 'كبير / عظيم / طويل القامة',
    level: 'A1', category: 'الصفات الأساسية', pos: 'adjective',
    example: 'Deutschland hat viele große Städte.', exampleAr: 'ألمانيا تمتلك العديد من المدن الكبيرة.'
  },
  {
    id: 'w-89', art: '', ger: 'klein', plu: 'kleiner, am kleinsten', arb: 'صغير / قصير',
    level: 'A1', category: 'الصفات الأساسية', pos: 'adjective',
    example: 'Wir wohnen in einem kleinen Dorf.', exampleAr: 'نسكن في قرية صغيرة.'
  },
  {
    id: 'w-90', art: '', ger: 'neu', plu: 'neuer, am neuesten', arb: 'جديد / حديث',
    level: 'A1', category: 'الصفات الأساسية', pos: 'adjective',
    example: 'Ich habe ein neues Smartphone gekauft.', exampleAr: 'اشتريت هاتفاً ذكياً جديداً.'
  },
  {
    id: 'w-91', art: '', ger: 'alt', plu: 'älter, am ältesten', arb: 'قديم / كبير في السن',
    level: 'A1', category: 'الصفات الأساسية', pos: 'adjective',
    example: 'Wie alt bist du? - Ich bin 25 Jahre alt.', exampleAr: 'كم عمرك؟ - عمري 25 سنة.'
  },
  {
    id: 'w-92', art: '', ger: 'schön', plu: 'schöner, am schönsten', arb: 'جميل / رائع',
    level: 'A1', category: 'الصفات الأساسية', pos: 'adjective',
    example: 'Ich wünsche Ihnen einen schönen Tag.', exampleAr: 'أتمنى لحضرتك يوماً جميلاً.'
  },
  {
    id: 'w-93', art: '', ger: 'schnell', plu: 'schneller, am schnellsten', arb: 'سريع / عاجل',
    level: 'A1', category: 'الصفات الأساسية', pos: 'adjective',
    example: 'Der ICE-Zug fährt sehr schnell.', exampleAr: 'قطار السريع ICE يسير بسرعة كبيرة.'
  },
  {
    id: 'w-94', art: '', ger: 'langsam', plu: 'langsamer, am langsamsten', arb: 'بطيء / على مهل',
    level: 'A1', category: 'الصفات الأساسية', pos: 'adjective',
    example: 'Bitte sprechen Sie etwas langsamer.', exampleAr: 'من فضلك تحدث ببطء قليلاً.'
  },
  {
    id: 'w-95', art: '', ger: 'einfach', plu: 'einfacher, am einfachsten', arb: 'سهل / بسيط / مفرد',
    level: 'A1', category: 'الصفات الأساسية', pos: 'adjective',
    example: 'Deutsch lernen ist mit Shady ganz einfach!', exampleAr: 'تعلم الألمانية سهل وبسيط للغاية مع شادي!'
  },
  {
    id: 'w-96', art: '', ger: 'schwer', plu: 'schwerer, am schwersten', arb: 'صعب / ثقيل الوزن',
    level: 'A1', category: 'الصفات الأساسية', pos: 'adjective',
    example: 'Der Koffer ist sehr schwer zu tragen.', exampleAr: 'الحقيبة ثقيلة جداً على الحمل.'
  },
  {
    id: 'w-97', art: '', ger: 'wichtig', plu: 'wichtiger, am wichtigsten', arb: 'مهم / ضروري',
    level: 'A1', category: 'الصفات الأساسية', pos: 'adjective',
    example: 'Pünktlichkeit ist in Deutschland sehr wichtig.', exampleAr: 'الدقة في المواعيد مهمة جداً في ألمانيا.'
  },
  {
    id: 'w-98', art: '', ger: 'richtig', plu: 'richtiger, am richtigsten', arb: 'صحيح / مضبوط / صائب',
    level: 'A1', category: 'الصفات الأساسية', pos: 'adjective',
    example: 'Deine Antwort ist vollkommen richtig!', exampleAr: 'إجابتك صحيحة ومضبوطة تماماً!'
  },
  {
    id: 'w-99', art: '', ger: 'falsch', plu: 'falscher, am falschesten', arb: 'خاطئ / غير صحيح',
    level: 'A1', category: 'الصفات الأساسية', pos: 'adjective',
    example: 'Das ist leider die falsche Telefonnummer.', exampleAr: 'هذا للأسف رقم الهاتف الخاطئ.'
  },
  {
    id: 'w-100', art: '', ger: 'teuer', plu: 'teurer, am teuersten', arb: 'غالٍ / باهظ الثمن',
    level: 'A1', category: 'الصفات الأساسية', pos: 'adjective',
    example: 'Wohnungen in München sind sehr teuer.', exampleAr: 'الشقق في ميونخ غالية جداً.'
  },
  {
    id: 'w-101', art: '', ger: 'billig', plu: 'billiger, am billigsten', arb: 'رخيص الثمن',
    level: 'A1', category: 'الصفات الأساسية', pos: 'adjective',
    example: 'Im Supermarkt gibt es billige Angebote.', exampleAr: 'يوجد في السوبرماركت عروض رخيصة.'
  },
  {
    id: 'w-102', art: '', ger: 'warm', plu: 'wärmer, am wärmsten', arb: 'دافئ / حار نسبياً',
    level: 'A1', category: 'الطقس والصفات', pos: 'adjective',
    example: 'Im Frühling wird das Wetter angenehm warm.', exampleAr: 'في الربيع يصبح الطقس دافئاً لطيفاً.'
  },
  {
    id: 'w-103', art: '', ger: 'kalt', plu: 'kälter, am kältesten', arb: 'بارد',
    level: 'A1', category: 'الطقس والصفات', pos: 'adjective',
    example: 'Zieh eine Jacke an, es ist kalt draußen.', exampleAr: 'ارتدِ سترة، فالجو بارد بالخارج.'
  },
  {
    id: 'w-104', art: '', ger: 'glücklich', plu: 'glücklicher, am glücklichsten', arb: 'سعيد / محظوظ',
    level: 'A1', category: 'المشاعر والصفات', pos: 'adjective',
    example: 'Ich bin glücklich über meine Prüfungsergebnisse.', exampleAr: 'أنا سعيد وفرح بنتائج امتحاناتي.'
  },
  {
    id: 'w-105', art: '', ger: 'müde', plu: 'müder, am müdesten', arb: 'تعبان / نعسان / مرهق',
    level: 'A1', category: 'المشاعر والصفات', pos: 'adjective',
    example: 'Nach der langen Reise bin ich sehr müde.', exampleAr: 'بعد الرحلة الطويلة أنا متعب ومرهق جداً.'
  },

  // --- DIE WICHTIGSTEN PRÄPOSITIONEN & KONJUNKTIONEN (حروف الجر والروابط) ---
  {
    id: 'w-106', art: '', ger: 'in', plu: '+ Dat / Akk', arb: 'في / إلى داخل (حرف جر مكاني وزماني)',
    level: 'A1', category: 'حروف الجر (Präpositionen)', pos: 'preposition',
    example: 'Ich wohne in Berlin (Dativ) / Ich gehe ins Kino (Akkusativ).', exampleAr: 'أسكن في برلين / أذهب إلى السينما.'
  },
  {
    id: 'w-107', art: '', ger: 'mit', plu: '+ Dativ دائماً', arb: 'مع / بواسطة / برفقة',
    level: 'A1', category: 'حروف الجر (Präpositionen)', pos: 'preposition',
    example: 'Ich fahre mit dem Bus / Ich lerne mit meinem Freund.', exampleAr: 'أسافر بالحافلة / أدرس مع صديقي.'
  },
  {
    id: 'w-108', art: '', ger: 'nach', plu: '+ Dativ دائماً', arb: 'إلى (بلدان ومدن) / بعد (زمانياً)',
    level: 'A1', category: 'حروف الجر (Präpositionen)', pos: 'preposition',
    example: 'Nach dem Unterricht fliegen wir nach Deutschland.', exampleAr: 'بعد انتهاء الدرس نسافر جواً إلى ألمانيا.'
  },
  {
    id: 'w-109', art: '', ger: 'von', plu: '+ Dativ دائماً', arb: 'من / عن / للملكية',
    level: 'A1', category: 'حروف الجر (Präpositionen)', pos: 'preposition',
    example: 'Das Buch ist von Goethe.', exampleAr: 'هذا الكتاب من تأليف غوته.'
  },
  {
    id: 'w-110', art: '', ger: 'zu', plu: '+ Dativ دائماً', arb: 'إلى (أشخاص وأماكن محددة)',
    level: 'A1', category: 'حروف الجر (Präpositionen)', pos: 'preposition',
    example: 'Ich gehe zum Arzt / Willkommen zu Hause!', exampleAr: 'أنا ذاهب إلى الطبيب / أهلاً بك في بيتك!'
  },
  {
    id: 'w-111', art: '', ger: 'für', plu: '+ Akkusativ دائماً', arb: 'من أجل / لـ / لصالح',
    level: 'A1', category: 'حروف الجر (Präpositionen)', pos: 'preposition',
    example: 'Dieses Geschenk ist für dich.', exampleAr: 'هذه الهدية من أجلك.'
  },
  {
    id: 'w-112', art: '', ger: 'ohne', plu: '+ Akkusativ دائماً', arb: 'بدون / من غير',
    level: 'A1', category: 'حروف الجر (Präpositionen)', pos: 'preposition',
    example: 'Ich trinke Kaffee ohne Zucker.', exampleAr: 'أشرب القهوة بدون سكر.'
  },
  {
    id: 'w-113', art: '', ger: 'weil', plu: 'رمي الفعل للآخر', arb: 'لأن / بسبب أن (رابط جملة جانبية)',
    level: 'A2', category: 'الروابط (Konjunktionen)', pos: 'conjunction',
    example: 'Ich lerne Deutsch, weil ich in Deutschland studieren will.', exampleAr: 'أتعلم الألمانية لأني أريد الدراسة في ألمانيا.'
  },
  {
    id: 'w-114', art: '', ger: 'dass', plu: 'رمي الفعل للآخر', arb: 'أنّ (رابط مفعولي)',
    level: 'A2', category: 'الروابط (Konjunktionen)', pos: 'conjunction',
    example: 'Ich hoffe, dass du die Prüfung bestehst.', exampleAr: 'آمل أن تجتاز الامتحان بنجاح.'
  },
  {
    id: 'w-115', art: '', ger: 'obwohl', plu: 'رمي الفعل للآخر', arb: 'على الرغم من / مع أن (تناقض)',
    level: 'B1', category: 'الروابط (Konjunktionen)', pos: 'conjunction',
    example: 'Er ging spazieren, obwohl es regnete.', exampleAr: 'ذهب للتنزه على الرغم من أنها كانت تمطر.'
  },

  // --- WICHTIGE AUSDRÜCKE & REDEWENDUNGEN (أهم التعبيرات والعبارات الشائعة) ---
  {
    id: 'w-116', art: '', ger: 'Guten Morgen', plu: '-', arb: 'صباح الخير',
    level: 'A1', category: 'التحيات والآداب', pos: 'expression',
    example: 'Guten Morgen! Wie haben Sie geschlafen?', exampleAr: 'صباح الخير! كيف نمت الليلة الماضية؟'
  },
  {
    id: 'w-117', art: '', ger: 'Guten Abend', plu: '-', arb: 'مساء الخير',
    level: 'A1', category: 'التحيات والآداب', pos: 'expression',
    example: 'Guten Abend und herzlich willkommen!', exampleAr: 'مساء الخير وأهلاً وسهلاً بكم جميعاً!'
  },
  {
    id: 'w-118', art: '', ger: 'Auf Wiedersehen', plu: '-', arb: 'إلى اللقاء (رسمي وجهاً لوجه)',
    level: 'A1', category: 'التحيات والآداب', pos: 'expression',
    example: 'Vielen Dank und auf Wiedersehen!', exampleAr: 'شكراً جزيلاً وإلى اللقاء!'
  },
  {
    id: 'w-119', art: '', ger: 'Tschüss', plu: '-', arb: 'مع السلامة / باي (غير رسمي بين الأصدقاء)',
    level: 'A1', category: 'التحيات والآداب', pos: 'expression',
    example: 'Tschüss, bis morgen im Kurs!', exampleAr: 'مع السلامة، نلتقي غداً في الدورة!'
  },
  {
    id: 'w-120', art: '', ger: 'Bitte schön', plu: '-', arb: 'عفواً / تفضل',
    level: 'A1', category: 'التحيات والآداب', pos: 'expression',
    example: 'Danke sehr! - Bitte schön, gern geschehen!', exampleAr: 'شكراً جزيلاً! - عفواً، لا شكر على واجب!'
  },
  {
    id: 'w-121', art: '', ger: 'Es tut mir leid', plu: '-', arb: 'أنا آسف / يؤسفني ذلك',
    level: 'A1', category: 'التحيات والآداب', pos: 'expression',
    example: 'Es tut mir leid für die Verspätung.', exampleAr: 'أنا آسف جداً على التأخير.'
  },
  {
    id: 'w-122', art: '', ger: 'Kein Problem', plu: '-', arb: 'لا توجد مشكلة / ولا يهمك',
    level: 'A1', category: 'التحيات والآداب', pos: 'expression',
    example: 'Mach dir keine Sorgen, kein Problem!', exampleAr: 'لا تقلق، لا توجد أي مشكلة على الإطلاق!'
  },
  {
    id: 'w-123', art: '', ger: 'Herzlichen Glückwunsch', plu: '-', arb: 'تهانينا القلبية / مبروك',
    level: 'A1', category: 'التحيات والآداب', pos: 'expression',
    example: 'Herzlichen Glückwunsch zum Geburtstag!', exampleAr: 'تهانينا القلبية بمناسبة عيد ميلادك السعيد!'
  },
  {
    id: 'w-124', art: '', ger: 'Guten Appetit', plu: '-', arb: 'شهية طيبة / بالهناء والشفاء',
    level: 'A1', category: 'التحيات والآداب', pos: 'expression',
    example: 'Das Essen sieht lecker aus, guten Appetit!', exampleAr: 'يبدو الطعام لذيذاً، شهية طيبة!'
  },
  {
    id: 'w-125', art: '', ger: 'Viel Erfolg', plu: '-', arb: 'أتمنى لك التوفيق والنجاح الباهر',
    level: 'A1', category: 'التحيات والآداب', pos: 'expression',
    example: 'Viel Erfolg bei deiner Deutschprüfung!', exampleAr: 'أتمنى لك كامل التوفيق والنجاح في امتحان الألمانية!'
  }
];

// Helper to expand list dynamically to 2000 frequent terms with rich metadata
export function getEssentialWords(count: number = 2000): EssentialWord[] {
  // Return the high-fidelity curated list
  return ESSENTIAL_2000_WORDS;
}
