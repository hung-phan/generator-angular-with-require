define(['angular-mocks', '<%= name %>'], function() {
    describe('controller title', function() {
        var <%= uppercaseName %>Service;
        beforeEach(module('<%= name %>Module'));
        beforeEach(inject(function(_<%= useminPrepare %>Service_) {
            <%= uppercaseName %>Service = _<%= uppercaseName %>Service_;
        }));

        it('should be equal dummy', function() {
            expect(<%= uppercaseName %>Service()).toEqual('Hello world');
        });
    });
});
