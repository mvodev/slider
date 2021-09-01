interface IViewSettings {
  isVertical?: boolean;
  isRange?: boolean;
  hideThumbLabel?: boolean;
  min:number;
  max:number;
  step:number;
  labels:number[];
}
export { IViewSettings }