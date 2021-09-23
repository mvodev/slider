import { defaultSettings } from '../../model/defaultSettings';
import { ISettings } from '../../model/ISettings';
import { ClassNaming } from '../../utils/ClassNaming';

class RangeLabel{
  private rangeLabelContainer!: HTMLDivElement;
  private minLabel!: HTMLSpanElement;
  private maxLabel!: HTMLSpanElement;
  private labels:HTMLSpanElement[];
  private settings!:ISettings;

  constructor(settings:ISettings) {
    this.labels = [];
    this.settings = Object.assign(defaultSettings, settings);
    this.initComponents();
  }

  render(settings:ISettings):void{
    this.settings = Object.assign(this.settings, settings);
    this.setMinRange(this.settings.min);
    this.setMaxRange(this.settings.max);
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
    this.labels.push(this.minLabel);
    const pivotMark = document.createElement('span');
    pivotMark.classList.add(ClassNaming.RANGE_LABEL_SCALE);
    this.labels.push(pivotMark);
    this.rangeLabelContainer.appendChild(pivotMark);
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