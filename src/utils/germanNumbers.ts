/**
 * German Number Generator and Converter (0 to 100+)
 * Handles exact German orthography rules (e.g., eins -> einundzwanzig, sechzehn, siebzehn, dreißig)
 */

export interface GermanNumberInfo {
  num: number;
  ger: string;
  arb: string;
  decomposition?: string;
  audioText: string;
}

const ONES: Record<number, string> = {
  0: 'null',
  1: 'eins',
  2: 'zwei',
  3: 'drei',
  4: 'vier',
  5: 'fünf',
  6: 'sechs',
  7: 'sieben',
  8: 'acht',
  9: 'neun'
};

const TEENS: Record<number, string> = {
  10: 'zehn',
  11: 'elf',
  12: 'zwölf',
  13: 'dreizehn',
  14: 'vierzehn',
  15: 'fünfzehn',
  16: 'sechzehn', // note: drops the 's'
  17: 'siebzehn', // note: drops the 'en'
  18: 'achtzehn',
  19: 'neunzehn'
};

const TENS: Record<number, string> = {
  20: 'zwanzig',
  30: 'dreißig', // with ß
  40: 'vierzig',
  50: 'fünfzig',
  60: 'sechzig', // drops the 's'
  70: 'siebzig', // drops the 'en'
  80: 'achtzig',
  90: 'neunzig'
};

const ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

export function toArabicIndic(n: number): string {
  return n.toString().split('').map(d => ARABIC_DIGITS[parseInt(d, 10)] || d).join('');
}

export function getGermanNumber(n: number): GermanNumberInfo {
  if (n < 0 || n > 100) {
    return { num: n, ger: n.toString(), arb: n.toString(), audioText: n.toString() };
  }

  if (n === 100) {
    return {
      num: 100,
      ger: 'hundert (einhundert)',
      arb: 'مائة (١٠٠)',
      decomposition: 'einhundert',
      audioText: 'einhundert'
    };
  }

  if (n <= 9) {
    return {
      num: n,
      ger: ONES[n],
      arb: `${n} (${toArabicIndic(n)})`,
      audioText: ONES[n]
    };
  }

  if (n >= 10 && n <= 19) {
    let decomp = '';
    if (n === 16) decomp = 'sechs + zehn (مع حذف حرف s)';
    else if (n === 17) decomp = 'sieben + zehn (مع حذف مقطع en)';
    else if (n > 12) decomp = `${ONES[n % 10]} + zehn`;

    return {
      num: n,
      ger: TEENS[n],
      arb: `${n} (${toArabicIndic(n)})`,
      decomposition: decomp || undefined,
      audioText: TEENS[n]
    };
  }

  const tensVal = Math.floor(n / 10) * 10;
  const unitsVal = n % 10;

  if (unitsVal === 0) {
    let decomp = '';
    if (n === 60) decomp = 'sechs + zig (مع حذف حرف s)';
    else if (n === 70) decomp = 'sieben + zig (مع حذف مقطع en)';
    else if (n === 30) decomp = 'drei + ßig (تكتب بـ ß بدلاً من z)';

    return {
      num: n,
      ger: TENS[tensVal],
      arb: `${n} (${toArabicIndic(n)})`,
      decomposition: decomp || undefined,
      audioText: TENS[tensVal]
    };
  }

  // Compound numbers (21-99): units + und + tens
  // Special rule: eins becomes "ein" in compounds (e.g., einundzwanzig)
  const unitWord = unitsVal === 1 ? 'ein' : ONES[unitsVal];
  const tensWord = TENS[tensVal];
  const combined = `${unitWord}und${tensWord}`;

  return {
    num: n,
    ger: combined,
    arb: `${n} (${toArabicIndic(n)})`,
    decomposition: `${unitWord} (آحاد) + und (و) + ${tensWord} (عشرات)`,
    audioText: combined
  };
}

export function getAllNumbers0To100(): GermanNumberInfo[] {
  const result: GermanNumberInfo[] = [];
  for (let i = 0; i <= 100; i++) {
    result.push(getGermanNumber(i));
  }
  return result;
}
