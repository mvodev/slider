export interface IModelFacade {
 getMin(): number;
 getMax();
 getOnChangeCallback();
 showThumbLabel(): boolean | undefined;
 setFrom(pos: number);
 getFrom(): number;
 setTo(value: number): void;
 getTo(): number | undefined;
 isRange(): boolean | undefined;
 isVertical(): boolean | undefined;
 getStep();
 getOnStart():Function|undefined;
 getOnChange(): Function | undefined;
 getOnUpdate(): Function | undefined;
 getOnDestroy(): Function | undefined;
}
