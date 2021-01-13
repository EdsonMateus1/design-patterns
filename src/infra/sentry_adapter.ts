import { Analytics } from "../analytics/protocols/analytics";
import { ErrorAnalytics } from "../analytics/protocols/error_analytics";

export class SentryAdapter implements ErrorAnalytics {
  saveError(error: any): void {
    throw new Error("Method not implemented.");
  }
}
