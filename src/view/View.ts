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
    this.slider.addObserver(this);
  }

  handleEvent(msg: Messages, settings: string): void {
    this.notifyObservers(msg,settings,this.getThumbWidthInPercentage());
  }

  private render(s:IViewSettings):void {
    this.slider.render(JSON.stringify(s));
  }

  refreshView(msg: Messages, settings: ISettings):void {
    if (msg === Messages.INIT || msg === Messages.UPDATE) {
      this.updateViewSettings(settings);
      this.render(this.viewSettings);
      if (!settings.hideThumbLabel) {
        this.setThumbToValue(settings,'thumbFrom');
        if (settings.isRange) {
          this.setThumbToValue(settings,'thumbTo');
        }
      }
      else {
        this.setThumbToValue(settings, 'thumbFrom');
        if (settings.isRange) {
          this.setThumbToValue(settings, 'thumbTo');
        }
      }
      this.slider.setValueToLabelThumbFrom(settings.from);
      if (settings.isRange) {
        this.slider.setValueToLabelThumbTo(settings.to !== undefined ? settings.to : settings.from);

        if (settings.isVertical) {
          this.getThumbTo().style.top = this.convertFromValueToPercent(settings, settings.to);
          this.getThumbFrom().style.top = this.convertFromValueToPercent(settings, settings.from);
        }
        else {
          this.getThumbTo().style.left = this.convertFromValueToPercent(settings, settings.to);
          this.getThumbFrom().style.left = this.convertFromValueToPercent(settings, settings.from);
        }
      }
      else {
        if (settings.isVertical) {
          this.getThumbFrom().style.top = this.convertFromValueToPercent(settings, settings.from);
        }
        else {
          this.getThumbFrom().style.left = this.convertFromValueToPercent(settings,settings.from);
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
      if (s.isVertical) {
        this.getThumbFrom().style.top = this.convertFromValueToPercent(s,s.from);
        this.getThumbFrom().style.left = '-5px';
      }
      else {
        this.getThumbFrom().style.left = this.convertFromValueToPercent(s,s.from);
        this.getThumbFrom().style.top = '-5px';
      }
    }
    else {
      if (s.isVertical) {
        this.getThumbTo().style.top = 
          this.convertFromValueToPercent(s,s.to !== undefined ? s.to : s.from);
        this.getThumbTo().style.left = '-5px';
      }
      else {
        this.getThumbTo().style.left 
        = this.convertFromValueToPercent(s,s.to!==undefined?s.to : s.from);
        this.getThumbTo().style.top = '-5px';
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