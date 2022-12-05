import { makeObservable, observable, action } from "mobx"

export class HistoryStore {
    history = []  
    constructor(rootStore) {
        makeObservable(this, {
            history: observable,
            getHistoryItem: action,
        })
        this.rootStore = rootStore;
    } 
    
     getHistoryItem () {
        const history =  localStorage.getItem('history');
        if (history) {
            this.history = JSON.parse(history)
        }
        console.log(this.history)
    }
}