import { expect, fixture } from '@open-wc/testing';

export const testSuperMemoItem = (tagName: string): void => {
  describe(`${tagName}`, () => {
    it('passes accessibility test', async () => {
      const el = await fixture(`<${tagName}>Plop</${tagName}>`);
      await expect(el).to.be.accessible();
    });
  });
};
