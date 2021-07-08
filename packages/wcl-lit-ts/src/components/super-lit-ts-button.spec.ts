import { expect, fixture, oneEvent, waitUntil } from '@open-wc/testing';
import './super-lit-ts-button';
import { SuperLitTsButton } from './super-lit-ts-button';

type ElementClass = SuperLitTsButton;
const elementTag = `super-lit-ts-button`;

describe(`${elementTag}`, () => {
  it('renders correctly', async () => {
    const el = await fixture<ElementClass>(
      `<${elementTag}>Plop</${elementTag}>`
    );
    expect(el.textContent).to.equal('Plop');
  });

  it('prout', async () => {
    const el = await fixture<ElementClass>(
      `<${elementTag}>Plop</${elementTag}>`
    );
    const btn = el.shadowRoot?.querySelector('button');
    expect(btn?.classList.contains('primary')).to.true;
  });

  it('prout', async () => {
    const el = await fixture<ElementClass>(
      `<${elementTag}>Plop</${elementTag}>`
    );
    setTimeout(() => el.click());

    const ev = await oneEvent(el, 'click');
    expect(ev).to.exist;
  });

  it('prout', async () => {
    const el = await fixture<ElementClass>(
      `<${elementTag} theme="danger">Plop</${elementTag}>`
    );
    const btn = el.shadowRoot?.querySelector('button');

    expect(btn?.classList.contains('primary')).to.false;
    expect(btn?.classList.contains('danger')).to.true;
  });
});
