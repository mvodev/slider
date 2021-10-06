class ErrorMessage {
  private message: string;

  constructor(message:string) {
    this.message = message;
    this.showMessage();
  }

  showMessage():void {
    // eslint-disable-next-line no-console
    console.error(`message: ${this.message}`);
  }
}
export default ErrorMessage;
