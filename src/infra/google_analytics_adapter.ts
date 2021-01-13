import { Analytics } from "../analytics/protocols/analytics";

export class GoogleAnalyticsAdapter implements Analytics {
  save(type: string, data: any): void {
    throw new Error("Method not implemented.");
  }
}
