import { getBaseConfig } from '../../shared/base.rollup';
const packageJson = require('./package.json');

export default getBaseConfig(packageJson.main, packageJson.module);
