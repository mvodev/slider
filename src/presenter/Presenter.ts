import ISettings from '../model/ISettings';
import Model from '../model/Model';
import Messages from '../utils/messages';
import IObserver from '../observers/IObserver';
import EventObservable from '../observers/EventObservable';
import Slider from '../view/Slider';

class Presenter extends EventObservable implements IObserver {
  private view: Slider;

  private model: Model;

  constructor(view: Slider, model: Model) {
    super();
    this.view = view;
    this.model = model;
  }

  handleEvent(s: ISettings, msg: Messages) : void {
    if (msg === Messages.UPDATE) {
      this.view.refreshView(Messages.UPDATE, s);
      this.notifyObservers(Messages.UPDATE, this.model.getSettings());
    } else if (msg === Messages.SET_FROM) {
      this.model.setFrom(s.from);
      this.view.refreshView(Messages.FROM_IS_SET, this.model.getSettings());
      this.notifyObservers(Messages.UPDATE, this.model.getSettings());
    } else if (msg === Messages.SET_TO) {
      this.model.setTo(s.to);
      this.view.refreshView(Messages.TO_IS_SET, this.model.getSettings());
      this.notifyObservers(Messages.UPDATE, this.model.getSettings());
    }
  }

  initialize(): void {
    this.view.refreshView(Messages.INIT, this.model.getSettings());
    this.notifyObservers(Messages.UPDATE, this.model.getSettings());
  }

  update(newSettings: ISettings): void {
    this.model.updateSettings(newSettings);
  }

  destroy():void {
    this.view.destroy();
  }
}
export default Presenter;
