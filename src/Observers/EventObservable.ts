import { IObservable } from "./IObservable";
import { IObserver } from "./IObserver";

export class EventObservable implements IObservable {
 private observers: Array<IObserver>;
 constructor() {
  this.observers = [];
 }
 addObserver(o: IObserver) {
  this.observers.push(o);
 }
 removeObserver(o: IObserver) {
  this.observers.filter(subscriber => subscriber !== o);
 }
 notifyObservers(settings) {
  this.observers.forEach(elem => elem.handleEvent(settings));
 }

}