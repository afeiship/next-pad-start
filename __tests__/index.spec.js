(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.padStart', function () {
      expect(nx.padStart('abc', 3, '0')).toBe('abc');
      expect(nx.padStart('abc', 5, '0')).toBe('00abc');
    });
  });
})();
