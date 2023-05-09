class Account {
  Acc_no: Number;
  Balance: Number;
  constructor(Acc_no, Balance) {
    this.Acc_no == Acc_no;
    this.Balance = Balance;
  }
  debitAmount() {
    console.log("hi from debitAmount function");
  }
  creditAmount() {
    console.log("hi from creditAmount function");
  }
  getBalance() {
    console.log("hi from getBalance function");
  }
}
interface Acccount {
  Date_of_opening: Number;
  addCustomer();
  removeCustomer();
}
class Current_Account extends Account implements Acccount {
  constructor(Acc_no = 0, Balance = 0) {
    super(Acc_no, Balance);
  }
  interest_rate: Number;
  Date_of_opening: Number;
  addCustomer() {}
  removeCustomer() {}
}
class Saving_Account extends Account implements Acccount {
  constructor(Acc_no = 0, Balance = 0) {
    super(Acc_no, Balance);
  }
  Min_Balance: Number;
  Date_of_opening: Number;
  addCustomer() {}
  removeCustomer() {}
}
