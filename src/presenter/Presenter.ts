import ISettings from '../model/ISettings';
import Model from '../model/Model';
import Messages from '../utils/messages';
import IObserver from '../observers/IObserver';
import EventObservable from '../observers/EventObservable';
import Slider from '../view/Slider';

class Presenter extends EventObservable implements IObserver {
  private view: Slider;

  private model: Model;

  private initialSettings: ISettings;

  constructor(view: Slider, model: Model, initialSettings: ISettings) {
    super();
    this.view = view;
    this.model = model;
    this.initialSettings = initialSettings;
  }

  handleEvent(sliderSettings: ISettings, eventType: Messages) : void {
    if (eventType === Messages.UPDATE) {
      this.view.refreshView(Messages.UPDATE, sliderSettings);
      this.notifyObservers(Messages.UPDATE, sliderSettings);
    } else if (eventType === Messages.SET_FROM) {
      this.model.setFrom(sliderSettings.from);
    } else if (eventType === Messages.SET_TO) {
      this.model.setTo(sliderSettings.to);
    } else if (eventType === Messages.FROM_IS_SET) {
      this.view.refreshView(Messages.FROM_IS_SET, sliderSettings);
      this.notifyObservers(Messages.UPDATE, sliderSettings);
    } else if (eventType === Messages.TO_IS_SET) {
      this.view.refreshView(Messages.TO_IS_SET, sliderSettings);
      this.notifyObservers(Messages.UPDATE, sliderSettings);
    }
  }

  initialize(): void {
    this.view.refreshView(Messages.INIT, this.initialSettings);
    this.notifyObservers(Messages.UPDATE, this.initialSettings);
  }

  update(newSettings: ISettings): void {
    this.model.updateSettings(newSettings);
  }

  destroy():void {
    this.view.destroy();
  }
}
export default Presenter;
