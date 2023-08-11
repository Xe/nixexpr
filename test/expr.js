const { expr } = require("../index.js");
const assert = require('assert');

describe("expr", () => {
    describe("basic string", () => {
        it("should construct basic strings", () => {
            assert.equal(
                expr`let hi = ${"there"}; in hi`,
                "let hi = (builtins.fromJSON \"\\\"there\\\"\"); in hi",
            );
        })
        it("should construct objects", () => {
            assert.equal(
                expr`let hi = ${"there"}; in { greeting = hi; }`,
                "let hi = (builtins.fromJSON \"\\\"there\\\"\"); in { greeting = hi; }",
            );
        })
    });
});
