export interface ISettings {
 min: number;
 max: number;
 from: number;
 to?: number;
 step?: number;
 isVertical?: boolean;
 isRange?: boolean;
 fromInPx?: number;
 toInPx?: number;
 hideThumbLabel?: boolean | undefined;
 callback?: Function | undefined;
}