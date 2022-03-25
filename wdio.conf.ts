export const config: WebdriverIO.Config = {
  specs: ["./test/**/*.ts"],
  capabilities: [
    {
      browserName: "chrome",
      maxInstances: 1,
    },
  ],
  framework: "Mocha",
  jasmineOpts: {
    defaultTimeoutInterval: 120000,
  },
  autoCompileOpts: {
    autoCompile: true,
    // for all available options
    tsNodeOpts: {
      transpileOnly: true,
      project: "tsconfig.json",
    },
  },
};
