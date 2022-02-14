import ISettings from '../model/ISettings';
import Messages from '../utils/messages';

interface IObserver {
  handleEvent(settings: ISettings, msg: Messages): void;
}
export default IObserver;
