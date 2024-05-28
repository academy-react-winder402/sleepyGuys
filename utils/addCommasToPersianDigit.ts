export default function addCommasToPersianNumber(
  persianNumber: string
): string {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";

  const standardNumber = persianNumber.replace(/[۰-۹]/g, (digit: string) => {
    return persianDigits.indexOf(digit).toString();
  });

  const trimmedStandardNumber = standardNumber.replace(
    /(\.\d*?[1-9])0+|\.0*$/,
    "$1"
  );

  const withCommas = trimmedStandardNumber.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  const persianWithCommas = withCommas.replace(/[0-9]/g, (digit: string) => {
    return persianDigits[parseInt(digit)];
  });

  return persianWithCommas;
}
