import { expect, fixture } from '@open-wc/testing';

export const testSuperCard = (tagName: string): void => {
  describe(`${tagName}`, () => {
    it('passes accessibility test', async () => {
      const el = await fixture(`<${tagName}>Plop</${tagName}>`);
      await expect(el).to.be.accessible();
    });

    it('renders and matches snapshot', async () => {
      const el = await fixture(`<${tagName}>Plop</${tagName}>`);
      expect(el).shadowDom.to.equalSnapshot();
    });
  });
};
