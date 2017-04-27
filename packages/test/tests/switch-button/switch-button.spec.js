/* global describe, it, expect */
import m from "mithril";
import { tidy, defaultHtmlTidyOptions } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
import switchButton from "polythene-switch-button";

runSnapshots(tests);

describe("Switch button component", () => {
  it("no options", () => {
    const cmp = m(switchButton);
    const html = tidy(cmp, {
      ...defaultHtmlTidyOptions,
      wrap: false,
      indent: false
    });
    expect(html).toContain("<label class=\"pe-control__form-label\">");
  });
  it("option name", () => {
    const cmp = m(switchButton, {name: "name-x"});
    const html = tidy(cmp);
    expect(html).toContain("name=\"name-x\"");
  });
  it("option id", () => {
    const cmp = m(switchButton, {id: "id-x"});
    const html = tidy(cmp);
    expect(html).toContain("id=\"id-x\"");
  });
  it("option class", () => {
    const cmp = m(switchButton, {class: "class-x"});
    const html = tidy(cmp);
    expect(html).toContain("class-x\">");
  });
  it("option element", () => {
    const cmp = m(switchButton, {element: "span"});
    const html = tidy(cmp);
    expect(html).toContain("<span ");
    expect(html).toContain("</span>");
  });
  it("option tabindex", () => {
    const cmp = m(switchButton, {tabindex: 3});
    const html = tidy(cmp);
    expect(html).toContain("tabindex=\"3\"");
  });
});