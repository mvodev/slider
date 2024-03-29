interface ISettings {
  min: number;
  max: number;
  from: number;
  to: number;
  step: number;
  isVertical?: boolean;
  isRange?: boolean;
  hideThumbLabel?: boolean;
}
export default ISettings;
