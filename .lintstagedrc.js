const path = require("path");

const buildEslintCommand = filenames =>
    `next lint --fix --file ${filenames
        .map(f => path.relative(process.cwd(), f))
        .join(" --file ")}`;

module.exports = {
    "{app,components,lib}/*.{js,jsx,ts,tsx}": [buildEslintCommand],
    "*.{ts,tsx}": [buildEslintCommand],
    "*.{js,json,css,scss,html,md}": ["prettier --write"],
    // clean up markdown and json files
    "content/**/*.(md|json)": filenames =>
        `pnpm prettier --write ${filenames.join(" ")}`,
};
