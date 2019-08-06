/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs"
import LandingDecorator from "./landingDecorator";
// import "loki/configure-react";

addParameters({
  options: {
    panelPosition: "bottom"
  }
});
addDecorator(withKnobs);
addDecorator(LandingDecorator);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  const req = require.context("../src", true, /.stories.js$/);
  console.log(req);
  req.keys().forEach(req);
}

configure(loadStories, module);
