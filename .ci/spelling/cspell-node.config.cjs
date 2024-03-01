/* https://github.com/streetsidesoftware/cspell/issues/3215#issuecomment-1181992508 */
const fs = require('fs');
const path = require('path');

/**
 * Search for `package.json`
 * @param {string} from - search `from` directory.
 * @returns {string} - path to package.json
 */
function findNearestPackageJson(from) {
    from = path.resolve(from);
    const parent = path.dirname(from);
    if (!from || parent === from) {
        return;
    }

    const pkg = path.join(from, 'package.json');
    if (fs.existsSync(pkg)) {
        return pkg;
    }
    return findNearestPackageJson(parent);
}

/**
 * Load the nearest package.json
 * @param {string} cwd
 * @returns
 */
function loadPackage(cwd) {
    const pkgFile = findNearestPackageJson(cwd);
    console.log('found: %o', pkgFile);
    if (!pkgFile) return;
    return JSON.parse(fs.readFileSync(pkgFile, 'utf-8'));
}

function determinePackageNamesAndMethods(cwd = process.cwd()) {
    const pkg = loadPackage(cwd) || {};
    const packageNames = Object.keys(pkg.dependencies || {}).concat(Object.keys(pkg.devDependencies || {}));
    const setOfWords = new Set(packageNames.flatMap((name) => name.replace(/[@]/g, '').split('/')));
    const words = [...setOfWords];
    return {
        words
    };
}

module.exports = {
    words: determinePackageNamesAndMethods().words,
};