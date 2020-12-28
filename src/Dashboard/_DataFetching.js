// TEMP to randomize dog pics
import icon1 from '../assets/dogIcons/afghan.jpg';
import icon2 from '../assets/dogIcons/beagle.jpg';
import icon3 from '../assets/dogIcons/malamute.jpg';
import icon4 from '../assets/dogIcons/poodle.jpg';
import icon5 from '../assets/dogIcons/spaniel.jpg';
import icon6 from '../assets/dogIcons/terrier.jpg';
// END TEMP

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

// TEMP to randomize dog pics
const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
const dogsWithImages = async (appState) => {
  const dogs = await fetchFromDatabase('dogs', 'GET', appState);
  return dogs.map((d) => ({
    ...d,
    image: icons[Math.floor(Math.random() * dogs.length)],
  }));
};
// END TEMP

const db = {
  get: {
    dogs: (appState) => dogsWithImages(appState),
    litters: (appState) => fetchFromDatabase('litters', 'GET', appState),
    breeder: (appState) => fetchFromDatabase('', 'GET', appState),
  },
};

export default db;
