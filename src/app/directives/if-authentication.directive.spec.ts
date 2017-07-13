import { IfAuthenticationDirective } from './if-authentication.directive';

describe('IfAuthenticationDirective', () => {
  it('should create an instance', () => {
    const directive = new IfAuthenticationDirective(this.instanse, this.instanse);
    expect(directive).toBeTruthy();
  });
});
