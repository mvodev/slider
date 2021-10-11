import ISettings from '../model/ISettings';
import Slider from './components/Slider';
import Messages from '../utils/messages';
import EventObservable from '../observers/EventObservable';
import defaultSettings from '../model/defaultSettings';
import IObserver from '../observers/IObserver';

class View extends EventObservable implements IObserver {
  private slider!: Slider;

  private viewSettings: ISettings;

  private rootElem!: HTMLDivElement;

  constructor(root: HTMLDivElement) {
    super();
    this.viewSettings = { ...defaultSettings };
    if (root) {
      this.rootElem = root;
      this.slider = new Slider(this.rootElem);
      this.slider.addObserver(this);
    } else throw new Error('root elem of Slider is null!');
  }

  handleEvent(msg: Messages, settings: string): void {
    this.notifyObservers(msg, settings, this.getThumbWidthInPercentage());
  }

  private render(s: ISettings): void {
    this.slider.render(JSON.stringify(s));
  }

  refreshView(msg: Messages, settings: ISettings): void {
    if (msg === Messages.INIT || msg === Messages.UPDATE) {
      this.updateViewSettings(settings);
      this.render(this.viewSettings);
    } else if (msg === Messages.FROM_IS_SET) {
      this.slider.setValueToLabelThumbFrom(settings.from);
    } else if (msg === Messages.TO_IS_SET) {
      this.slider.setValueToLabelThumbTo(settings.to !== undefined ? settings.to : settings.from);
    }
  }

  getSlider(): Slider {
    return this.slider;
  }

  private getThumbWidthInPercentage() {
    return this.slider.getThumbWidthInPercentage();
  }

  private updateViewSettings(s: ISettings) {
    this.viewSettings = Object.assign(this.viewSettings, s);
  }
}

export default View;
