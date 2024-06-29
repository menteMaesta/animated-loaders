export const waitForTimeout = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
