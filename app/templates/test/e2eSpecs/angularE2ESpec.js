describe('should do sth useful than this', function() {
    var ptor = protractor.getInstance();
    it('should have class plain', function() {
        ptor.get('/#');
        expect(ptor.getTitle()).toBe('generator-angular-with-require');
    });
});
