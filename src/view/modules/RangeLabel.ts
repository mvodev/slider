import { defaultSettings } from '../../model/defaultSettings';
import { IViewSettings } from '../../model/IViewSettings';
import { ClassNaming } from '../../utils/ClassNaming';
import { Constants } from '../../utils/Constants';
import { Utils } from '../../utils/Utils';

class RangeLabel{
  private rangeLabelContainer!: HTMLDivElement;
  private minLabel!: HTMLSpanElement;
  private maxLabel!: HTMLSpanElement;
  //private thumbWidthInPercentage:number;
  private labels:HTMLSpanElement[];
  private settings!:IViewSettings;

  constructor(viewSettings:IViewSettings) {
    this.labels = [];
    //this.thumbWidthInPercentage = thumbWidthInPercentage;
    this.settings = Object.assign(defaultSettings, viewSettings);
    this.initComponents();
  }

  render(settings:IViewSettings):void{
    this.settings = Object.assign(this.settings, settings);
    this.setMinRange(this.settings.min);
    this.setMaxRange(this.settings.max);
    //Math.round(initial * 100) / 100).toFixed(Utils.numDigitsAfterDecimal(this.getStep()));
    const diapason = Math.abs(this.settings.max - this.settings.min);
    const step = diapason / (Constants.NUMBER_OF_LABELS + 1);
    let initialValue = this.settings.min;
    for(let i=0; i<this.labels.length; i++){
      initialValue+=step;
      this.labels[i].innerText = Number(Math.round(initialValue * 100) / 100).toFixed(Utils.numDigitsAfterDecimal(this.settings.step));
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

  hideRangeLabels():void{
    this.rangeLabelContainer.classList.add(ClassNaming.HIDE_ELEMENT);
  }

  showRangeLabels():void{
    this.rangeLabelContainer.classList.remove(ClassNaming.HIDE_ELEMENT);
  }
  
}
export {RangeLabel}