//DIO Banking

//imports
import PersonalAccount from './class/PersonalAccount'
import Admin from './class/Admin'
import CompanyAccount from './class/CompanyAccount'

//creating new accounts
const newAccount: PersonalAccount = new PersonalAccount(1,'Jon',Math.random()*2)
const adminAccount: Admin = new Admin('Admin',Math.random()*3)
const companyAccount: CompanyAccount = new CompanyAccount(Math.random()*9,'Divis',Math.random()*3)

//Personal Account
// console.log('Hi, my name is ' +newAccount.getName())
// console.log(newAccount.getAccountNumber())


//Company Account
// console.log('Hi, my company name is ' +companyAccount.getName())
// companyAccount.getLoan(1000)
// companyAccount.getBalance()

//Admin Account
console.log('Hi, my Admin name is ' +adminAccount.getName())
adminAccount.adeposit(1000)
adminAccount.getBalance()
