import { expect, fixture } from '@open-wc/testing';

export const testSuperMemoList = (tagName: string) => {
  describe(`${tagName}`, () => {
    it('renders correctly', async () => {
      const el = await fixture(`<${tagName}>Plop</${tagName}>`);
      await expect(el.innerHTML).to.be.not.empty;
    });
  });
};
