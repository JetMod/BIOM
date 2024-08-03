module.exports = {
    extends: [
            "stylelint-config-standard",
            "@stylistic/stylelint-config",
              "stylelint-config-recommended-scss",
              "stylelint-config-rational-order"],
    plugins: ["@stylistic/stylelint-plugin","stylelint-order", "stylelint-scss"],
    rules: {
      "at-rule-no-unknown": null,
      "scss/at-rule-no-unknown": true,
    }
  };