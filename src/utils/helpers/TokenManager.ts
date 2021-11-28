//Note: use localstorage for now,
//better not use localstorage if posible

const TokenManager = () => {
  let inMemoryJWT: string | null = null;

  const storage = "token";

  const getToken = () =>
    inMemoryJWT || window.localStorage.getItem(storage) || null;

  const setToken = (token: string) => {
    inMemoryJWT = token;
    window.localStorage.setItem(storage, token);
    return true;
  };

  const ereaseToken = () => {
    inMemoryJWT = null;
    window.localStorage.removeItem(storage);
    return true;
  };

  return {
    ereaseToken,
    getToken,
    setToken,
  };
};

export default TokenManager();
