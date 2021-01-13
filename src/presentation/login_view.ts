import { Log } from "./log";

export class LoginView {
  constructor(private readonly log: Log) {}

  render() {
    this.log.event("screen", { name: "Login" });
  }
}
