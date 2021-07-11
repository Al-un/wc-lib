import { expect, fixture } from '@open-wc/testing';

export const testSuperInput = (tagName: string): void => {
  describe(`${tagName}`, () => {
    it('passes accessibility test', async () => {
      const el = await fixture(`<${tagName} label="plop">Plop</${tagName}>`);
      await expect(el).to.be.accessible();
    });
  });
};
