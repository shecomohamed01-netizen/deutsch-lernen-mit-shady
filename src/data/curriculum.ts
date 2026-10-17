import { VocabItem, GrammarRule, HomeworkQuestion, VerbConjugation, SentenceExercise } from '../types';

export const VOCABULARY_DATA: VocabItem[] = [
  // ================= A1 =================
  {
    id: 'a1-1',
    art: 'der',
    ger: 'Apfel',
    plu: 'die Äpfel',
    arb: 'تفاحة',
    level: 'A1',
    category: 'الطعام والمشروبات',
    example: 'Ich esse jeden Morgen einen frischen Apfel.',
    exampleAr: 'أنا آكل كل صباح تفاحة طازجة.',
    note: 'اسم مذكر ينتهي بـ -el وغالباً ما يكون مفرده der.'
  },
  {
    id: 'a1-2',
    art: 'die',
    ger: 'Sonne',
    plu: 'die Sonnen',
    arb: 'شمس',
    level: 'A1',
    category: 'الطبيعة والطقس',
    example: 'Die Sonne scheint heute sehr warm in Berlin.',
    exampleAr: 'الشمس تشرق اليوم دافئة جداً في برلين.',
    note: 'معظم الأسماء المنتهية بحرف e تكون مؤنثة (die).'
  },
  {
    id: 'a1-3',
    art: 'das',
    ger: 'Haus',
    plu: 'die Häuser',
    arb: 'منزل / بيت',
    level: 'A1',
    category: 'المنزل والأثاث',
    example: 'Das Haus von Familie Müller ist sehr schön.',
    exampleAr: 'منزل عائلة مولر جميل جداً.',
    note: 'اسم محايد، جمعه يتحول بإضافة أوملاوت + er.'
  },
  {
    id: 'a1-4',
    art: 'der',
    ger: 'Tisch',
    plu: 'die Tische',
    arb: 'طاولة / مكتب',
    level: 'A1',
    category: 'المنزل والأثاث',
    example: 'Das Buch liegt auf dem Tisch.',
    exampleAr: 'الكتاب موجود فوق الطاولة.'
  },
  {
    id: 'a1-5',
    art: 'die',
    ger: 'Schule',
    plu: 'die Schulen',
    arb: 'مدرسة',
    level: 'A1',
    category: 'التعليم والدراسة',
    example: 'Die Kinder gehen um acht Uhr in die Schule.',
    exampleAr: 'يذهب الأطفال في الساعة الثامنة إلى المدرسة.'
  },
  {
    id: 'a1-6',
    art: 'das',
    ger: 'Buch',
    plu: 'die Bücher',
    arb: 'كتاب',
    level: 'A1',
    category: 'التعليم والدراسة',
    example: 'Ich lese ein deutsches Buch über Geschichte.',
    exampleAr: 'أقرأ كتاباً ألمانياً عن التاريخ.'
  },
  {
    id: 'a1-7',
    art: 'der',
    ger: 'Kaffee',
    plu: 'die Kaffees',
    arb: 'قهوة',
    level: 'A1',
    category: 'الطعام والمشروبات',
    example: 'Möchten Sie einen Kaffee ohne Zucker trinken?',
    exampleAr: 'هل ترغب في شرب قهوة بدون سكر؟'
  },
  {
    id: 'a1-8',
    art: 'die',
    ger: 'Tasche',
    plu: 'die Taschen',
    arb: 'حقيبة / شنطة',
    level: 'A1',
    category: 'الحياة اليومية',
    example: 'Meine Tasche steht neben der Tür.',
    exampleAr: 'حقيبتي موجودة بجوار الباب.'
  },
  {
    id: 'a1-9',
    art: 'das',
    ger: 'Auto',
    plu: 'die Autos',
    arb: 'سيارة',
    level: 'A1',
    category: 'المواصلات والسفر',
    example: 'Das Auto fährt sehr schnell auf der Autobahn.',
    exampleAr: 'السيارة تسير بسرعة كبيرة على الطريق السريع.'
  },
  {
    id: 'a1-10',
    art: 'der',
    ger: 'Freund',
    plu: 'die Freunde',
    arb: 'صديق',
    level: 'A1',
    category: 'العلاقات والناس',
    example: 'Mein bester Freund wohnt in Frankfurt.',
    exampleAr: 'صديقي المقرب يسكن في فرانكفورت.'
  },
  {
    id: 'a1-11',
    art: 'die',
    ger: 'Stadt',
    plu: 'die Städte',
    arb: 'مدينة',
    level: 'A1',
    category: 'المواقع والأماكن',
    example: 'München ist eine wunderschöne deutsche Stadt.',
    exampleAr: 'ميونخ مدينة ألمانية رائعة الجمال.'
  },
  {
    id: 'a1-12',
    art: 'das',
    ger: 'Wasser',
    plu: 'die Wasser',
    arb: 'ماء',
    level: 'A1',
    category: 'الطعام والمشروبات',
    example: 'Bitte ein Glas stilles Wasser.',
    exampleAr: 'من فضلك كأس ماء غير غازي.'
  },
  {
    id: 'a1-13',
    art: 'der',
    ger: 'Stuhl',
    plu: 'die Stühle',
    arb: 'كرسي',
    level: 'A1',
    category: 'المنزل والأثاث',
    example: 'Nehmen Sie bitte auf dem Stuhl Platz.',
    exampleAr: 'تفضل بالجلوس على الكرسي من فضلك.'
  },
  {
    id: 'a1-14',
    art: 'die',
    ger: 'Tür',
    plu: 'die Türen',
    arb: 'باب',
    level: 'A1',
    category: 'المنزل والأثاث',
    example: 'Bitte schließen Sie die Tür leise.',
    exampleAr: 'من فضلك أغلق الباب بهدوء.'
  },
  {
    id: 'a1-15',
    art: 'das',
    ger: 'Zimmer',
    plu: 'die Zimmer',
    arb: 'غرفة',
    level: 'A1',
    category: 'المنزل والأثاث',
    example: 'Das Zimmer ist hell und gemütlich.',
    exampleAr: 'الغرفة مضيئة ومريحة.'
  },

  // ================= A2 =================
  {
    id: 'a2-1',
    art: 'das',
    ger: 'Flugzeug',
    plu: 'die Flugzeuge',
    arb: 'طائرة',
    level: 'A2',
    category: 'المواصلات والسفر',
    example: 'Das Flugzeug landet pünktlich um 14:00 Uhr.',
    exampleAr: 'تهبط الطائرة في موعدها تمام الساعة الثانية بعد الظهر.'
  },
  {
    id: 'a2-2',
    art: 'der',
    ger: 'Bahnhof',
    plu: 'die Bahnhöfe',
    arb: 'محطة قطار',
    level: 'A2',
    category: 'المواصلات والسفر',
    example: 'Wir treffen uns am Hauptbahnhof Gleis 4.',
    exampleAr: 'سنلتقي في محطة القطارات المركزية عند الرصيف رقم 4.'
  },
  {
    id: 'a2-3',
    art: 'die',
    ger: 'Heimat',
    plu: 'kein Plural',
    arb: 'الوطن / مسقط الرأس',
    level: 'A2',
    category: 'المشاعر والمجتمع',
    example: 'Heimat ist dort, wo man sich wohlfühlt.',
    exampleAr: 'الوطن هو المكان الذي يشعر فيه المرء بالراحة والأمان.'
  },
  {
    id: 'a2-4',
    art: 'das',
    ger: 'Ergebnis',
    plu: 'die Ergebnisse',
    arb: 'نتيجة / حصيلة',
    level: 'A2',
    category: 'العمل والدراسة',
    example: 'Das Prüfungsergebnis war überraschend positiv.',
    exampleAr: 'كانت نتيجة الامتحان إيجابية على نحو غير متوقع.'
  },
  {
    id: 'a2-5',
    art: 'die',
    ger: 'Rechnung',
    plu: 'die Rechnungen',
    arb: 'فاتورة / حساب',
    level: 'A2',
    category: 'التسوق والمعاملات',
    example: 'Könnten Sie mir bitte die Rechnung bringen?',
    exampleAr: 'هل بإمكانك من فضلك إحضار الفاتورة لي؟'
  },
  {
    id: 'a2-6',
    art: 'der',
    ger: 'Urlaub',
    plu: 'die Urlaube',
    arb: 'إجازة / عطلة',
    level: 'A2',
    category: 'الترفيه والسياحة',
    example: 'Im August mache ich zwei Wochen Urlaub am Meer.',
    exampleAr: 'في شهر أغسطس سآخذ إجازة لمدة أسبوعين على شاطئ البحر.'
  },
  {
    id: 'a2-7',
    art: 'das',
    ger: 'Krankenhaus',
    plu: 'die Krankenhäuser',
    arb: 'مستشفى',
    level: 'A2',
    category: 'الصحة والطب',
    example: 'Er arbeitet als Assistenzarzt im Krankenhaus.',
    exampleAr: 'يعمل كطبيب مقيم في المستشفى.'
  },
  {
    id: 'a2-8',
    art: 'die',
    ger: 'Wohnung',
    plu: 'die Wohnungen',
    arb: 'شقة سكنية',
    level: 'A2',
    category: 'السكن والعقارات',
    example: 'Die Dreizimmerwohnung hat einen großen Balkon.',
    exampleAr: 'الشقة المكونة من ثلاث غرف تحتوي على شرفة كبيرة.'
  },
  {
    id: 'a2-9',
    art: 'der',
    ger: 'Kollege',
    plu: 'die Kollegen',
    arb: 'زميل عمل',
    level: 'A2',
    category: 'بيئة العمل',
    example: 'Mein Kollege hilft mir bei der Vorbereitung.',
    exampleAr: 'زميلي في العمل يساعدني في التحضير والإعداد.'
  },
  {
    id: 'a2-10',
    art: 'der',
    ger: 'Beruf',
    plu: 'die Berufe',
    arb: 'مهنة / وظيفة',
    level: 'A2',
    category: 'بيئة العمل',
    example: 'Was sind Sie von Beruf?',
    exampleAr: 'ما هي مهنتك أو عملك؟'
  },
  {
    id: 'a2-11',
    art: 'die',
    ger: 'Gesundheit',
    plu: 'kein Plural',
    arb: 'صحة وعافية',
    level: 'A2',
    category: 'الصحة والطب',
    example: 'Gesundheit ist das Wichtigste im Leben.',
    exampleAr: 'الصحة هي أهم ما في الحياة.'
  },

  // ================= B1 =================
  {
    id: 'b1-1',
    art: 'der',
    ger: 'Vertrag',
    plu: 'die Verträge',
    arb: 'عقد / اتفاقية رسمية',
    level: 'B1',
    category: 'القانون والأعمال',
    example: 'Vor der Unterschrift müssen Sie den Arbeitsvertrag genau prüfen.',
    exampleAr: 'قبل التوقيع يجب عليك فحص عقد العمل بدقة وعناية.'
  },
  {
    id: 'b1-2',
    art: 'die',
    ger: 'Umwelt',
    plu: 'kein Plural',
    arb: 'البيئة والطبيعة',
    level: 'B1',
    category: 'المجتمع والعلوم',
    example: 'Nachhaltige Energie schützt unsere Umwelt für zukünftige Generationen.',
    exampleAr: 'الطاقة المستدامة تحمي بيئتنا للأجيال القادمة.'
  },
  {
    id: 'b1-3',
    art: 'das',
    ger: 'Verständnis',
    plu: 'kein Plural',
    arb: 'فهم / استيعاب / تفهّم',
    level: 'B1',
    category: 'التواصل الفكري',
    example: 'Vielen Dank für Ihr Verständnis und Ihre Geduld.',
    exampleAr: 'شكراً جزيلاً لتفهمكم وصبركم.'
  },
  {
    id: 'b1-4',
    art: 'die',
    ger: 'Herausforderung',
    plu: 'die Herausforderungen',
    arb: 'تحدٍ / مهمة صعبة',
    level: 'B1',
    category: 'بيئة العمل والتطوير',
    example: 'Das Erlernen der deutschen Grammatik ist eine lohnende Herausforderung.',
    exampleAr: 'تعلم قواعد اللغة الألمانية هو تحدٍ مجزٍ ومثمر.'
  },
  {
    id: 'b1-5',
    art: 'der',
    ger: 'Vorschlag',
    plu: 'die Vorschläge',
    arb: 'اقتراح / مبادرة',
    level: 'B1',
    category: 'الاجتماعات والنقاش',
    example: 'Ich habe einen konstruktiven Vorschlag zur Effizienzsteigerung.',
    exampleAr: 'لديّ اقتراح بنّاء لرفع كفاءة العمل.'
  },
  {
    id: 'b1-6',
    art: 'das',
    ger: 'Vorstellungsgespräch',
    plu: 'die Vorstellungsgespräche',
    arb: 'مقابلة عمل شخصية',
    level: 'B1',
    category: 'التوظيف والمهنة',
    example: 'Er hat sich intensiv auf das morgige Vorstellungsgespräch vorbereitet.',
    exampleAr: 'لقد استعد بشكل مكثف لمقابلة العمل المقررة غداً.'
  },
  {
    id: 'b1-7',
    art: 'die',
    ger: 'Bewerbung',
    plu: 'die Bewerbungen',
    arb: 'طلب توظيف / تقديم',
    level: 'B1',
    category: 'التوظيف والمهنة',
    example: 'Ich habe meine Bewerbung per E-Mail abgeschickt.',
    exampleAr: 'أرسلت طلب التوظيف الخاص بي عبر البريد الإلكتروني.'
  },
  {
    id: 'b1-8',
    art: 'der',
    ger: 'Lebenslauf',
    plu: 'die Lebensläufe',
    arb: 'سيرة ذاتية (CV)',
    level: 'B1',
    category: 'التوظيف والأعمال',
    example: 'Der tabellarische Lebenslauf muss lückenlos und aktuell sein.',
    exampleAr: 'يجب أن تكون السيرة الذاتية المجدولة خالية من الفجوات الزمنية ومحدثة.'
  },
  {
    id: 'b1-9',
    art: 'das',
    ger: 'Gehalt',
    plu: 'die Gehälter',
    arb: 'راتب شهري',
    level: 'B1',
    category: 'المال والأعمال',
    example: 'Das Gehalt wird am Monatsende überwiesen.',
    exampleAr: 'يتم تحويل الراتب في نهاية كل شهر.'
  },

  // ================= B2 =================
  {
    id: 'b2-1',
    art: 'der',
    ger: 'Rechtsstreit',
    plu: 'die Rechtsstreite',
    arb: 'نزاع قانوني / قضية أمام المحكمة',
    level: 'B2',
    category: 'الترجمة القانونية',
    example: 'Die Streitparteien haben den Rechtsstreit außergerichtlich beigelegt.',
    exampleAr: 'سوى طرفا النزاع الخلاف القضائي ودياً خارج أروقة المحكمة.'
  },
  {
    id: 'b2-2',
    art: 'die',
    ger: 'Urkunde',
    plu: 'die Urkunden',
    arb: 'وثيقة رسمية / صك موثق',
    level: 'B2',
    category: 'الترجمة والتوثيق',
    example: 'Die notarielle Urkunde belegt den rechtmäßigen Erwerb des Grundstücks.',
    exampleAr: 'تثبت الوثيقة الصادرة عن كاتب العدل الشراء القانوني لقطعة الأرض.'
  },
  {
    id: 'b2-3',
    art: 'das',
    ger: 'Gutachten',
    plu: 'die Gutachten',
    arb: 'تقرير استشاري / رأي خبير معتمد',
    level: 'B2',
    category: 'الترجمة التخصصية والخبرة',
    example: 'Das medizinische Gutachten wurde dem Richter als Beweismittel vorgelegt.',
    exampleAr: 'قُدم التقرير الطبي القضائي إلى القاضي كدليل إثبات.'
  },
  {
    id: 'b2-4',
    art: 'die',
    ger: 'Beglaubigung',
    plu: 'die Beglaubigungen',
    arb: 'تصديق رسمي / مطابقة للأصل',
    level: 'B2',
    category: 'المعاملات القنصلية والترجمة',
    example: 'Für die Immatrikulation an der Universität ist eine amtliche Beglaubigung erforderlich.',
    exampleAr: 'يشترط للتسجيل في الجامعة تقديم تصديق رسمي للشهادات.'
  },
  {
    id: 'b2-5',
    art: 'der',
    ger: 'Dolmetscher',
    plu: 'die Dolmetscher',
    arb: 'مترجم شفوي / فوري معتمد',
    level: 'B2',
    category: 'مهنة الترجمة',
    example: 'Der vereidigte Dolmetscher übersetzte die Zeugenaussage simultan.',
    exampleAr: 'قام المترجم الفوري المحلف بترجمة شهادة الشاهد فورياً ودون تأخير.'
  },
  {
    id: 'b2-6',
    art: 'die',
    ger: 'Schweigepflicht',
    plu: 'kein Plural',
    arb: 'واجب كتمان السر المهني / السرية',
    level: 'B2',
    category: 'أخلاقيات المهن والطب والقانون',
    example: 'Ärzte und Rechtsanwälte unterliegen einer strengen Schweigepflicht.',
    exampleAr: 'يخضع الأطباء والمحامون لالتزام صارم بكتمان السر المهني.'
  },
  {
    id: 'b2-7',
    art: 'das',
    ger: 'Abkommen',
    plu: 'die Abkommen',
    arb: 'معاهدة دولية / اتفاق رسمي ملزم',
    level: 'B2',
    category: 'العلوم السياسية والدبلوماسية',
    example: 'Das multilaterale Handelsabkommen tritt im nächsten Quartal in Kraft.',
    exampleAr: 'تدخل الاتفاقية التجارية متعددة الأطراف حيز التنفيذ في الربع القادم.'
  },
  {
    id: 'b2-8',
    art: 'der',
    ger: 'Verhandlungsspielraum',
    plu: 'kein Plural',
    arb: 'هامش المناورة والتفاوض',
    level: 'B2',
    category: 'إدارة الأعمال والمفاوضات',
    example: 'In der Gehaltsfrage besteht noch ein gewisser Verhandlungsspielraum.',
    exampleAr: 'في مسألة الراتب لا يزال هناك هامش معين للتفاوض والمساومة.'
  },

  // ================= C1 (Fachsprache & Wissenschaft) =================
  {
    id: 'c1-1',
    art: 'der',
    ger: 'Diskurs',
    plu: 'die Diskurse',
    arb: 'الخطاب الفكري / السجال العلمي والأكاديمي',
    level: 'C1',
    category: 'العلوم الإنسانية واللغة الأكاديمية',
    example: 'Der wissenschaftliche Diskurs erfordert eine präzise Begriffsbestimmung.',
    exampleAr: 'يتطلب السجال العلمي الأكاديمي تحديداً دقيقاً للمصطلحات والمفاهيم.'
  },
  {
    id: 'c1-2',
    art: 'die',
    ger: 'Schlussfolgerung',
    plu: 'die Schlussfolgerungen',
    arb: 'الاستنتاج المنطقي / الخاتمة التحليلية المبرهنة',
    level: 'C1',
    category: 'البحث العلمي والمنهجية',
    example: 'Aus den vorliegenden empirischen Daten lässt sich eine eindeutige Schlussfolgerung ziehen.',
    exampleAr: 'من واقع البيانات التجريبية المتاحة يمكن استخلاص استنتاج قاطع لا يقبل الشك.'
  },
  {
    id: 'c1-3',
    art: 'das',
    ger: 'Plädoyer',
    plu: 'die Plädoyers',
    arb: 'المرافعة الختامية / الدفاع المستميت عن قضية',
    level: 'C1',
    category: 'القانون والخطابة',
    example: 'Der Verteidiger hielt ein leidenschaftliches Plädoyer für den Angeklagten.',
    exampleAr: 'ألقى محامي الدفاع مرافعة حماسية ومؤثرة لصالح المتهم.'
  },
  {
    id: 'c1-4',
    art: 'die',
    ger: 'Errungenschaft',
    plu: 'die Errungenschaften',
    arb: 'المكتسب الحضاري / الإنجاز التاريخي الرائد',
    level: 'C1',
    category: 'التاريخ والمجتمع المعاصر',
    example: 'Die Meinungsfreiheit gilt als eine fundamentale Errungenschaft der modernen Demokratie.',
    exampleAr: 'تُعد حرية التعبير مكتسباً جوهرياً وتاريخياً من مكتسبات الديمقراطية الحديثة.'
  },
  {
    id: 'c1-5',
    art: 'das',
    ger: 'Feingefühl',
    plu: 'kein Plural',
    arb: 'الحس الدبلوماسي المرهف / اللباقة البالغة',
    level: 'C1',
    category: 'العلاقات الدبلوماسية والتفاوض',
    example: 'In heiklen diplomatischen Verhandlungen bedarf es eines besonderen Feingefühls.',
    exampleAr: 'في المفاوضات الدبلوماسية الحساسة يتطلب الأمر حساً رفيعاً ولباقة بالغة الدقة.'
  },
  {
    id: 'c1-6',
    art: 'die',
    ger: 'Vereinbarkeit',
    plu: 'kein Plural',
    arb: 'التوافق / إمكانية التوفيق والجمع بين أمرين',
    level: 'C1',
    category: 'المجتمع والاقتصاد الحديث',
    example: 'Die Vereinbarkeit von Familie und anspruchsvollem Beruf ist eine Kernforderung.',
    exampleAr: 'يُعد التوفيق بين متطلبات الأسرة والمهنة المرموقة مطلباً محورياً في عصرنا.'
  },
  {
    id: 'c1-7',
    art: 'das',
    ger: 'Szenario',
    plu: 'die Szenarien',
    arb: 'السيناريو المستقبلي / التصور الاحتمالي الاستراتيجي',
    level: 'C1',
    category: 'التخطيط الاستراتيجي والمستقبليات',
    example: 'Experten entwerfen verschiedene Szenarien für die wirtschaftliche Entwicklung.',
    exampleAr: 'يضع الخبراء سيناريوهات متعددة وتصورات محتملة لمسار التطور الاقتصادي.'
  },
  {
    id: 'c1-8',
    art: 'die',
    ger: 'Hypothese',
    plu: 'die Hypothesen',
    arb: 'الفرضية العلمية القابلة للبرهان والدحض',
    level: 'C1',
    category: 'فلسفة العلوم والبحث الأكاديمي',
    example: 'Die aufgestellte Hypothese konnte im Experiment zweifelsfrei verifiziert werden.',
    exampleAr: 'أمكن التحقق من صحة الفرضية المطروحة في التجربة المعملية بما لا يدع مجالاً للشك.'
  }
];

export const GRAMMAR_RULES: GrammarRule[] = [
  {
    id: 'g-art-rules',
    level: 'A1',
    title: 'قواعد أسرار أدوات التعريف (Der - Die - Das)',
    subtitle: 'نهايات ذهبية تضمن لك معرفة الأداة بنسبة تتجاوز 95%',
    summary: 'تحديد جنس الاسم في الألمانية ليس عشوائياً كلياً، بل تحكمه نهايات دقيقة للكلمات.',
    details: [
      {
        heading: '1. المذكر (Der - Maskulin)',
        description: 'كل اسم ينتهي بإحدى هذه المقاطع فهو مذكر حتماً: -ling, -or, -ist, -ismus, -ant، بالإضافة لأسماء الأيام والشهور وفصول السنة.',
        examples: [
          { ger: 'Der Frühling', arb: 'الربيع (فصل سنة + ينتهي بـ -ling)', highlight: '-ling' },
          { ger: 'Der Motor', arb: 'المحرك (ينتهي بـ -or)', highlight: '-or' },
          { ger: 'Der Optimismus', arb: 'التفاؤل (ينتهي بـ -ismus)', highlight: '-ismus' },
          { ger: 'Der Montag', arb: 'يوم الإثنين (أيام الأسبوع مذكر دائماً)' }
        ]
      },
      {
        heading: '2. المؤنث (Die - Feminin)',
        description: 'كل اسم ينتهي بإحدى هذه المقاطع فهو مؤنث: -ung, -heit, -keit, -schaft, -tion, -tät, -ie, وغالباً المنتهي بـ -e.',
        examples: [
          { ger: 'Die Zeitung', arb: 'الجريدة (تنتهي بـ -ung - مؤنثة دائماً)', highlight: '-ung' },
          { ger: 'Die Freiheit', arb: 'الحرية (تنتهي بـ -heit)', highlight: '-heit' },
          { ger: 'Die Möglichkeit', arb: 'الإمكانية (تنتهي بـ -keit)', highlight: '-keit' },
          { ger: 'Die Nation', arb: 'الأمة / الشعب (تنتهي بـ -tion)', highlight: '-tion' }
        ]
      },
      {
        heading: '3. المحايد (Das - Neutrum)',
        description: 'كل اسم ينتهي بإحدى هذه المقاطع فهو محايد: -chen, -lein (صيغ التصغير)، -ment, -um, -tum، بالإضافة لأسماء الأفعال المحولة لأسماء.',
        examples: [
          { ger: 'Das Mädchen', arb: 'الفتاة (تصغير ينتهي بـ -chen - محايد)', highlight: '-chen' },
          { ger: 'Das Dokument', arb: 'المستند (ينتهي بـ -ment)', highlight: '-ment' },
          { ger: 'Das Museum', arb: 'المتحف (ينتهي بـ -um)', highlight: '-um' },
          { ger: 'Das Essen', arb: 'الطعام / الأكل (فعل مصدر تحول لاسم)' }
        ]
      }
    ],
    tips: [
      'احفظ الكلمة دائماً بأداتها وجمعها معاً: مثال (der Tisch, die Tische).',
      'جميع صيغ الجمع في اللغة الألمانية تأخذ أداة المعرفة die بدون أي استثناء في حالة الرفع.'
    ]
  },
  {
    id: 'g-cases-nominativ-akkusativ',
    level: 'A1',
    title: 'حالة النصب في الألمانية (Der Akkusativ)',
    subtitle: 'متى تتغير الأداة ومن الذي يتأثر وحده؟',
    summary: 'في حالة النصب (المفعول به المباشر)، يتغير المذكر فقط من Der إلى Den، بينما تبقى Die و Das دون أي تغيير.',
    details: [
      {
        heading: 'جدول تحويل الأدوات في الأكوزاتيف',
        description: 'تذكر قاعدة "المذكر فقط هو الذي يضحي بحرفه": Der يصبح Den و ein يصبح einen و kein يصبح keinen.',
        examples: [
          { ger: 'Ich habe einen Hund (der Hund -> einen Hund)', arb: 'لديّ كلب (مذكر وقع مفعولاً به فأصبح einen)' },
          { ger: 'Er kauft den Apfel (der Apfel -> den Apfel)', arb: 'هو يشتري التفاحة' },
          { ger: 'Sie trinkt das Wasser (das bleibt das)', arb: 'هي تشرب الماء (المحايد لا يتغير)' },
          { ger: 'Wir sehen die Sonne (die bleibt die)', arb: 'نحن نرى الشمس (المؤنث لا يتغير)' }
        ]
      }
    ]
  },
  {
    id: 'g-a2-perfekt',
    level: 'A2',
    title: 'الماضي المركب (Das Perfekt)',
    subtitle: 'متى نستخدم haben ومتى نستخدم sein؟',
    summary: 'صيغة الماضي الأكثر استخداماً في الحديث اليومي تتكون من فعل مساعد (haben أو sein) في المركز الثاني + اسم المفعول (Partizip II) في نهاية الجملة.',
    details: [
      {
        heading: 'أفعال تستخدم sein',
        description: 'نستخدم sein فقط مع أفعال تدل على الانتقال المكاني (gehen, fahren, fliegen, kommen) أو تغير الحالة (aufstehen, einschlafen, sterben) بالإضافة لـ sein و bleiben.',
        examples: [
          { ger: 'Ich bin nach Berlin gefahren.', arb: 'سافرت إلى برلين (حركة وانتقال مكاني = sein)' },
          { ger: 'Er ist heute früh aufgestanden.', arb: 'استيقظ اليوم مبكراً (تغير حالة = sein)' }
        ]
      },
      {
        heading: 'أفعال تستخدم haben',
        description: 'باقي الأفعال (أكثر من 85% من أفعال اللغة، وخاصة الأفعال المتعدية التي تأخذ مفعولاً به).',
        examples: [
          { ger: 'Wir haben Deutsch gelernt.', arb: 'تعلمنا اللغة الألمانية.' },
          { ger: 'Sie hat einen Kaffee getrunken.', arb: 'شربت فنجان قهوة.' }
        ]
      }
    ]
  },
  {
    id: 'g-b1-passiv',
    level: 'B1',
    title: 'المبني للمجهول في الألمانية (Das Passiv)',
    subtitle: 'تصريف werden + Partizip II',
    summary: 'يُستخدم الباسيف للتركيز على الحدث والنتيجة بدلاً من الفاعل، وهو أساسي في لغة التقارير، الأخبار، وتوصيف العمل.',
    details: [
      {
        heading: 'صياغة المبني للمجهول في الحاضر (Präsens Passiv)',
        description: 'القاعدة: تصريف werden المناسب + المفعول به أصبح فاعلاً + اسم المفعول في آخر الجملة.',
        examples: [
          { ger: 'Der Vertrag wird heute unterschrieben.', arb: 'يتم توقيع العقد اليوم.' },
          { ger: 'Die E-Mails werden vom Sekretär beantwortet.', arb: 'يتم الرد على الرسائل الإلكترونية من قِبل السكرتير.' }
        ]
      }
    ]
  },
  {
    id: 'g-b2-legal-translation',
    level: 'B2',
    title: 'أصول الترجمة التخصصية والتراكيب الوظيفية',
    subtitle: 'Funktionsverbgefüge والمصطلحات القانونية المعتمدة',
    summary: 'في المستوى المتقدم، يتم استبدال الأفعال البسيطة بتراكيب اسمية-فعلية دقيقة تعكس الاحترافية في الترجمة التحريرية والفورية.',
    details: [
      {
        heading: 'التراكيب الاسمية-الفعلية الشائعة',
        description: 'الجمع بين اسم مجرور مع فعل خاص يغير المعنى إلى دلالة أكاديمية أو رسمية.',
        examples: [
          { ger: 'Eine Entscheidung treffen (= entscheiden)', arb: 'اتخاذ قرار رسمي / حاسم' },
          { ger: 'In Betracht ziehen (= berücksichtigen)', arb: 'أخذ الأمر بعين الاعتبار والتقدير' },
          { ger: 'Zur Verfügung stellen (= bereitstellen)', arb: 'وضع الشيء تحت التصرف والإتاحة' }
        ]
      }
    ]
  },
  {
    id: 'g-c1-nominalstil',
    level: 'C1',
    title: 'الأسلوب الاسمي الأكاديمي (Nominalstil)',
    subtitle: 'سر الكتابة والبحث العلمي المقنع في الجامعات الألمانية',
    summary: 'يتميز الأسلوب الأكاديمي المتقدم (C1) بتكثيف المعاني عبر تحويل الأفعال والجمل الجانبية إلى أسماء مجرورة مع أحرف جر متخصصة (wegen, infolge, zur).',
    details: [
      {
        heading: 'التحويل من الأسلوب الفعلي (Verbalstil) إلى الاسمي (Nominalstil)',
        description: 'بدلاً من استخدام الجمل الجانبية بروابط مثل weil أو wenn، يتم استخدام حروف الجر مع المضاف إليه (Genitiv) أو المجرور (Dativ).',
        examples: [
          { ger: 'Verbalstil: Weil die Preise gestiegen sind, demonstrieren die Bürger.', arb: 'أسلوب فعلي عادي: لأن الأسعار ارتفعت يتظاهر المواطنون.' },
          { ger: 'Nominalstil (C1): Infolge des Preisanstiegs demonstrieren die Bürger.', arb: 'أسلوب اسمي رفيع (C1): إثر ارتفاع الأسعار، يتظاهر المواطنون.' },
          { ger: 'Nominalstil (C1): Zur Verwirklichung des Projekts bedarf es finanzieller Mittel.', arb: 'أسلوب اسمي (C1): لتحقيق المشروع، تدعو الحاجة إلى موارد مالية.' }
        ]
      }
    ],
    tips: [
      'استخدم أسماء تنتهي بـ -ung أو -nahme أو -führung لصياغة أسلوب اسمي أكاديمي رصين.',
      'احرص على استخدام المضاف إليه Genitiv بدقة مع حروف الجر مثل infolge, anlässlich, bezüglich.'
    ]
  },
  {
    id: 'g-c1-konjunktiv1',
    level: 'C1',
    title: 'الخطاب غير المباشر في الصحافة والأبحاث (Konjunktiv I)',
    subtitle: 'نقل أقوال السياسيين والباحثين بحياد علمي وموضوعية تامة',
    summary: 'تُستخدم صيغة Konjunktiv I لنقل ما قاله شخص آخر دون تبني الرأي أو الحكم على صحته (Indirekte Rede).',
    details: [
      {
        heading: 'تصريف Konjunktiv I واستخداماته',
        description: 'يُصاغ من جذر الفعل مع النهايات: -e, -est, -e, -en, -et, -en. والشائع جداً في الغائب هو (er/sie/es habe, sei, wolle, gehe).',
        examples: [
          { ger: 'Der Minister betonte, die Reform sei unabdingbar.', arb: 'أكد الوزير أن الإصلاح أمر حتمي لا مفر منه (صيغة sei تدل على نقل كلامه بحياد).' },
          { ger: 'Die Forscher erklärten, sie hätten neue Beweise gefunden.', arb: 'صرح الباحثون بأنهم عثروا على أدلة جديدة (استبدال Konjunktiv II عند تطابق الصيغة).' }
        ]
      }
    ]
  }
];

export const HOMEWORK_QUESTIONS: HomeworkQuestion[] = [
  // A1 Questions
  {
    id: 'hw-a1-1',
    level: 'A1',
    type: 'article',
    prompt: 'حدد أداة التعريف الصحيحة للاسم التالي:',
    instruction: 'اختر الأداة المناسبة وفقاً لقواعد تصنيف الأسماء',
    targetWord: 'Auto (سيارة)',
    correctAnswer: 'das',
    options: ['der', 'die', 'das'],
    explanation: 'السيارة Das Auto اسم محايد. تذكر أن معظم وسائط النقل العامة والحديثة مثل Das Flugzeug و Das Schiff و Das Auto محايدة.'
  },
  {
    id: 'hw-a1-2',
    level: 'A1',
    type: 'article',
    prompt: 'حدد أداة التعريف الصحيحة للاسم التالي:',
    instruction: 'اختر الأداة المناسبة وفقاً لقواعد تصنيف الأسماء',
    targetWord: 'Tisch (طاولة)',
    correctAnswer: 'der',
    options: ['der', 'die', 'das'],
    explanation: 'الطاولة Der Tisch مذكر في الألمانية رغم أنها مؤنثة في العربية. لا تعتمد على تأنيث أو تذكير الكلمة في العربية!'
  },
  {
    id: 'hw-a1-3',
    level: 'A1',
    type: 'article',
    prompt: 'حدد أداة التعريف الصحيحة للاسم التالي:',
    instruction: 'اختر الأداة المناسبة وفقاً لقواعد تصنيف الأسماء',
    targetWord: 'Sonne (شمس)',
    correctAnswer: 'die',
    options: ['der', 'die', 'das'],
    explanation: 'الشمس Die Sonne مؤنثة في الألمانية وتنتهي بالحرف -e، وهو أحد المؤشرات القوية على تأنيث الاسم.'
  },
  {
    id: 'hw-a1-4',
    level: 'A1',
    type: 'translation',
    prompt: 'ما هي الترجمة الصحيحة للجملة: "أنا أشرب قهوة"؟',
    instruction: 'اختر الجملة الألمانية الصحيحة نحوياً',
    correctAnswer: 'Ich trinke einen Kaffee.',
    options: [
      'Ich trinke einen Kaffee.',
      'Ich trinkt ein Kaffee.',
      'Ich trinke das Kaffee.',
      'Ich Kaffee trinke.'
    ],
    explanation: 'الفعل trinken يأخذ مفعولاً به Akkusativ، والقهوة مذكر (der Kaffee) فتتحول أداة النكرة من ein إلى einen.'
  },
  {
    id: 'hw-a1-5',
    level: 'A1',
    type: 'sentence',
    prompt: 'رتب الكلمات التالية لتكوين جملة ألمانية صحيحة:',
    instruction: 'اضغط على الكلمات بالترتيب الصحيح (الفاعل ثم الفعل في المركز الثاني ثم الظرف واللغة)',
    correctAnswer: 'Ich lerne heute Deutsch',
    options: ['Ich', 'lerne', 'heute', 'Deutsch'],
    sentenceWords: ['heute', 'Ich', 'Deutsch', 'lerne'],
    explanation: 'في الجملة الخبرية الألمانية البسيطة، يأتي الفعل دائماً في المركز الثاني (Position 2): Ich (1) lerne (2) heute (3) Deutsch (4).'
  },
  {
    id: 'hw-a1-6',
    level: 'A1',
    type: 'listening',
    prompt: 'استمع إلى النطق واختر الكلمة المطابقة:',
    instruction: 'اضغط زر الاستماع لسماع الكلمة ثم حددها',
    targetWord: 'Schule',
    correctAnswer: 'Die Schule',
    options: ['Die Schule', 'Die Sonne', 'Der Schüler', 'Das Schiff'],
    explanation: 'الكلمة المنطوقة هي Die Schule ومعناها المدرسة.'
  },
  {
    id: 'hw-a1-7',
    level: 'A1',
    type: 'article',
    prompt: 'حدد أداة كلمة "Stuhl" (كرسي):',
    instruction: 'الأثاث المنزلي الأساسي',
    targetWord: 'Stuhl (كرسي)',
    correctAnswer: 'der',
    options: ['der', 'die', 'das'],
    explanation: 'الكرسي Der Stuhl مذكر وجمعه die Stühle.'
  },

  // A2 Questions
  {
    id: 'hw-a2-1',
    level: 'A2',
    type: 'article',
    prompt: 'حدد أداة الكلمة المنتهية بـ -ung:',
    instruction: 'تطبيق قاعدة النهايات القياسية',
    targetWord: 'Rechnung (فاتورة)',
    correctAnswer: 'die',
    options: ['der', 'die', 'das'],
    explanation: 'قاعدة ثابتة بنسبة 100%: أي كلمة ألمانية تنتهي بالمقطع -ung هي مؤنثة دائماً Die بدون أي استثناء.'
  },
  {
    id: 'hw-a2-2',
    level: 'A2',
    type: 'translation',
    prompt: 'اختر الفعل المساعد المناسب للماضي: "Gestern ___ ich nach Hamburg gefahren."',
    instruction: 'قاعدة استخدام sein مع أفعال الانتقال المكاني',
    correctAnswer: 'bin',
    options: ['bin', 'habe', 'war', 'hat'],
    explanation: 'فعل fahren يعبر عن انتقال مكاني وحركة من نقطة لأخرى، لذلك يأخذ الفعل المساعد sein تصريفه مع Ich هو: bin.'
  },
  {
    id: 'hw-a2-3',
    level: 'A2',
    type: 'sentence',
    prompt: 'رتب جملة الماضي المركب التالية:',
    instruction: 'رتب الكلمات بحيث يكون الفعل المساعد في المركز الثاني واسم المفعول في نهاية الجملة',
    correctAnswer: 'Wir haben Deutsch gelernt',
    options: ['Wir', 'haben', 'Deutsch', 'gelernt'],
    sentenceWords: ['gelernt', 'haben', 'Wir', 'Deutsch'],
    explanation: 'في الماضي المركب Perfekt: الفعل المساعد (haben) في المركز 2، واسم المفعول (Partizip II) مثل gelernt يُرمى دائماً في آخر الجملة!'
  },
  {
    id: 'hw-a2-4',
    level: 'A2',
    type: 'article',
    prompt: 'ما هي أداة كلمة "Ergebnis" (نتيجة الامتحان)؟',
    instruction: 'الكلمات المنتهية بـ -nis',
    targetWord: 'Ergebnis (نتيجة)',
    correctAnswer: 'das',
    options: ['der', 'die', 'das'],
    explanation: 'Das Ergebnis اسم محايد، ومعظم الكلمات المنتهية بـ -nis تأخذ das.'
  },

  // B1 Questions
  {
    id: 'hw-b1-1',
    level: 'B1',
    type: 'article',
    prompt: 'ما هي أداة كلمة "Vertrag" (عقد عمل)؟',
    instruction: 'المصطلحات المهنية والتعاقدية',
    targetWord: 'Vertrag (عقد)',
    correctAnswer: 'der',
    options: ['der', 'die', 'das'],
    explanation: 'العقد Der Vertrag اسم مذكر وجمعه die Verträge.'
  },
  {
    id: 'hw-b1-2',
    level: 'B1',
    type: 'translation',
    prompt: 'صيغة المبني للمجهول الصحيحة: "يتم فحص العقد الآن"',
    instruction: 'صياغة Präsens Passiv بواسطة werden + Partizip II',
    correctAnswer: 'Der Vertrag wird jetzt geprüft.',
    options: [
      'Der Vertrag wird jetzt geprüft.',
      'Der Vertrag hat jetzt geprüft.',
      'Der Vertrag ist jetzt prüfen.',
      'Der Vertrag wurde geprüft wird.'
    ],
    explanation: 'المبني للمجهول في الحاضر يُصاغ باستخدام: wird + اسم المفعول في النهاية: Der Vertrag wird jetzt geprüft.'
  },
  {
    id: 'hw-b1-3',
    level: 'B1',
    type: 'sentence',
    prompt: 'رتب الجملة الجانبية مع الرابط "weil":',
    instruction: 'تذكر أن الفعل المصرف يذهب دائماً إلى آخر الجملة بعد weil',
    correctAnswer: 'weil er fleißig Deutsch lernt',
    options: ['weil', 'er', 'fleißig', 'Deutsch', 'lernt'],
    sentenceWords: ['lernt', 'weil', 'Deutsch', 'er', 'fleißig'],
    explanation: 'في الجمل الجانبية (Nebensatz) بعد أدوات الربط مثل weil و dass و obwohl، يُرمى الفعل المصرف (lernt) في المركز الأخير تماماً.'
  },

  // B2 Questions
  {
    id: 'hw-b2-1',
    level: 'B2',
    type: 'translation',
    prompt: 'ما المقابل الاحترافي للتعبير: "اتخاذ قرار قانوني حاسم"؟',
    instruction: 'تراكيب الأفعال الوظيفية Funktionsverbgefüge',
    correctAnswer: 'Eine Entscheidung treffen',
    options: [
      'Eine Entscheidung treffen',
      'Einen Entschluss machen',
      'Entscheidung nehmen',
      'Eine Entscheidung bringen'
    ],
    explanation: 'في لغة الأعمال والقانون الألمانية، يقترن الاسم Entscheidung بالفعل treffen ليصبح التركيب: eine Entscheidung treffen.'
  },
  {
    id: 'hw-b2-2',
    level: 'B2',
    type: 'article',
    prompt: 'حدد الأداة القانونية الصحيحة لكلمة: "Gutachten" (تقرير الخبير الفني):',
    instruction: 'الأسماء المنتهية بـ -chen أو صيغ المصادر',
    targetWord: 'Gutachten (تقرير خبير)',
    correctAnswer: 'das',
    options: ['der', 'die', 'das'],
    explanation: 'Das Gutachten اسم محايد ينتهي بـ -en ومفرد ومجموع على نفس الهيئة (das Gutachten, die Gutachten).'
  },
  {
    id: 'hw-b2-3',
    level: 'B2',
    type: 'translation',
    prompt: 'ما معنى المصطلح القانوني الأكاديمي: "Die Schweigepflicht"؟',
    instruction: 'المصطلحات الأخلاقية والمهنية',
    correctAnswer: 'واجب كتمان السر المهني',
    options: [
      'واجب كتمان السر المهني',
      'حق الصمت أمام القاضي',
      'عقوبة التزوير الجنائي',
      'التنازل عن الدعوى القضائية'
    ],
    explanation: 'Die Schweigepflicht مصطلح ألماني شهير في الطب والقانون والمحاماة يعني التزام المهني بكتمان أسرار الموكل أو المريض.'
  },

  // C1 Questions (Wissenschaft & Fachsprache)
  {
    id: 'hw-c1-1',
    level: 'C1',
    type: 'article',
    prompt: 'ما هي أداة التعريف الصحيحة للمصطلح القضائي: "Plädoyer" (المرافعة)؟',
    instruction: 'المصطلحات ذات الأصل الفرنسي في اللغة الأكاديمية',
    targetWord: 'Plädoyer (المرافعة الختامية)',
    correctAnswer: 'das',
    options: ['der', 'die', 'das'],
    explanation: 'الكلمات المستعارة المنتهية بـ -er ذات الأصل الفرنسي مثل Das Plädoyer تكون محايدة (das).'
  },
  {
    id: 'hw-c1-2',
    level: 'C1',
    type: 'translation',
    prompt: 'حول الجملة الفعلية إلى أسلوب اسمي (Nominalstil): "Weil die Temperaturen ansteigen..."',
    instruction: 'الصياغة الأكاديمية المتقدمة C1',
    correctAnswer: 'Infolge des Temperaturanstiegs',
    options: [
      'Infolge des Temperaturanstiegs',
      'Wegen die Temperatur ansteigen',
      'Trotz des Temperaturanstiegs',
      'Nachdem die Temperatur steigt'
    ],
    explanation: 'في الأسلوب الاسمي C1، نستبدل الرابط weil بحرف الجر infolge متبوعاً بالمضاف إليه (Genitiv): Infolge des Temperaturanstiegs.'
  },
  {
    id: 'hw-c1-3',
    level: 'C1',
    type: 'translation',
    prompt: 'في الصحافة ونقل التصريحات غير المباشرة (Konjunktiv I)، أي الصيغ صحيحة لجملة: "Der Minister sagt, er ___ optimistisch"؟',
    instruction: 'صيغ الخطاب غير المباشر Indirekte Rede',
    correctAnswer: 'sei',
    options: ['sei', 'ist', 'wäre', 'gewesen'],
    explanation: 'تُستخدم صيغة Konjunktiv I للغائب المفرد (er sei) لنقل التصريحات الرسمية بحيادية تامة.'
  },
  {
    id: 'hw-c1-4',
    level: 'C1',
    type: 'sentence',
    prompt: 'رتب الكلمات لتكوين تعبير اصطلاحي C1 (Nomen-Verb-Verbindung):',
    instruction: 'اضغط على الكلمات بالترتيب الصحيح',
    correctAnswer: 'Wir müssen diese Tatsachen in Betracht ziehen',
    options: ['Wir', 'müssen', 'diese Tatsachen', 'in Betracht ziehen'],
    sentenceWords: ['in Betracht ziehen', 'diese Tatsachen', 'müssen', 'Wir'],
    explanation: 'التعبير in Betracht ziehen (= berücksichtigen) يعني أخذ الشيء في الاعتبار، ويأتي الفعل في نهاية الجملة بعد المفعول به.'
  }
];

export const VERB_CONJUGATIONS: VerbConjugation[] = [
  {
    verb: 'sein',
    meaning: 'يكون (فعل الكينونة الأساسي)',
    level: 'A1',
    praesens: {
      ich: 'bin',
      du: 'bist',
      er_sie_es: 'ist',
      wir: 'sind',
      ihr: 'seid',
      sie_Sie: 'sind'
    },
    perfekt: 'ist gewesen',
    beispiel: 'Ich bin Student an der Akademie.',
    beispielAr: 'أنا طالب في الأكاديمية.'
  },
  {
    verb: 'haben',
    meaning: 'يملك / لديه',
    level: 'A1',
    praesens: {
      ich: 'habe',
      du: 'hast',
      er_sie_es: 'hat',
      wir: 'haben',
      ihr: 'habt',
      sie_Sie: 'haben'
    },
    perfekt: 'hat gehabt',
    beispiel: 'Wir haben heute Deutschunterricht.',
    beispielAr: 'لدينا اليوم درس لغة ألمانية.'
  },
  {
    verb: 'sprechen',
    meaning: 'يتحدث / يتكلم',
    level: 'A1',
    praesens: {
      ich: 'spreche',
      du: 'sprichst',
      er_sie_es: 'spricht',
      wir: 'sprechen',
      ihr: 'sprecht',
      sie_Sie: 'sprechen'
    },
    perfekt: 'hat gesprochen',
    beispiel: 'Shadi spricht fließend Deutsch und Arabisch.',
    beispielAr: 'شادي يتحدث الألمانية والعربية بطلاقة.'
  },
  {
    verb: 'fahren',
    meaning: 'يسافر / يقود مركبة',
    level: 'A2',
    praesens: {
      ich: 'fahre',
      du: 'fährst',
      er_sie_es: 'fährt',
      wir: 'fahren',
      ihr: 'fahrt',
      sie_Sie: 'fahren'
    },
    perfekt: 'ist gefahren',
    beispiel: 'Der Zug fährt direkt nach München.',
    beispielAr: 'القطار يسير مباشرة إلى ميونخ.'
  },
  {
    verb: 'werden',
    meaning: 'يصبح / يُستخدم للباسيف والمستقبل',
    level: 'B1',
    praesens: {
      ich: 'werde',
      du: 'wirst',
      er_sie_es: 'wird',
      wir: 'werden',
      ihr: 'werdet',
      sie_Sie: 'werden'
    },
    perfekt: 'ist geworden',
    beispiel: 'Er wird bald ein professioneller Übersetzer.',
    beispielAr: 'سيصبح قريباً مترجماً محترفاً.'
  }
];

export const SENTENCE_EXERCISES: SentenceExercise[] = [
  {
    id: 's-1',
    level: 'A1',
    germanFull: 'Ich lerne jeden Tag fleißig Deutsch',
    arabicTranslation: 'أنا أتعلم الألمانية بجد واجتهاد كل يوم',
    tokens: ['fleißig', 'jeden Tag', 'Ich', 'lerne', 'Deutsch'],
    grammarHint: 'الفاعل (Ich) في المركز 1، الفعل المصرف (lerne) في المركز 2، ثم ظرف الزمان والحال واللغة.',
    structureExplanation: 'Position 1: Ich | Position 2: lerne | Angabe: jeden Tag | Modal: fleißig | Objekt: Deutsch'
  },
  {
    id: 's-2',
    level: 'A1',
    germanFull: 'Heute fahre ich mit dem Zug nach Berlin',
    arabicTranslation: 'اليوم أسافر بالقطار إلى برلين',
    tokens: ['fahre', 'Heute', 'ich', 'nach Berlin', 'mit dem Zug'],
    grammarHint: 'عندما تبدأ الجملة بظرف الزمان (Heute)، يبقى الفعل في المركز 2 ويأتي الفاعل مباشرة بعده (Inversion).',
    structureExplanation: 'Position 1: Heute (Zeit) | Position 2: fahre (Verb) | Subjekt: ich | TeKaMoLo: mit dem Zug nach Berlin'
  },
  {
    id: 's-3',
    level: 'A2',
    germanFull: 'Gestern hat mein Freund eine neue Wohnung gefunden',
    arabicTranslation: 'أمس وجد صديقي شقة جديدة',
    tokens: ['gefunden', 'mein Freund', 'Gestern', 'hat', 'eine neue Wohnung'],
    grammarHint: 'في الماضي Perfekt، الفعل المساعد (hat) في المركز 2، واسم المفعول (gefunden) في نهاية الجملة تماماً.',
    structureExplanation: 'Pos 1: Gestern | Pos 2: hat | Subjekt: mein Freund | Akkusativ: eine neue Wohnung | Satzende: gefunden'
  },
  {
    id: 's-4',
    level: 'B1',
    germanFull: 'Er lernt Deutsch weil er in Deutschland arbeiten möchte',
    arabicTranslation: 'هو يتعلم الألمانية لأنه يرغب في العمل بألمانيا',
    tokens: ['weil', 'Er lernt Deutsch', 'in Deutschland', 'er', 'arbeiten möchte'],
    grammarHint: 'بعد الرابط weil (جملة جانبية Nebensatz)، تأتي الأفعال في النهاية ويكون الفعل المصرف (möchte) في المركز الأخير.',
    structureExplanation: 'Hauptsatz + Konjunktion (weil) + Subjekt (er) + Mittelfeld (in Deutschland) + Verben am Ende (arbeiten möchte)'
  },
  {
    id: 's-5',
    level: 'B2',
    germanFull: 'Der geschlossene Vertrag muss von beiden Parteien eingehalten werden',
    arabicTranslation: 'يجب الالتزام بالعقد المبرم من قِبل كلا الطرفين',
    tokens: ['von beiden Parteien', 'Der geschlossene Vertrag', 'muss', 'eingehalten werden'],
    grammarHint: 'المبني للمجهول مع فعل كيفي (Passiv mit Modalverb): Modalverb في المركز 2، و Partizip II + werden في النهاية.',
    structureExplanation: 'Subjekt: Der geschlossene Vertrag | Verb 1: muss | Agens: von beiden Parteien | Satzklammer: eingehalten werden'
  },
  {
    id: 's-6',
    level: 'C1',
    germanFull: 'Infolge des raschen technologischen Wandels müssen sich Unternehmen kontinuierlich anpassen',
    arabicTranslation: 'نتيجة للتغير التكنولوجي المتسارع، يتعين على الشركات التكيف بصورة مستمرة',
    tokens: ['Infolge des raschen technologischen Wandels', 'kontinuierlich anpassen', 'müssen sich Unternehmen'],
    grammarHint: 'أسلوب اسمي رفيع (Nominalstil): شبه الجملة المجرورة (Infolge des...) في المركز 1، الفعل المساعد (müssen) في المركز 2.',
    structureExplanation: 'Pos 1: Präpositionalphrase (Genitiv) | Pos 2: Modalverb (müssen) | Subjekt + Reflexivpronomen (sich Unternehmen) | Infinitiv am Ende (kontinuierlich anpassen)'
  }
];
