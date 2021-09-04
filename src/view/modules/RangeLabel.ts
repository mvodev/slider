import { IViewSettings } from '../../model/IViewSettings';
import { ClassNaming } from '../../utils/ClassNaming';

class RangeLabel{
  private rangeLabelContainer!: HTMLDivElement;
  private minLabel!: HTMLSpanElement;
  private maxLabel!: HTMLSpanElement;
  private rangeLabels!:HTMLSpanElement[];
  private labelsContainer!:HTMLSpanElement;

  constructor() {
    this.initComponents();
  }
  render(settings: IViewSettings):void{
    
    if(this.rangeLabels.length===0){
      for (let i = 0; i < settings.labels.length; i++) {
        const marking = document.createElement('span');
        marking.classList.add(ClassNaming.RANGE_LABEL_SCALE);
        marking.innerText = settings.labels[i] + '';
        this.labelsContainer.appendChild(marking);
        this.rangeLabels.push(marking);
      }
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

  getRangeLabels():HTMLSpanElement[]{
    return this.rangeLabels;
  }

  setRangeLabels(value:number[]):void{
    this.rangeLabels.forEach(function(elem,index){
      elem.innerText = value[index]+'';
    });
  }

  private initComponents() {
    this.rangeLabelContainer = document.createElement('div');
    this.rangeLabelContainer.classList.add(ClassNaming.RANGE_LABEL);
    this.rangeLabels = [];
    this.minLabel = document.createElement('span');
    this.minLabel.classList.add(ClassNaming.RANGE_LABEL_SCALE);
    this.maxLabel = document.createElement('span');
    this.maxLabel.classList.add(ClassNaming.RANGE_LABEL_SCALE);
    this.labelsContainer = document.createElement('span');
    this.labelsContainer.classList.add(ClassNaming.RANGE_LABEL_SCALE_CONTAINER);
    this.rangeLabelContainer.appendChild(this.minLabel);
    this.rangeLabelContainer.appendChild(this.labelsContainer);
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