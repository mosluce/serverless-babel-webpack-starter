module.exports.polyfill = function (path) {
    if (typeof path === 'string') {
        return ['babel-polyfill', path];
    }

    if (path instanceof Array) {
        path.unshift('babel-polyfill');
        return path;
    }

    return path;
};