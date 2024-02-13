const prepareMsw = async () => {
  if (
    import.meta.env.MODE === 'development' &&
    import.meta.env.VITE_APP_MSW_ENABLED
  ) {
    const worker = await import('../../../mocks/worker');
    worker.default.start({ onUnhandledRequest: 'bypass' });
  }

  return Promise.resolve();
};

export default prepareMsw;
