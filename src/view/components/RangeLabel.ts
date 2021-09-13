import { defaultSettings } from '../../model/defaultSettings';
import { ISettings } from '../../model/ISettings';
import { ClassNaming } from '../../utils/ClassNaming';
import { Constants } from '../../utils/Constants';
import { Utils } from '../../utils/Utils';

class RangeLabel{
  private rangeLabelContainer!: HTMLDivElement;
  private minLabel!: HTMLSpanElement;
  private maxLabel!: HTMLSpanElement;
  private labels:HTMLSpanElement[];
  private viewSettings!:ISettings;

  constructor(viewSettings:ISettings) {
    this.labels = [];
    this.viewSettings = Object.assign(defaultSettings, viewSettings);
    this.initComponents();
  }

  render(settings:ISettings):void{
    this.viewSettings = Object.assign(this.viewSettings, settings);
    this.setMinRange(this.viewSettings.min);
    this.minLabel.setAttribute('value', this.viewSettings.min.toString());
    this.setMaxRange(this.viewSettings.max);
    this.maxLabel.setAttribute('value', this.viewSettings.max.toString());
    this.setLabels();
  }

  getRangeLabel():HTMLDivElement {
    return this.rangeLabelContainer;
  }

  private setLabels(): void {
    const diapason = Math.abs(this.viewSettings.max - this.viewSettings.min);
    const step = diapason / (Constants.NUMBER_OF_LABELS + 1);
    let initialValue = this.viewSettings.min;
    for (let i = 1; i < this.labels.length-1; i++) {
      initialValue += step;
      this.labels[i].setAttribute('value', this.round(initialValue).toString());
      this.labels[i].innerText = this.round(initialValue).toString();
    }
  }

  private round(value:number):number{
    let del = 1;
    if (this.viewSettings.step != 0) {
      del = 1.0 / this.viewSettings.step;
    }
    const result = Math.round(+value.toFixed(Utils.numDigitsAfterDecimal(this.viewSettings.step)) * del) / del;
    return result;
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
    this.minLabel = document.createElement('span');
    this.minLabel.classList.add(ClassNaming.RANGE_LABEL_SCALE);
    this.maxLabel = document.createElement('span');
    this.maxLabel.classList.add(ClassNaming.RANGE_LABEL_SCALE);
    this.rangeLabelContainer.appendChild(this.minLabel);
    this.labels.push(this.minLabel);
    for(let i=0;i<Constants.NUMBER_OF_LABELS;i++){
      const mark = document.createElement('span');
      mark.classList.add(ClassNaming.RANGE_LABEL_SCALE);
      this.labels.push(mark);
      this.rangeLabelContainer.appendChild(mark);
    }
    this.rangeLabelContainer.appendChild(this.maxLabel);
    this.labels.push(this.maxLabel);
  }

  setVertical():void{
    this.getRangeLabel().classList.add(ClassNaming.RANGE_LABEL_IS_VERTICAL);
  }

  setHorizontal():void{
    this.getRangeLabel().classList.remove(ClassNaming.RANGE_LABEL_IS_VERTICAL);
  }

  getLabels():HTMLElement[]{
    return this.labels;
  }

  hideLabels():void{
    this.rangeLabelContainer.classList.add(ClassNaming.HIDE_ELEMENT);
  }

  showLabels(): void {
    this.rangeLabelContainer.classList.remove(ClassNaming.HIDE_ELEMENT);
  }

}
export {RangeLabel}