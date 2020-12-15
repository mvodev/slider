import { IObservable } from "./IObservable";
import { IObserver } from "./IObserver";
import { Messages } from '../utils/Messages';

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
 notifyObservers(msg: Messages, settings: string) {
  this.observers.forEach(elem => elem.handleEvent(msg, settings));
 }
}