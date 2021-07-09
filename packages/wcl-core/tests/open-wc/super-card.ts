import { expect, fixture } from '@open-wc/testing';

export const testSuperCard = (tagName: string) => {
  describe(`${tagName}`, () => {
    it('renders correctly', async () => {
      const el = await fixture(`<${tagName}>Plop</${tagName}>`);
      expect(el.textContent).to.equal('Plop');
    });
  });
};
