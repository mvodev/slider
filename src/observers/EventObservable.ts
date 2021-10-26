import IObservable from './IObservable';
import IObserver from './IObserver';
import Messages from '../utils/messages';

class EventObservable implements IObservable {
  private observers: Array<IObserver>;

  constructor() {
    this.observers = [];
  }

  addObserver(o: IObserver): void {
    this.observers.push(o);
  }

  removeObserver(o: IObserver): void {
    this.observers.filter((subscriber) => subscriber !== o);
  }

  notifyObservers(msg: Messages, settings: string, width: number): void {
    this.observers.forEach((elem) => {
      if (elem && ('handleEvent' in elem)) {
        elem.handleEvent(msg, settings, width);
      }
    });
  }
}
export default EventObservable;
