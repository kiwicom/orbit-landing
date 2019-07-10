module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "@kiwicom/eslint-config",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  parser: "babel-eslint",
  plugins: ["import", "flowtype","prettier", "jest", "react-hooks"]
};
