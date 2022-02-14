import ISettings from '../model/ISettings';
import Messages from '../utils/messages';
import IObserver from './IObserver';

interface IObservable {
  addObserver(o: IObserver): void;
  removeObserver(o: IObserver): void;
  notifyObservers(type: Messages, data: ISettings): void;
}
export default IObservable;
