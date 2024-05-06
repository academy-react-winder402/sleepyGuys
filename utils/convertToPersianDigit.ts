export default function convertToPersianDigit(digit: number): string {
  const farsiDigits: string[] = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return digit.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}