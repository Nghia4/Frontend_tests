import { makeObservable, observable, action } from "mobx"

export class CalculateStore {
    expression = []  
    constructor(rootStore) {
        makeObservable(this, {
            expression: observable,
            setExpression: action,
        })
        this.rootStore = rootStore;
    } 

    setExpression (expression) {
        this.expression = expression
    }
}