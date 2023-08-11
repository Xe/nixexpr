const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

const { escape } = require("shescape");

function nix(strings, ...expressions) {
    let result = "";
    expressions.forEach((value, i) => {
        let formattedValue = `(builtins.fromJSON ${JSON.stringify(JSON.stringify(value))})`;
        result += `${strings[i]}${formattedValue}`;
    });

    result += strings[strings.length - 1]

    return result;
}

exports.expr = nix;

exports.nix = async (strings, ...expressions) => {
    const expr = nix(strings, ...expressions);
    const { stdout } = await exec(`nix eval --json --expr '${escape(expr)}'`);
    return JSON.parse(stdout)
}

