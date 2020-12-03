import { IObserver } from './IObserver';
interface Observable {
 addObserver(o: IObserver);
 removeObserver(o: IObserver);
 notifyObservers();
}