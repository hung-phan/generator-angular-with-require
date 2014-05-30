describe('home page title', function() {
    var ptor = protractor.getInstance();
    it('should be <%= _.slugify(appname) %>', function() {
        ptor.get('/#');
        expect(ptor.getTitle()).toBe('<%= _.slugify(appname) %>');
    });
});
