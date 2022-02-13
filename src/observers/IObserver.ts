import Messages from '../utils/messages';

interface IObserver {
  handleEvent(settings: string, msg: Messages): void;
}
export default IObserver;
