import Messages from '../utils/messages';
import IObserver from './IObserver';

interface IObservable {
  addObserver(o: IObserver): void;
  removeObserver(o: IObserver): void;
  notifyObservers(type: Messages, data: string, width: number): void;
}
export default IObservable;
