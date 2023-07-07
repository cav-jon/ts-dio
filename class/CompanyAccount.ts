import { Account } from '../class/Account'

export default class CompanyAccount extends Account {
    doc_id: number

    constructor(doc_id:number,name:string,accountNumber:number) {
        super(name,accountNumber)
        this.doc_id = doc_id
    }

    getLoan = (value:number): void => {
        if(this.validateStatus()) {
            this.deposit(value)
            console.log('Sucessful loan!')
        }
        
    } 
}