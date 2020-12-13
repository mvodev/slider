export interface IModelFacade {
 getMin(): number;
 getMax():number;
 showThumbLabel(): boolean | undefined;
 setFrom(pos: number);
 getFrom(): number;
 setTo(value: number): void;
 getTo(): number | undefined;
 isRange(): boolean | undefined;
 isVertical(): boolean | undefined;
 getStep():number;
 getOnChange(): Function | undefined;
 getOnUpdate(): Function | undefined;
}
