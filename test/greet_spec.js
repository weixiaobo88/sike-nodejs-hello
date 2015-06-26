var greet = require('../index');

describe('greet', function() {
  it('should greet a person by name', function() {
    expect(greet('Linne')).to.eql('Hello, Linne');
  });

  it('should greet a person flirtatiously if drunk', function() {
    expect(greet('Linne', true)).to.eql('Hello Linne, you look sexy today');
  });
});
