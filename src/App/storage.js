const stringify = (i) => (typeof i === 'string' ? i : JSON.stringify(i));

// prettier-ignore
const formatForLocal = (val, expiry) => stringify({ value: stringify(val), expiry });

const parseFromLocal = (key) => {
  const localItem = JSON.parse(localStorage.getItem(key));
  if (localItem) {
    const isExpired = localItem.expiry
      ? Date.now() > Number(localItem.expiry)
      : false;
    return isExpired ? false : localItem.value;
  }
  return false;
};

const setLocal = (data, trust = false) => {
  // Accepts an object, sets localStorage values
  // Values persist for 30 minutes if user doesn't indicate device trust
  // Values persist indefinitely if user indicates device trust
  const ttl = 1800000; // 30 min in milliseconds
  const expiry = trust ? false : `${Date.now() + ttl}`;
  Object.keys(data).forEach((key) => {
    localStorage.setItem(key, formatForLocal(data[key], expiry));
  });
};

const getLocal = (keys = ['user', 'token']) => {
  // We know we should only have token and user in localStorage
  const retObj = {};
  keys.forEach((key) => {
    const localItem = parseFromLocal(key);
    if (localItem === false) {
      localStorage.removeItem(key);
    } else {
      retObj[key] = localItem;
    }
  });
  return retObj;
};

const clearLocal = () => {
  localStorage.clear();
};

export { setLocal, getLocal, clearLocal };
