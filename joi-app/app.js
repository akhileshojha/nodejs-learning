const Joi = require("joi");
//Joi is a powerful schema description language and data validator for JavaScript.

const schema = Joi.object({
    name: Joi.string().min(3).required(),
    age: Joi.number().integer().min(1).max(100).required(),
});
const result = schema.validate({ name: "Akhilesh", age: 35 });

if(result.error) {
    console.log("Validation error:", result.error.details);
} else {
    console.log("Validation successful:", result.value);
}