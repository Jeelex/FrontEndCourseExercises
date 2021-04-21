// Create a Function constructor that creates Bank Accounts

// Implement the following prototype methods:

// Validation rules include:
// 2.2.1. Amount must not be negative number
// 2.2.2. Amount must be of type Number
// 2.2.3. Amount must not exceed current balance

function Account(fullname) {
	this.fullname = fullname;
	// Automatically give a new IBAN number to new accounts. (Static property)
	this.IBAN = "GR00010003";
	this.balance = 0;

	// 2.1. deposit: will deposit an amount to the current balance
	this.deposit = function (amount) {
		return console.log(amount);
	};
	// 2.2. withdraw: will withdraw an amount from the current balance an return the withdrawn amount
	this.withdraw = function (amount) {
		return console.log(amount);
	};
	// 2.3. getBalance: will return the current balance
	this.getBalance = function () {
		return console.log(this.balance);
	};
}

const newAccount = new Account("Kostas Minaidis");
// New account created for: Kostas Minaidis
// IBAN: GR00010003

newAccount.getBalance(); // 0
newAccount.deposit(100);
newAccount.getBalance(); // 100
newAccount.withdraw(50);
newAccount.getBalance(); // 50

// newAccount.withdraw( 500 )   // Error 'Insufficient balance!'
// newAccount.withdraw( "50" )  // Error 'Invalid amount'
// newAccount.withdraw( -150 )  // Error 'Invalid amount'
