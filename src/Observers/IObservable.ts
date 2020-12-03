import { IObserver } from './IObserver';
export interface IObservable {
 addObserver(o: IObserver);
 removeObserver(o: IObserver);
 notifyObservers(type: string, data: number | boolean);
}