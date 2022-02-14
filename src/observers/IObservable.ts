import ISettings from '../model/ISettings';
import Messages from '../utils/messages';
import IObserver from './IObserver';

interface IObservable {
  addObserver(o: IObserver): void;
  removeObserver(o: IObserver): void;
  notifyObservers(eventType: Messages, message: ISettings): void;
}
export default IObservable;
