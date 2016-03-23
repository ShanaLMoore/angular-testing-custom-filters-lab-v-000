describe('removeAllVowels filter', function () {
    var $controller, removeAllVowels;
 
    beforeEach(module('app'));
 
    beforeEach(inject(function ($filter) {
        removeAllVowels = $filter('removeAllVowels');
    }));
 
    it('remove all vowels from a string', function () {
        expect(removeAllVowels('test')).toEqual('tst');
    });
});