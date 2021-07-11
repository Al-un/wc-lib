// ============================================================================
//  Lit-element library specific helpers
// ============================================================================

import { PropertyDeclaration } from 'lit';

/**
 * Convert a raw properties interface into a Lit properties declaration
 * type
 */
export type LitPropsDeclaration<PropDef> = {
  [propKey in keyof PropDef]: PropertyDeclaration;
};
