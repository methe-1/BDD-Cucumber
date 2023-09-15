const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");

Given("I have the number {int}", function (int) {
  this.init(int);
});

When("I add it to the number {int}", function (int) {
    this.addTo(int);
});

Then("the result should be the number {int}", function (int) {
  expect(this.result).to.be.equal(int)
});
