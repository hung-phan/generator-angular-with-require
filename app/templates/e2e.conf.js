exports.config = {
    seleniumPort: null,
    baseUrl: 'http://localhost:9000',
    rootElement: 'html',
    onPrepare: function() {
        // implicit and page load timeouts
        browser.manage().timeouts().pageLoadTimeout(40000);
        browser.manage().timeouts().implicitlyWait(25000);

        // for non-angular page
        browser.ignoreSynchronization = true;
        // sign in before all tests
    },
    capabilities: {
        'browserName': 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true
    },
    specs: ['../test/e2eSpecs/*.e2espec.js*']
};
