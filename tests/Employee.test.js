const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  describe("getName", () => {
    it("should accept a string that represents the members name", () => {
        const userName = "Tiffany"
        const testEmployee = new Employee(userName, "45", "employee@gmail.com")
       
      
      expect(testEmployee.name).toEqual(userName);
    });
  });

  describe("getId", () => {
    it("should accept a string that represents the members ID", () => {
        const testId ="45"
        const testEmployee = new Employee("Tiffany", testId, "employee@gmail.com")
    

      expect(testEmployee.id).toEqual(testId);
    });
  });

  describe("getEmail", () => {
    it("should accept a link that represents the employees email address", () => {
        const testEmail = "test@gmail.com"
        const testEmployee = new Employee("Tiffany", "45", testEmail)
        

      expect(testEmployee.email).toEqual(testEmail);
    });
  });

  describe("getRole", () => {
    it("should return Employee.", () => {
        const role = "Employee"
        const testEmployee = new Employee("Tiffany", "45", "employee@gmail.com")

      

      expect(testEmployee.getRole()).toEqual(role);
    });
  });

})