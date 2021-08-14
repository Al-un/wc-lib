// Nothing here, mimicking test files

interface ShouldNotBeExported {
  text: 'wrong';
}

export const wrong: ShouldNotBeExported = { text: 'wrong' };
