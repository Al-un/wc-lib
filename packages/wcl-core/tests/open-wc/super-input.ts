import { expect, fixture } from '@open-wc/testing';

export const testSuperInput = (tagName: string) => {
  describe(`${tagName}`, () => {
    it('renders correctly', async () => {
      const el = await fixture(`<${tagName}>Plop</${tagName}>`);
      await expect((el as any).value).to.be.empty;
    });
  });
};
