import { LimitStringLengthPipe } from './limit-string-length.pipe';

describe('LimitStringLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new LimitStringLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
