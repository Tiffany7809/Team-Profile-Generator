const Employee = require("./Employee");

//Manager Extends Employee
class Manager extends Employee {
  constructor(officeNum) {
    this.officeNum = officeNum;
  }

  //getOfficeNum gets Managers Office number
  getOfficeNum(){/*add prompt for officenum*/}

  //getRole() reurns as Manager
  getRole(){
    return `Manager`;
  }
}

getOfficeNum();
Manager.getRole();

module.exports = Manager;


