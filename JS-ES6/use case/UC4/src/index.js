
// store values passed as parameter and cache them. Return the value from cache if same value is passed again, 
// otherwise return new value

const getValue = (_ => {
    const cache = new Map();
    const getValue = value => {
        if (cache.get(value)) {
            return `Value already cached ${cache.get(value)}`;
        }
        else {
            cache.set(value, value);
            return value;
        }
    }
    return getValue;
})();

