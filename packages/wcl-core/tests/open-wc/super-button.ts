import { expect, fixture, oneEvent } from '@open-wc/testing';

export const testSuperButton = (tagName: string) => {
  describe(`${tagName}`, () => {
    it('passes accessibility test', async () => {
      const el = await fixture(`<${tagName}>Plop</${tagName}>`);
      await expect(el).to.be.accessible();
    });

    it('prout', async () => {
      const el = await fixture(`<${tagName}>Plop</${tagName}>`);
      const btn = el.shadowRoot?.querySelector('button');
      expect(btn?.classList.contains('primary')).to.true;
    });

    it('prout', async () => {
      const el = await fixture(`<${tagName}>Plop</${tagName}>`);
      setTimeout(() => (el as HTMLElement).click());

      const ev = await oneEvent(el, 'click');
      expect(ev).to.exist;
    });

    it('prout', async () => {
      const el = await fixture(`<${tagName} theme="danger">Plop</${tagName}>`);
      const btn = el.shadowRoot?.querySelector('button');

      expect(btn?.classList.contains('primary')).to.false;
      expect(btn?.classList.contains('danger')).to.true;
    });
  });
};
