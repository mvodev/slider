export interface ISettings {
 min: number;
 max: number;
 from: number;
 to?: number;
 step?: number;
 isVertical?: boolean;
 isRange?: boolean;
 hideThumbLabel?: boolean | undefined;
 onStart?: Function | undefined;
 onChange?: Function | undefined;
 onUpdate?: Function | undefined;
 onDestroy?: Function | undefined;
 callBack?: Function | undefined;
}