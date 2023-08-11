const { nix } = require("../index.js");
const assert = require('assert');

describe("nix", () => {
    describe("basic string", () => {
        it("should construct basic strings", async () => {
            const there = "foo";
            assert.equal(
                await nix`let hi = ${there}; in hi`,
                there,
            );
        })
        it("should construct objects", async () => {
            assert.equal(
                JSON.stringify(await nix`let hi = ${"there"}; in { greeting = hi; }`),
                JSON.stringify({ greeting: "there" }),
            );
        })
    });
});
