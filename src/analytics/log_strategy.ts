import { Log } from "../presentation/log";
import { ActionLog } from "./action/action_log";
import { ErrorLog } from "./error/error_log";
import { ScreenLog } from "./screen/action_log";

export class LogStrategy implements Log {
  constructor(
    private readonly errorLog: ErrorLog,
    private readonly actionLog: ActionLog,
    private readonly screenLog: ScreenLog
  ) {}
  event(type: Log.Type, data: Log.Data): void {
    switch (type) {
      case "action":
        this.actionLog.event(type, data);
        break;
      case "error":
        this.errorLog.event(type, data);
        break;
      case "screen":
        this.screenLog.event(type, data);
        break;

      default:
        throw "error";
    }
  }
}
