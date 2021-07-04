import { expect, fixture } from '@open-wc/testing';
import './super-lit-ts-card';

describe('super-lit-ts-card', () => {
  it('renders correctly', async () => {
    const el = await fixture('<super-lit-ts-card>Plop</super-lit-ts-card>');
    expect(el.textContent).to.equal('Plop');
  });
});
