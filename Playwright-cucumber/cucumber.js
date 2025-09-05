const { SnippetsFormatter } = require("@cucumber/cucumber");

module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await", // to Generate Async function.
    },
    paths: ["src/tests/features/*.feature"], // Specifying the path of the feature file.
    dryRun: false, ///checking the stepdef are implemented or not.
    require: ["src/tests/steps/*.ts","libs/cworld.ts","hooks/myHooks.ts"],// Path of the steps defination file.
    requireModule: ["ts-node/register"], // Typescript script code is being executed.
    format:[
        'progress',
        "html:reports/cucumber-report.html"
    ],
    parallel:3,
    tags:"@smoke"
  },
};
