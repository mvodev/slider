import { defaultSettings } from '../../model/defaultSettings';
import { IViewSettings } from '../../model/IViewSettings';
import { ClassNaming } from '../../utils/ClassNaming';
import { Constants } from '../../utils/Constants';
import { Utils } from '../../utils/Utils';

class RangeLabel{
  private rangeLabelContainer!: HTMLDivElement;
  private minLabel!: HTMLSpanElement;
  private maxLabel!: HTMLSpanElement;
  private labels:HTMLSpanElement[];
  private viewSettings!:IViewSettings;

  constructor(viewSettings:IViewSettings) {
    this.labels = [];
    this.viewSettings = Object.assign(defaultSettings, viewSettings);
    this.initComponents();
  }

  render(settings:IViewSettings):void{
    this.viewSettings = Object.assign(this.viewSettings, settings);
    this.setMinRange(this.viewSettings.min);
    this.setMaxRange(this.viewSettings.max);
    const diapason = Math.abs(this.viewSettings.max - this.viewSettings.min);
    const step = diapason / (Constants.NUMBER_OF_LABELS + 1);
    let initialValue = this.viewSettings.min;
    for(let i=0; i<this.labels.length; i++){
      initialValue+=step;
      this.labels[i].innerText = Number(Math.round(initialValue * 100) / 100).toFixed(Utils.numDigitsAfterDecimal(this.viewSettings.step));
    }
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
    this.minLabel = document.createElement('span');
    this.minLabel.classList.add(ClassNaming.RANGE_LABEL_SCALE);
    this.maxLabel = document.createElement('span');
    this.maxLabel.classList.add(ClassNaming.RANGE_LABEL_SCALE);
    this.rangeLabelContainer.appendChild(this.minLabel);
    for(let i=0;i<Constants.NUMBER_OF_LABELS;i++){
      const mark = document.createElement('span');
      mark.classList.add(ClassNaming.RANGE_LABEL_SCALE);
      this.labels.push(mark);
      this.rangeLabelContainer.appendChild(mark);
    }
    this.rangeLabelContainer.appendChild(this.maxLabel);
  }

  setVertical():void{
    this.getRangeLabel().classList.add(ClassNaming.RANGE_LABEL_IS_VERTICAL);
  }
  setHorizontal():void{
    this.getRangeLabel().classList.remove(ClassNaming.RANGE_LABEL_IS_VERTICAL);
  }

}
export {RangeLabel}