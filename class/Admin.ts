import { Account } from '../class/Account'

export default class Admin extends Account{
    constructor(name: string, accountNumber: number) {
        super(name,accountNumber)
    }

    adeposit = (value: number): void => {
        if(this.validateStatus()) {
            this.deposit(value + 10)
            console.log('Sucessful deposit!')
    }
}
}