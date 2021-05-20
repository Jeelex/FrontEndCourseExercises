"use strict";

function Account(fullname) {
	this.fullname = fullname;
	Account.IBAN++;
	this.IBAN = "GR000" + Account.IBAN;
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

Account.IBAN = 10003;


const newAccount = new Account("Kostas Minaidis");


newAccount.getBalance(); // 0
newAccount.deposit(100);
newAccount.getBalance(); // 100
newAccount.withdraw(50);
newAccount.getBalance(); // 50
