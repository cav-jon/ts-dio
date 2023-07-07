export abstract class Account {
    private name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
        
    }

    deposit = (value: number): number => {
        if(this.validateStatus()) {
            this.balance = value
        }
        return value
    
    }

    withdraw = (value: number): void => {
        if(this.balance > 0){
           this.balance = this.balance - value
           console.log('Sucessful withdraw of ' + value +'!')
        }else {
            console.log('Insufficient funds!')
        }
        
    }

    getBalance = () => {
        console.log("Account Total: " + this.balance)
    }

    setName = (name: string): string => {
        this.name = name
        return 'Name Saved!'
    }

    getName = (): string => {
        return this.name
    }
    getAccountNumber = (): number => {
        return this.accountNumber
    }

    validateStatus = (): boolean => {
        if(this.status) {
            return this.status
        } 
        throw new Error('Account not active!')
    }
}
