import { ISettings } from '../model/ISettings';
import { Slider } from './modules/Slider';
import { Messages } from '../utils/Messages';
import { EventObservable } from '../observers/EventObservable';
import { defaultSettings } from '../model/defaultSettings';
import { IViewSettings } from '../model/IViewSettings';
import { IObserver } from '../observers/IObserver';

class View extends EventObservable implements IObserver{
  private slider: Slider;
  private viewSettings: IViewSettings;
  private rootElem: HTMLDivElement;

  constructor(root: HTMLDivElement) {
    super();
    this.viewSettings = Object.assign({},defaultSettings);
    this.rootElem = root;
    this.slider = new Slider(this.rootElem);
  }

  handleEvent(msg: Messages, settings: string): void {
    this.notifyObservers(msg,settings,this.getThumbWidthInPercentage());
  }

  private render(s:IViewSettings):void {
    this.slider.addObserver(this);
    this.slider.render(JSON.stringify(s));
    if (this.viewSettings.hideThumbLabel) {
      this.slider.getThumbLabelFrom().hideLabel();
      if (this.viewSettings.isRange) {
        this.slider.getThumbLabelTo().hideLabel();
      }
    }
    if (this.viewSettings.isVertical) {
      this.slider.setVertical();
    }
  }

  refreshView(msg: Messages, settings: ISettings):void {
    if (msg === Messages.INIT) {
      this.updateViewSettings(settings);
      this.render(this.viewSettings);
      this.setColoredRange();
    }
    if (msg === Messages.INIT || msg === Messages.UPDATE) {
      this.updateViewSettings(settings);
      if (!settings.hideThumbLabel) {
        this.slider.getThumbLabelFrom().showLabel();
        this.setThumbToValue(settings,'thumbFrom');
        if (settings.isRange) {
          this.setThumbToValue(settings,'thumbTo');
          this.slider.getThumbLabelTo().showLabel();
        }
      }
      else {
        this.slider.getThumbLabelFrom().hideLabel();
        if (settings.isRange) {
          this.slider.getThumbLabelTo().hideLabel();
        }
      }
      this.slider.setMinRange(settings.min);
      this.slider.setMaxRange(settings.max);
      this.slider.setNumberLabels(settings.labels);
      this.slider.setValueToLabelThumbFrom(settings.from);
      if (settings.isRange) {
        this.slider.setValueToLabelThumbTo(settings.to !== undefined ? settings.to : settings.from);

        if (settings.isVertical) {
          this.getThumbTo().style.top = (
            (Math.abs((settings.to !== undefined ? settings.to : settings.from) - settings.min) / Math.abs(settings.max - settings.min)) * (100 - this.getThumbWidthInPercentage())) + '%';
          this.getThumbFrom().style.top = (Math.abs(settings.from - settings.min) / Math.abs(settings.max - settings.min)) * 100 + '%';
        }
        else {
          this.getThumbTo().style.left = ((Math.abs((settings.to !== undefined ? settings.to : settings.from) - settings.min) / Math.abs(settings.max - settings.min)) * (100 - this.getThumbWidthInPercentage())) + '%';
          this.getThumbFrom().style.left = (Math.abs(settings.from - settings.min) / Math.abs(settings.max - settings.min)) * (100 - this.getThumbWidthInPercentage()) + '%';
        }
      }
      else {
        if (settings.isVertical) {
          this.getThumbFrom().style.top = (Math.abs(settings.from - settings.min) / Math.abs(settings.max - settings.min)) * (100 -this.getThumbWidthInPercentage())+ '%';
        }
        else {
          this.getThumbFrom().style.left = (Math.abs(settings.from - settings.min) / Math.abs(settings.max - settings.min)) * (100 - this.getThumbWidthInPercentage()) + '%';
        }
      }
      this.setColoredRange();
    }
    else if (msg === Messages.FROM_IS_SET) {
      this.slider.setValueToLabelThumbFrom(settings.from);
    }
    else if (msg === Messages.TO_IS_SET) {
      this.slider.setValueToLabelThumbTo(settings.to !== undefined ? settings.to : settings.from);
    }
  }

  private setColoredRange(){
    this.slider.setColoredRange();
  }

  private convertFromValueToPercent(s:ISettings,value: number): string {
    return (((100-this.getThumbWidthInPercentage()) / Math.abs(s.max - s.min)) * (Math.abs(value - s.min)))+'%';
  }

  private setThumbToValue(s:ISettings,type: string) :void{
    if (type === 'thumbFrom') {
      if (this.viewSettings.isVertical) {
        this.getThumbFrom().style.top = this.convertFromValueToPercent(s,s.from);
      }
      else {
        this.getThumbFrom().style.left = this.convertFromValueToPercent(s,s.from);
      }
    }
    else {
      if (this.viewSettings.isVertical) {
        this.getThumbTo().style.top = 
          this.convertFromValueToPercent(s,s.to !== undefined ? s.to : s.from);
      }
      else {
        this.getThumbTo().style.left 
        = this.convertFromValueToPercent(s,s.to!==undefined?s.to:s.from);
      }
    }
  }

  getSlider(): Slider {
    return this.slider;
  }
  
  private getThumbWidthInPercentage() {
    return this.slider.getThumbWidthInPercentage();
  }

  private getThumbFrom() {
    return this.slider.getThumbFrom();
  }

  private getThumbTo() {
    return this.slider.getThumbTo();
  }

  private updateViewSettings(s: ISettings) {
    this.viewSettings = Object.assign(this.viewSettings, s);
  }

}

export {View}