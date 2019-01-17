export function processValidationServerError(errors) {
    console.log(errors);
    let data = {};
    errors.forEach(function (element) {
        data[element.field] = element.message;
    });
    console.log(data);
    return data;
}