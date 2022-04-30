const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("getSchool", () => {
    it("should accept a string that represents the members school name", () => {
        

        const testSchool = "western Washignton University"
        const intern = new Intern("Adrian", "34", "internemail@gmail.com", testSchool);
        
      

      expect(intern.school).toBe(testSchool);
    });
  });

  describe("getRole", () => {
    it("should output Intern", () => {
        

        const role = "Intern"
        const intern = new Intern("Adrian", "34", "internemail@gmail.com", "WWU");
        
      

      expect(intern.getRole()).toBe(role);
    });
  });

})