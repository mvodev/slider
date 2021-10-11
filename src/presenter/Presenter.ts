import ISettings from '../model/ISettings';
import Model from '../model/Model';
import View from '../view/View';
import Messages from '../utils/messages';
import IObserver from '../observers/IObserver';
import EventObservable from '../observers/EventObservable';

class Presenter extends EventObservable implements IObserver {
  private view: View;

  private model: Model;

  constructor(view: View, model: Model) {
    super();
    this.view = view;
    this.model = model;
  }

  handleEvent(msg: Messages, s: string, thumbWidthInPercentage: number) : void {
    if (msg === Messages.UPDATE) {
      this.view.refreshView(Messages.UPDATE, JSON.parse(s));
      this.notifyObservers(Messages.UPDATE, this.model.getSettings(), thumbWidthInPercentage);
    } else if (msg === Messages.SET_FROM) {
      this.model.setFrom(JSON.parse(s).from, thumbWidthInPercentage);
      this.view.refreshView(Messages.FROM_IS_SET, JSON.parse(this.model.getSettings()));
      this.notifyObservers(Messages.UPDATE, this.model.getSettings(), thumbWidthInPercentage);
    } else if (msg === Messages.SET_TO) {
      this.model.setTo(JSON.parse(s).to, thumbWidthInPercentage);
      this.view.refreshView(Messages.TO_IS_SET, JSON.parse(this.model.getSettings()));
      this.notifyObservers(Messages.UPDATE, this.model.getSettings(), thumbWidthInPercentage);
    }
  }

  initialize(): void {
    this.view.refreshView(Messages.INIT, JSON.parse(this.model.getSettings()));
    this.notifyObservers(Messages.UPDATE, this.model.getSettings(), 0);
  }

  update(newSettings: ISettings): void {
    this.model.updateSettings(newSettings);
  }
}
export default Presenter;
