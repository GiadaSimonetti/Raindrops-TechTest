describe('Raindrops features test', () => {
  let raindrops

  beforeEach(() => {
    raindrops = new Raindrops();
  });

  it('returns `Pling` if the number has a factor of 3', () => {
    expect(raindrops.plingPlangPlong(3)).toEqual('Pling');
  })

  it('returns `Plang` if the number has a factor of 5', () => {
    expect(raindrops.plingPlangPlong(5)).toEqual('Plang');
  })
});
