class Utils {
  static numDigitsAfterDecimal(value: number): number {
    if (value) {
      return (value.toString().split('.')[1] || '').length;
    }
    return 0;
  }

  static convertFromInputToNumber(value: string|number|boolean|undefined): number|undefined {
    const number = parseFloat(String(value));
    if (Number.isNaN(number)) {
      return undefined;
    }
    return number;
  }

  static convertFromInputToBoolean(value: boolean|undefined): boolean {
    return Boolean(value);
  }

  static roundWithStep(value: number, step: number, min: number): number {
    let del = 1;
    if (step !== 0) {
      del = 1.0 / step;
    }
    const result = Math.round(+(value - min).toFixed(Utils.numDigitsAfterDecimal(step)) * del) / del
      + min;
    return result;
  }
}
export default Utils;
