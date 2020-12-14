import { IObserver } from './IObserver';
import { Messages } from '../utils/Messages';
export interface IObservable {
 addObserver(o: IObserver);
 removeObserver(o: IObserver);
 notifyObservers(type: Messages, data: string);
}