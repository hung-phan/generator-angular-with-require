exports.config = {
    seleniumPort: null,
    baseUrl: 'http://localhost:9000',
    rootElement: 'html',
    capabilities: {
        'browserName': 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true
    },
    specs: ['../test/e2eSpecs/*.e2espec.js*']
};
