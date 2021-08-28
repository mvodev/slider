import { IViewSettings } from "../../model/IViewSettings";
import { ClassNaming } from '../../utils/ClassNaming';

class RangeLabel{
  private rangeLabelContainer!: HTMLDivElement;
  private minLabel!: HTMLSpanElement;
  private maxLabel!: HTMLSpanElement;
  private viewSettings!:IViewSettings;

  constructor() {
    this.initComponents();
  }
  render(settings: string, numberOfMarking:number):void{
  this.viewSettings = JSON.parse(settings);
  this.minLabel = document.createElement('span');
  this.minLabel.classList.add(ClassNaming.RANGE_LABEL_SCALE);
  this.rangeLabelContainer.appendChild(this.minLabel);
  let step = this.viewSettings.min;
  for (let i = 0; i < numberOfMarking-1; i++) {
    const marking = document.createElement('span');
    marking.classList.add(ClassNaming.RANGE_LABEL_SCALE);
    step += Math.abs(this.viewSettings.max - this.viewSettings.min) / numberOfMarking;
    marking.innerText = ''+step;
    this.rangeLabelContainer.appendChild(marking);
  }
  this.maxLabel = document.createElement('span');
  this.maxLabel.classList.add(ClassNaming.RANGE_LABEL_SCALE);
  this.rangeLabelContainer.appendChild(this.maxLabel);
}
  getRangeLabel():HTMLDivElement {
    return this.rangeLabelContainer;
  }
  setMinRange(value: number) :void{
    this.minLabel.innerText = '' + value;
  }
  setMaxRange(value: number):void {
    this.maxLabel.innerText = '' + value;
  }
  private initComponents() {
    this.rangeLabelContainer = document.createElement('div');
    this.rangeLabelContainer.classList.add(ClassNaming.RANGE_LABEL);
  }
}
export {RangeLabel}