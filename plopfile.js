module.exports = function (plop) {
    // component generator
    plop.setGenerator("component", {
        description: "React component generator",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "component name please",
            },
        ],
        actions: [
            {
                type: "addMany",
                destination: "src/components/{{pascalCase name}}",
                templateFiles: "plop/components/*.hbs",
                base: "plop/components",
            },
        ],
    });
};