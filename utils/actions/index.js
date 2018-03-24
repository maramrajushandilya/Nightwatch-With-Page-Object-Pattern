module.exports = {
  clickLabel: (actionName, context) => {
    context.clickElement('@label', actionName, context);
  },
};
