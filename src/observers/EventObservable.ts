import Messages from '../utils/messages';
import IObservable from './IObservable';
import IObserver from './IObserver';

class EventObservable implements IObservable {
  private observers: Array<IObserver>;

  constructor() {
    this.observers = [];
  }

  addObserver(o: IObserver): void {
    this.observers.push(o);
  }

  removeObserver(o: IObserver): void {
    this.observers = this.observers.filter((subscriber) => subscriber !== o);
  }

  notifyObservers(msg: Messages, settings: string): void {
    this.observers.forEach((elem) => {
      if (elem && ('handleEvent' in elem)) {
        elem.handleEvent(settings, msg);
      }
    });
  }
}
export default EventObservable;
