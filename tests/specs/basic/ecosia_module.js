module.export = {
  "@tags": ["ecosia"],
  "Demo test Ecosia.org": function () {
    browser
      .url("https://www.ecosia.org/")
      .waitForElementVisible("body")
      .assert.titleContains("Ecosia")
      .assert.visible("input[type=search]")
      .sendKeys("input[type=search]", "nightwatch")
      .assert.visible("button[type=submit]")
      .click("button[type=submit]")
      .assert.containsText(".mainline-results", "Nightwatch.js")
      .end();
  },
};
