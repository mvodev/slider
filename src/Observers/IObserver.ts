import { ISettings } from "../model/ISettings";

export interface IObserver {
 handleEvent(s:ISettings);
}