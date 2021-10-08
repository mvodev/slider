interface IModelFacade {
  getMin(): number;
  getMax(): number;
  setFrom(pos: number, value: number): void;
  getFrom(): number;
  setTo(pos: number, value: number): void;
  getTo(): number;
  getStep(): number;
}
export default IModelFacade;
