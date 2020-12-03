export interface IModelFacade {
 getMin(): number;
 getMax();
 getOnChangeCallback();
 showThumbLabel(): boolean | undefined;
 setFrom(pos: number);
 getFrom(): number;
 setTo(value: number): void;
 getTo(): number | undefined;
 getFromInPx(): number;
 setFromInPx(value: number): void;
 getToInPx(): number | undefined;
 setToInPx(value: number): void;
 isRange(): boolean | undefined;
 isVertical(): boolean | undefined;
 getStep();
}
