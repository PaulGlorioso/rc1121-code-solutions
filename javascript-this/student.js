/* exported student */
var student = {
  firstName: 'Paul',
  lastName: 'Glorioso',
  subject: 'JavaScript',
  getFullName: function (firstName, lastName) {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  },
  getIntroduction: function (firstName, lastName, subject) {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }
};
