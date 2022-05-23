import { ReversePipe } from './reverse-value.pipe';
// expect  انتظار داشتن
// Isolated test case.
describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });
  it('olleh convert to hello ', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('olleh')).toBe('hello');
  });
});
