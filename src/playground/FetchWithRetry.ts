const fetchWithTimeout = (timeout: number): Promise<Response> => {
  return new Promise((res, rej) => {
    const ac = new AbortController();
    const timeoutId = setTimeout(() => {
      ac.abort();
    }, timeout);

    fetch("someurl", { signal: ac.signal })
      .then((response) => res(response))
      .catch((error) => rej(error))
      .finally(() => clearTimeout(timeoutId));
  });
};

const fetchWithRetryAndTimeout = (
  numberOfAttempts: number,
  timeout: number,
) => {
  let attemptsLeft = numberOfAttempts;

  return new Promise(async (res, rej) => {
    while (attemptsLeft > 0) {
      try {
        const response = await fetchWithTimeout(timeout);
        if (response.ok) {
          res(await response.json());
        } else {
          attemptsLeft--;
        }
      } catch (err) {
        attemptsLeft--;
        if (attemptsLeft === 0) rej(err);
      }
    }
  });
};
