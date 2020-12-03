export class Utils {
 static numDigitsAfterDecimal(value: number) {
  let afterDecimalStr = value.toString().split('.')[1] || '';
  return afterDecimalStr.length;
 }
}