import Messages from '../utils/messages';

interface IObserver {
  handleEvent(msg: Messages, s: string, width: number): void;
}
export default IObserver;
