class Utils {

  static numDigitsAfterDecimal(value: number):number {
    if(value){
    return (value.toString().split('.')[1] || '').length;
    }
    else return 0;
  }
  static convertFromInputToNumber(value:string|number|boolean|undefined):number|undefined{
    const number = parseFloat(String(value));
    if(isNaN(number)){
    return undefined;
    }
    return number;
  }
  static convertFromInputToBoolean(value:boolean|undefined):boolean{
    return Boolean(value);
  }
}
export {Utils}