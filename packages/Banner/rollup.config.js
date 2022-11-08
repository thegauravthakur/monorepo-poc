import { getBaseConfig } from '../../shared/configurations/base.rollup';
const packageJson = require('./package.json');

export default getBaseConfig(packageJson.main, packageJson.module);
