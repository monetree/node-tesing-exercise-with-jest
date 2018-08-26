const googleSearch = require('./script');

dbMock = [
  'dogs.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com',
]

describe('googleSearch', () => {
  it('it is a silly test', () => {
    expect('hello').toBe('hello')
  })
  it('is running', () => {
  expect(googleSearch('dog', dbMock)).toExist;
  });
  it('is searching google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock)).toEqual(['dogs.com', 'dogpictures.com'])
  })
  it('work with undefined and null input', () => {
    expect(googleSearch(null, dbMock)).toEqual([]);
    expect(googleSearch(undefined, dbMock)).toEqual([]);
  })
  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  })

})
