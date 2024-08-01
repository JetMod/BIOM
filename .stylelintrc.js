module.exports = {
    extends: ["stylelint-config-recommended-scss",
              "stylelint-config-rational-order"],
    plugins: ["stylelint-order", "stylelint-scss"],
    rules: {
      "at-rule-no-unknown": null,
      "scss/at-rule-no-unknown": true,
    }
  };