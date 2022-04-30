const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("getGithub", () => {
    it("should accept a string that represents the members GitHub username", () => {
        
        const githubTest = "Tiffany7809"
        const engineer = new Engineer("tiffany", "23", "engineeremail@gmail.com", githubTest)
        
      

      expect(engineer.github).toEqual(githubTest);
    });
  });

  describe("getRole", () => {
    it("should output Engineer", () => {
        
        const role = "Engineer"
        const engineer = new Engineer("tiffany", "23", "engineeremail@gmail.com", "Tiffany7809")
        
      

      expect(engineer.getRole()).toEqual(role);
    });
  });



})