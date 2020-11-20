export interface ISettings {
 min: number;
 max: number;
 from: number;
 to?: number;
 isVertical?: boolean;
 isRange?: boolean;
 currentFrom?: number;
 currentTo?: number;
 hideThumbLabel?: boolean;
}