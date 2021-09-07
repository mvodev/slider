class ErrorMessage{
  private message:string;
  private timestamp:string;
  private whoCalled:string;

  constructor(message:string,whoCalled:string){
    this.message = message;
    this.whoCalled = whoCalled;
    this.timestamp = new Date().toDateString();
    this.showMessage();
  }

  showMessage():void {
    console.error('message: '+this.message+', invoked by: '+this.whoCalled+', timestamp: '+ this.timestamp);
  }

}
export {ErrorMessage};