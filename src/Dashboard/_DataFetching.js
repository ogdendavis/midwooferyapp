const fetchFromDatabase = async (noun, method, appState) => {
  const { token, user } = appState;
  const reqDeets = {
    method,
    headers: { Authorization: `Bearer ${token}` },
  };
  const res = await fetch(`${process.env.API_BASE}/breeders/${user.id}/${noun}`, reqDeets);
  const data = res.status === 200 ? await res.json() : [];
  return data;
};

const db = {
  get: {
    dogs: (appState) => fetchFromDatabase('dogs', 'GET', appState),
    litters: (appState) => fetchFromDatabase('litters', 'GET', appState),
    breeder: (appState) => fetchFromDatabase('', 'GET', appState),
  },
};

export default db;
