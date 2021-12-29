/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var newAcc = new Account(this.nextAccountNumber, holder);
    this.accounts.push(newAcc);
    newAcc.deposit(balance);
    this.nextAccountNumber++;
    return newAcc.number;
  } else {
    return null;
  }
};
Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};
Bank.prototype.getTotalAssets = function () {
  var total = 0;
  if (this.accounts.length <= 0) {
    return total;
  } else {
    for (var i = 0; i < this.accounts.length; i++) {
      var accTotal = this.accounts[i].getBalance();
      total += accTotal;
    }
    return total;
  }

};
