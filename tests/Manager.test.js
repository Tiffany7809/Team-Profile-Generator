const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("getOfficeNum", () => {
    it("should output an office number that is a number", () => {

      const num = "20620030000"; 
      const manager = new Manager("Adrian", "34", "teammanager@gmail.com", num);
      

      expect(manager.officeNum).toBe(num);
    });
  });

  describe("getRole", () => {
    it("should output Manager", () => {

      const role = "Manager"; 
      const manager = new Manager("Adrian", "34", "teammanager@gmail.com", 2062004000);
      

      expect(manager.getRole()).toBe(role);
    });
  });



});
