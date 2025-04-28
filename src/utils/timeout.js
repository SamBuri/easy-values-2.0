export const withTimeout = (promise, ms) => {
    const timeout = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error(`Operation timed out after ${ms}ms`));
      }, ms);
    });
  
    return Promise.race([promise, timeout]);
  };