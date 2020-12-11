export class Utils {
 static numDigitsAfterDecimal(value: number) {
  if(value){
   let afterDecimalStr = value.toString().split('.')[1] || '';
   return afterDecimalStr.length;
  }
  else return 0;
 }
}