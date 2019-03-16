/**
 * Checks if the given repository exists with the 
 * required property in it
 * @param objectRepository object repository
 * @param propertyName required property name
 * @returns {*}
 * @throws {TypeError} Missing property
 */
function requireOption(objectRepository, propertyName) {
    if (objectRepository && objectRepository[propertyName]) {
        return objectRepository[propertyName];
    }
    throw new TypeError(propertyName + ' required');
}

module.exports.requireOption = requireOption;