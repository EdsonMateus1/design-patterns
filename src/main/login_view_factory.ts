import { ErrorLog } from "../analytics/error/error_log";
import { ActionLog } from "../analytics/action/action_log";
import { LogStrategy } from "../analytics/log_strategy";
import { ScreenLog } from "../analytics/screen/action_log";
import { LoginView } from "../presentation/log";
import { SentryAdapter } from "../infra/sentry_adapter";
import { FirebaseAdapter } from "../infra/firebase_adapter";
import { GoogleAnalyticsAdapter } from "../infra//google_analytics_adapter";
export const makeLoginView = (): LoginView => {

  const sentryAdapter = new SentryAdapter();
  const firebaseAdapter = new FirebaseAdapter();
  const googleAnalyticsAdapter = new GoogleAnalyticsAdapter();
  
  const errorLog = new ErrorLog(sentryAdapter);
  const actionLog = new ActionLog(googleAnalyticsAdapter);
  const screenLog = new ScreenLog(firebaseAdapter);

  const logStrategy = new LogStrategy(errorLog, actionLog, screenLog);
  return new LoginView(logStrategy);
};
