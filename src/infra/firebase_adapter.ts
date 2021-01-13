import { Analytics } from "../analytics/protocols/analytics";

export class FirebaseAdapter implements Analytics {
  save(type: string, data: any): void {
    throw new Error("Method not implemented.");
  }
}
