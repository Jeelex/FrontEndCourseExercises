"use strict";

function Account(fullname) {
	this.fullname = fullname;

	this.balance = 0;
	this.deposit = function (amount) {
		return this.balance = this.balance + amount;
	};
	this.withdraw = function (amount) {
    if (typeof amount !== "number" || amount <= 0){
      return "Error 'Invalid amount'"
    }
    if (amount > this.balance) {
      return "Error 'Insufficient balance!'"
    }
		return this.balance = this.balance - amount;
	};
	this.getBalance = function () {
		return this.balance;
	};
}



const newAccount = new Account("Kostas Minaidis");
// New account created for: Kostas Minaidis
// IBAN: GR00010003

console.log({ newAccount });

console.log( newAccount.getBalance() ); // 0
newAccount.deposit(100);
console.log( newAccount.getBalance() ); // 100
console.log(newAccount.withdraw(50));
// newAccount.withdraw(50);
console.log( newAccount.getBalance() ); // 50
