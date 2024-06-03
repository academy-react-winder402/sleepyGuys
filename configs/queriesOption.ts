export const queriesOptions = {
  defaultOptions: {
    queries: {
      retryDelay: (attemptIndex: number) =>
        Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
};
