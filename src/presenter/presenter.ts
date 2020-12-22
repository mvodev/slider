import { ISettings } from '../model/ISettings';
import { Model } from '../model/model';
import { View } from '../view/view';
import { Utils } from '../utils/Utils';
import { Messages } from '../utils/Messages';
import { IObserver } from '../observers/IObserver';
export class Presenter implements IObserver {

  private view: View;
  private model: Model;
  private callback: Function;

  constructor(view: View, model: Model) {
    this.view = view;
    this.model = model;
  }

  handleEvent(msg: Messages, s: string) {
    if (msg === Messages.INIT) {
      this.initialize();
      if (this.model.getOnStart()) {
        this.model.getOnStart().call(JSON.parse(s));
      }
    }
    else if (msg === Messages.UPDATE) {
      this.view.refreshView(Messages.UPDATE, JSON.parse(s));
      if (this.model.getOnUpdate()) {
        this.model.getOnUpdate().call(JSON.parse(s));
      }
    }
    else if (msg === Messages.SET_FROM) {
      this.model.setFrom(JSON.parse(s).from);
      this.view.refreshView(Messages.FROM_IS_SET, { from: this.model.getFrom(), to: 0, min: 0, max: 0 });
      if (this.model.getOnChange()) {
        this.model.getOnChange().call(this, JSON.stringify(this.model.getSettings()));
      }
    }
    else if (msg === Messages.SET_TO) {
      this.model.setTo(JSON.parse(s).to);
      this.view.refreshView(Messages.TO_IS_SET, { to: this.model.getTo(), from: 0, min: 0, max: 0 });
      if (this.model.getOnChange()) {
        this.model.getOnChange().call(this, JSON.stringify(this.model.getSettings()));
      }
    }
  }
  initialize() {
    this.view.refreshView(Messages.INIT, this.model.getSettings());
  }
  update(newSettings: ISettings) {
    this.model.updateSettings(newSettings);
  }
  isVerticalSlider(): boolean | undefined {
    return this.model.isVertical();
  }
  isRangeSlider(): boolean | undefined {
    return this.model.isRange();
  }
  withThumbLabel(): boolean | undefined {
    return this.model.showThumbLabel();
  }
}
