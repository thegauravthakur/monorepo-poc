const { index, packageJSON, rollup, tsConfig } = require('./boilderplate');

const files = {
    'src/index.tsx': index,
    'tsconfig.json': tsConfig,
    'package.json': packageJSON,
    'rollup.config.js': rollup,
};

const fs = require('fs-extra');

const writeToPath = (path, content) => {
    fs.outputFile(path, content, (err) => {
        if (err) throw err;
        console.log('Created file: ', path);
        return true;
    });
};

Object.keys(files).forEach((key) => {
    const component = process.argv[1];
    if (!component || typeof component !== 'string')
        throw new Error('pass valid package name');
    writeToPath(`packages/${process.argv[2]}/${key}`, files[key]);
});
