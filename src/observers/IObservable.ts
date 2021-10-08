import IObserver from './IObserver';
import Messages from '../utils/Messages';

interface IObservable {
  addObserver(o: IObserver): void;
  removeObserver(o: IObserver): void;
  notifyObservers(type: Messages, data: string, width: number): void;
}
export default IObservable;
