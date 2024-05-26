const Form = require("./Form");
const FormData = require("./FormData");



Form.hasMany(FormData,{
    foreignKey: "title",
})

FormData.belongsTo(Form, {
    foreignKey: "formTitle",
})


module.exports = {Form, FormData}