import { PrivilegeFilterPipe } from './privilege-filter.pipe';

describe('PrivilegeFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new PrivilegeFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
