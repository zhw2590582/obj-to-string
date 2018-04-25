declare var module:any;

function objToString(obj: any): string {
  switch (typeof obj) {
    case "undefined":
        return 'undefined';
    case "object":
        let type: string = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
        switch (type) {
            case "null":
                return 'null';
            case "array":
                return '[' + obj.map(key => objToString(key)).join(', ') + ']';
            case 'object':
                return '{ ' + Object.keys(obj).map(key => key + ': ' + objToString(obj[key])).join(', ') + ' }';
            default:
                try {
                  return obj.toString();
                } catch (e) {
                  return '[Unknown type: ' + type + ']';
                }
        }
    default:
        return obj.toString();
  }
}

module.exports = objToString;