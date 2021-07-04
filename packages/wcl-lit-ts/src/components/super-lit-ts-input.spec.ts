import { expect, fixture } from '@open-wc/testing';
import './super-lit-ts-input';
import { SuperLitTsInput } from './super-lit-ts-input';

describe('super-lit-ts-input', () => {
  it('renders correctly', async () => {
    const el: SuperLitTsInput = await fixture(
      '<super-lit-ts-input></super-lit-ts-input>'
    );
    await expect(el.value).to.be.empty;
  });
});
