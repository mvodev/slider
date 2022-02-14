import ISettings from '../model/ISettings';
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

  notifyObservers(eventType: Messages, message: ISettings): void {
    this.observers.forEach((elem) => {
      if (elem && ('handleEvent' in elem)) {
        elem.handleEvent(message, eventType);
      }
    });
  }
}
export default EventObservable;
