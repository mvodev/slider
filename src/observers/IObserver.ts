import ISettings from '../model/ISettings';
import Messages from '../utils/messages';

interface IObserver {
  handleEvent(message: ISettings, eventType: Messages): void;
}
export default IObserver;
