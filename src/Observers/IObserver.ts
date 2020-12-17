import { ISettings } from "../model/ISettings";
import { Messages } from '../utils/Messages';
export interface IObserver {
 handleEvent(msg: Messages, s: string);
}