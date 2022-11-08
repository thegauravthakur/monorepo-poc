module.exports.index = '// add code here';

module.exports.packageJSON = `{
  "name": "@gauravcodes/${process.argv[2].toLowerCase()}",
  "version": "0.0.1",
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "license": "MIT",
  "scripts": {
    "build": "rimraf dist && rollup -c --bundleConfigAsCjs"
  },
  "author": "Gaurav Thakur",
  "files": [
    "dist"
  ],
  "types": "dist/index.d.ts",
  "peerDependencies": {
    "react": "^18.1.0",
    "react-dom": "^18.1.0"
  }
}`;

module.exports.rollup = `import { getBaseConfig } from '../../shared/base.rollup';
const packageJson = require('./package.json');

export default getBaseConfig(packageJson.main, packageJson.module);
`;

module.exports.tsConfig = `{
  "extends": "../../shared/base.tsconfig.json",
}
`;
