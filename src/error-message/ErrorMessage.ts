class ErrorMessage{
  private message:string;
  private timestamp:string;

  constructor(message:string,timestamp:string){
    this.message = message;
    this.timestamp = timestamp;
    this.showMessage();
  }

  showMessage():void {
    console.error(this.message+', '+this.timestamp+' '+new Date());
  }

}
export {ErrorMessage};