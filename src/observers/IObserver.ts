import Messages from '../utils/messages';

interface IObserver {
  handleEvent(settings: string, msg: Messages, width: number): void;
}
export default IObserver;
