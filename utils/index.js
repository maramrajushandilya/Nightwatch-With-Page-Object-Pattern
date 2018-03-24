const _ = require('lodash');

module.exports = {
  clickElement: (selector, selectorName, actions) => {
    actions
      .waitForElementPresent(selector, 20000)
      .click(selector)
      .afterHook(selectorName, actions);
    return this;
  },
  clearElement: (selector, selectorName, actions) => {
    actions
      .waitForElementPresent(selector, 20000)
      .clearValue(selector)
      .afterHook(selectorName, actions);
    return this;
  },
  fillText: (selector, selectorName, actions, text) => {
    actions
      .waitForElementPresent(selector, 20000)
      .clearValue(selector)
      .setValue(selector, text)
      .afterHook(selectorName, actions);
    return this;
  },
  afterHook: (actionName, actions) => {
    const saveScreenshot = _.get(actions, 'api.saveScreenshot');
    saveScreenshot(`./reports/screenshots/${actionName}.png`);
    return actions;
  },
};
