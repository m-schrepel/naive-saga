"use strict";

const test = require("tape");

test("Failing test", t => {
    t.equal(false, true);
    t.end();
});

test("succeeding test", t => {
    t.equal(true, true);
    t.end();
});
