import Messages from '../utils/Messages';

interface IObserver {
  handleEvent(msg: Messages, s: string, width:number):void;
}
export default IObserver;
