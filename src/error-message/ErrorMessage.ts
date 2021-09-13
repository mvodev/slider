class ErrorMessage{
  private message:string;

  constructor(message:string){
    this.message = message;
    this.showMessage();
  }

  showMessage():void {
    console.error('message: '+this.message);
  }

}
export {ErrorMessage};