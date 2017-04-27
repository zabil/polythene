/* global describe, it, expect */
import m from "mithril";
import { tidy, defaultHtmlTidyOptions } from "mithril-jest";
import { tests } from "./tests.js";
import { runSnapshots } from "../../scripts/snapshots";
import icon from "polythene-icon";

runSnapshots(tests);

describe("Icon component", () => {
  it("no options", () => {
    const cmp = m(icon);
    const html = tidy(cmp, {
      ...defaultHtmlTidyOptions,
      wrap: false,
      indent: false
    });
    expect(html).toContain("<div class=\"pe-icon pe-icon--regular    \"></div>");
  });
  it("option id", () => {
    const cmp = m(icon, {id: "id-x"});
    const html = tidy(cmp);
    expect(html).toContain("id=\"id-x\"");
  });
  it("option class", () => {
    const cmp = m(icon, {class: "class-x"});
    const html = tidy(cmp);
    expect(html).toContain("class-x\">");
  });
  it("option element", () => {
    const cmp = m(icon, {element: "span"});
    const html = tidy(cmp);
    expect(html).toContain("<span ");
    expect(html).toContain("</span>");
  });
  it("option before", () => {
    const cmp = m(icon, {before: m("span", "Before")});
    const html = tidy(cmp);
    expect(html).toContain("<span>Before</span>");
  });
  it("option after", () => {
    const cmp = m(icon, {after: m("span", "After")});
    const html = tidy(cmp);
    expect(html).toContain("<span>After</span>");
  });
});