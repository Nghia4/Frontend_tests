import { CalculateStore } from "./calculatestore.js";
import { HistoryStore } from "./historystore.js";

export class RootStore {
	constructor() {
		this.historyStore = new HistoryStore(this)
		this.calculateStore = new CalculateStore(this)
	}
}

export const rootStore = new RootStore();
