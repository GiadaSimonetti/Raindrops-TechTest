describe('Raindrops features test', () => {
  let raindrops

  beforeEach(() => {
    raindrops = new Raindrops();
  });

  it('returns `Pling` if the number has a factor of 3', () => {
    expect(raindrops.plingPlangPlong(3)).toEqual('Pling');
  });

  it('returns `Plang` if the number has a factor of 5', () => {
    expect(raindrops.plingPlangPlong(5)).toEqual('Plang');
  });

  it('returns `Plong` if the number has a factor of 7', () => {
    expect(raindrops.plingPlangPlong(7)).toEqual('Plong');
  });

  it('returns `PlingPlang` if the number has factors of 3 and 5', () => {
    expect(raindrops.plingPlangPlong(15)).toEqual('PlingPlang');
  });

  it('returns `PlingPlong` if the number has factors of 3 and 7', () => {
    expect(raindrops.plingPlangPlong(21)).toEqual('PlingPlong');
  });

  it('returns `PlangPlong` if the number has factors of 5 and 7', () => {
    expect(raindrops.plingPlangPlong(35)).toEqual('PlangPlong');
  });

  it('returns `PlingPlangPlong` if the number has factors of 3, 5 and 7', () => {
    expect(raindrops.plingPlangPlong(105)).toEqual('PlingPlangPlong');
  });
});
