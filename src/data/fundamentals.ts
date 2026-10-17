export interface FundamentalItem {
  id: string;
  art: 'der' | 'die' | 'das' | '';
  ger: string;
  abbr?: string;
  arb: string;
  prepExample: string;
  prepAr: string;
  note?: string;
  order: number;
}

export const DAYS_OF_WEEK: FundamentalItem[] = [
  {
    id: 'day-1',
    art: 'der',
    ger: 'Montag',
    abbr: 'Mo.',
    arb: 'الإثنين',
    prepExample: 'Am Montag beginnt die neue Arbeitswoche.',
    prepAr: 'في يوم الإثنين يبدأ أسبوع العمل الجديد.',
    note: 'أول أيام الأسبوع في ألمانيا (أسبوع العمل يبدأ الإثنين).',
    order: 1
  },
  {
    id: 'day-2',
    art: 'der',
    ger: 'Dienstag',
    abbr: 'Di.',
    arb: 'الثلاثاء',
    prepExample: 'Am Dienstag habe ich einen Arzttermin.',
    prepAr: 'في يوم الثلاثاء لدي موعد عند الطبيب.',
    order: 2
  },
  {
    id: 'day-3',
    art: 'der',
    ger: 'Mittwoch',
    abbr: 'Mi.',
    arb: 'الأربعاء',
    prepExample: 'Am Mittwoch treffen wir uns zum Deutschkurs.',
    prepAr: 'في يوم الأربعاء نلتقي لحضور دورة اللغة الألمانية.',
    note: 'اسم مركب من Mitte (منتصف) + Woche (أسبوع).',
    order: 3
  },
  {
    id: 'day-4',
    art: 'der',
    ger: 'Donnerstag',
    abbr: 'Do.',
    arb: 'الخميس',
    prepExample: 'Am Donnerstag gehe ich einkaufen.',
    prepAr: 'في يوم الخميس أذهب للتسوق.',
    order: 4
  },
  {
    id: 'day-5',
    art: 'der',
    ger: 'Freitag',
    abbr: 'Fr.',
    arb: 'الجمعة',
    prepExample: 'Am Freitagabend feiern wir das Wochenende.',
    prepAr: 'في مساء الجمعة نحتفل بقدوم عطلة نهاية الأسبوع.',
    order: 5
  },
  {
    id: 'day-6',
    art: 'der',
    ger: 'Samstag',
    abbr: 'Sa.',
    arb: 'السبت',
    prepExample: 'Am Samstag schlafe ich bis 10 Uhr.',
    prepAr: 'في يوم السبت أنام حتى العاشرة صباحاً.',
    note: 'يُسمى أيضاً في بعض مناطق شمال ألمانيا Sonnabend.',
    order: 6
  },
  {
    id: 'day-7',
    art: 'der',
    ger: 'Sonntag',
    abbr: 'So.',
    arb: 'الأحد',
    prepExample: 'Am Sonntag sind die meisten Geschäfte geschlossen.',
    prepAr: 'في يوم الأحد تكون معظم المتاجر والمحلات مغلقة.',
    note: 'يوم العطلة الرسمية التامة في ألمانيا.',
    order: 7
  }
];

export const TIME_TERMS = [
  { ger: 'vorgestern', arb: 'أول أمس (قبل يومين)', example: 'Vorgestern war das Wetter herrlich.' },
  { ger: 'gestern', arb: 'أمس (البارحة)', example: 'Gestern habe ich Deutsch gelernt.' },
  { ger: 'heute', arb: 'اليوم (الآن)', example: 'Heute ist ein schöner Tag.' },
  { ger: 'morgen', arb: 'غداً', example: 'Morgen habe ich eine Prüfung.' },
  { ger: 'übermorgen', arb: 'بعد غد', example: 'Übermorgen fahre ich nach Hamburg.' },
  { ger: 'das Wochenende', arb: 'عطلة نهاية الأسبوع', example: 'Schönes Wochenende! (عطلة نهاية أسبوع سعيدة!)' },
  { ger: 'der Tag / die Tage', arb: 'اليوم / الأيام', example: 'Guten Tag! (نهارك سعيد / طاب يومك)' },
  { ger: 'die Woche / die Wochen', arb: 'الأسبوع / الأسابيع', example: 'Diese Woche habe ich viel zu tun.' }
];

export const MONTHS_OF_YEAR: FundamentalItem[] = [
  {
    id: 'mon-1',
    art: 'der',
    ger: 'Januar',
    abbr: 'Jan.',
    arb: 'يناير (كانون الثاني)',
    prepExample: 'Im Januar schneit es oft in Deutschland.',
    prepAr: 'في شهر يناير تتساقط الثلوج كثيراً في ألمانيا.',
    note: 'الشهر 1 - فصل الشتاء',
    order: 1
  },
  {
    id: 'mon-2',
    art: 'der',
    ger: 'Februar',
    abbr: 'Feb.',
    arb: 'فبراير (شباط)',
    prepExample: 'Im Februar gibt es den Karneval in Köln.',
    prepAr: 'في شهر فبراير يقام الكرنفال الشهير في كولونيا.',
    note: 'الشهر 2 - أقصر شهور السنة',
    order: 2
  },
  {
    id: 'mon-3',
    art: 'der',
    ger: 'März',
    abbr: 'Mär.',
    arb: 'مارس (آذار)',
    prepExample: 'Im März beginnt der kalendarische Frühling.',
    prepAr: 'في شهر مارس يبدأ فصل الربيع فلكياً.',
    note: 'الشهر 3 - بداية الربيع',
    order: 3
  },
  {
    id: 'mon-4',
    art: 'der',
    ger: 'April',
    abbr: 'Apr.',
    arb: 'أبريل (نيسان)',
    prepExample: 'Der April macht, was er will (طقس متقلب).',
    prepAr: 'في شهر أبريل يتغير الطقس باستمرار كالمثل الألماني الشهير.',
    note: 'الشهر 4',
    order: 4
  },
  {
    id: 'mon-5',
    art: 'der',
    ger: 'Mai',
    abbr: 'Mai',
    arb: 'مايو (أيار)',
    prepExample: 'Im Mai blühen die Blumen überall.',
    prepAr: 'في شهر مايو تتفتح الزهور في كل مكان.',
    note: 'الشهر 5 - شهر الربيع الزاهر',
    order: 5
  },
  {
    id: 'mon-6',
    art: 'der',
    ger: 'Juni',
    abbr: 'Jun.',
    arb: 'يونيو (حزيران)',
    prepExample: 'Im Juni fängt der Sommer an.',
    prepAr: 'في شهر يونيو يبدأ فصل الصيف والأيام الطويلة.',
    note: 'الشهر 6',
    order: 6
  },
  {
    id: 'mon-7',
    art: 'der',
    ger: 'Juli',
    abbr: 'Jul.',
    arb: 'يوليو (تموز)',
    prepExample: 'Im Juli haben die Schüler Sommerferien.',
    prepAr: 'في شهر يوليو تبدأ العطلة الصيفية للمدارس.',
    note: 'الشهر 7 - ذروة حرارة الصيف',
    order: 7
  },
  {
    id: 'mon-8',
    art: 'der',
    ger: 'August',
    abbr: 'Aug.',
    arb: 'أغسطس (آب)',
    prepExample: 'Im August fahren viele Familien in den Urlaub.',
    prepAr: 'في شهر أغسطس تسافر عائلات كثيرة لقضاء الإجازة.',
    note: 'الشهر 8',
    order: 8
  },
  {
    id: 'mon-9',
    art: 'der',
    ger: 'September',
    abbr: 'Sep.',
    arb: 'سبتمبر (أيلول)',
    prepExample: 'Im September beginnt das weltberühmte Oktoberfest.',
    prepAr: 'في شهر سبتمبر يبدأ مهرجان أكتوبر الشهير في ميونخ.',
    note: 'الشهر 9 - بداية الخريف',
    order: 9
  },
  {
    id: 'mon-10',
    art: 'der',
    ger: 'Oktober',
    abbr: 'Okt.',
    arb: 'أكتوبر (تشرين الأول)',
    prepExample: 'Am 3. Oktober feiern wir den Tag der Deutschen Einheit.',
    prepAr: 'في الثالث من أكتوبر نحتفل بيوم الوحدة الألمانية.',
    note: 'الشهر 10',
    order: 10
  },
  {
    id: 'mon-11',
    art: 'der',
    ger: 'November',
    abbr: 'Nov.',
    arb: 'نوفمبر (تشرين الثاني)',
    prepExample: 'Im November fallen die Blätter von den Bäumen.',
    prepAr: 'في شهر نوفمبر تتساقط أوراق الأشجار ويزداد البرد.',
    note: 'الشهر 11',
    order: 11
  },
  {
    id: 'mon-12',
    art: 'der',
    ger: 'Dezember',
    abbr: 'Dez.',
    arb: 'ديسمبر (كانون الأول)',
    prepExample: 'Im Dezember gibt es die gemütlichen Weihnachtsmärkte.',
    prepAr: 'في شهر ديسمبر تقام أسواق أعياد الميلاد المبهجة.',
    note: 'الشهر 12 - نهاية العام والشتاء',
    order: 12
  }
];

export const SEASONS = [
  {
    id: 'sea-1',
    art: 'der',
    ger: 'Frühling',
    arb: 'الربيع',
    months: 'مارس، أبريل، مايو',
    example: 'Im Frühling erwacht die Natur zu neuem Leben.',
    exampleAr: 'في فصل الربيع تستيقظ الطبيعة لحياة جديدة.'
  },
  {
    id: 'sea-2',
    art: 'der',
    ger: 'Sommer',
    arb: 'الصيف',
    months: 'يونيو، يوليو، أغسطس',
    example: 'Im Sommer ist es bis spät abends hell.',
    exampleAr: 'في فصل الصيف يبقى النهار مضيئاً حتى وقت متأخر.'
  },
  {
    id: 'sea-3',
    art: 'der',
    ger: 'Herbst',
    arb: 'الخريف',
    months: 'سبتمبر، أكتوبر، نوفمبر',
    example: 'Im Herbst wird es kühler und die Blätter verfärben sich.',
    exampleAr: 'في فصل الخريف يصبح الجو أبرد وتتلون أوراق الشجر.'
  },
  {
    id: 'sea-4',
    art: 'der',
    ger: 'Winter',
    arb: 'الشتاء',
    months: 'ديسمبر، يناير، فبراير',
    example: 'Im Winter trinken die Leute gerne heißen Tee.',
    exampleAr: 'في فصل الشتاء يحب الناس شرب الشاي الساخن.'
  }
];
