describe('Raindrops features test', () => {
  let raindrops;

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
    expect(raindrops.plingPlangPlong(3 * 5)).toEqual('PlingPlang');
  });

  it('returns `PlingPlong` if the number has factors of 3 and 7', () => {
    expect(raindrops.plingPlangPlong(3 * 7)).toEqual('PlingPlong');
  });

  it('returns `PlangPlong` if the number has factors of 5 and 7', () => {
    expect(raindrops.plingPlangPlong(5 * 7)).toEqual('PlangPlong');
  });

  it('returns `PlingPlangPlong` if the number has factors of 3, 5 and 7', () => {
    expect(raindrops.plingPlangPlong(3 * 5 * 7)).toEqual('PlingPlangPlong');
  });

  it('returns the number if the number has not a factor of 3 or 5 or 7', () => {
    expect(raindrops.plingPlangPlong(8)).toEqual('8');
  });

  it('returns `PlingPlung` if the number has factor of 9', () => {
    expect(raindrops.plingPlangPlong(9)).toEqual('PlingPlung');
  });
});
