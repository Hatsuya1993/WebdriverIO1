export const config: WebdriverIO.Config = {
  runner: 'local',
  specs: ["./test/specs/**/*.ts"],
  capabilities: [
    {
      browserName: "chrome",
      maxInstances: 1,
    },
  ],
  logLevel: 'info',
  framework: "mocha",
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
