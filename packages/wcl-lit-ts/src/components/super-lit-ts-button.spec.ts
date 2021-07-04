import { expect, fixture } from '@open-wc/testing';
import './super-lit-ts-button';

describe('super-lit-ts-button', () => {
  it('renders correctly', async () => {
    const el = await fixture('<super-lit-ts-button>Plop</super-lit-ts-button>');
    expect(el.textContent).to.equal('Plop');
  });

  it('prout', async () => {
    const el = await fixture('<super-lit-ts-button>Plop</super-lit-ts-button>');
    const btn = el.shadowRoot?.querySelector('button');

    expect(btn?.classList.contains('primary')).to.true;
  });

  it('prout', async () => {
    const el = await fixture(
      '<super-lit-ts-button theme="danger">Plop</super-lit-ts-button>'
    );
    const btn = el.shadowRoot?.querySelector('button');

    expect(btn?.classList.contains('primary')).to.false;
    expect(btn?.classList.contains('danger')).to.true;
  });
});
