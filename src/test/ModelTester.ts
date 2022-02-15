import ISettings from "../model/ISettings";
import Model from "../model/Model";
import IObserver from "../observers/IObserver";
import Messages from "../utils/messages";

class ModelTester implements IObserver{
  private model: Model;

  private result: ISettings;

  constructor(model:Model){
    this.model = model;
  }

  handleEvent(message: ISettings, eventType: Messages): void {
    this.result = { ...message };
  }

  test(newSettings: ISettings) {
    this.model.updateSettings(newSettings);
  }

  getResult():ISettings{
    return { ...this.result };
  }
}

export default ModelTester;