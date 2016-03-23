describe('Favorite Food Filter', function () {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
  }));

  it('should filter on favorite food correctly', function () {
    var people = [{
      name: 'Shana',
      favoriteFood: 'Pizza'
    }, {
      name: 'Mary',
      favoriteFood: 'Sushi'
    }, {
      name: 'Angela',
      favoriteFood: 'Cake'
    }];

    var favs = $filter('favoriteFood')(people, 'Pizza');

    expect(favs.length).toBe(1);
    expect(favs[0].name).toBe('Shana');
  });
});