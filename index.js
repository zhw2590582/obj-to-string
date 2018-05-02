function objToString(obj) {
    switch (typeof obj) {
        case "undefined":
            return 'undefined';
        case "object":
            var type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
            switch (type) {
                case "null":
                    return 'null';
                case "array":
                    return '[' + obj.map(function (key) { return objToString(key); }).join(', ') + ']';
                case 'object':
                    return '{ ' + Object.keys(obj).map(function (key) { return key + ': ' + objToString(obj[key]); }).join(', ') + ' }';
                default:
                    return obj.toString();
            }
        default:
            return obj.toString();
    }
}
module.exports = objToString;
