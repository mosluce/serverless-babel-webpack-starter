module.exports.polyfill = function (file) {
    if (typeof file === 'string') {
        return ['babel-polyfill', file];
    }

    if (file instanceof Array) {
        file.unshift('babel-polyfill');
        return file;
    }

    return file;
};