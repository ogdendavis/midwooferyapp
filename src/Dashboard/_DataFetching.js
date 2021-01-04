// TEMP to randomize dog pics
import icon1 from '../assets/dogIcons/afghan.jpg';
import icon2 from '../assets/dogIcons/beagle.jpg';
import icon3 from '../assets/dogIcons/malamute.jpg';
import icon4 from '../assets/dogIcons/poodle.jpg';
import icon5 from '../assets/dogIcons/spaniel.jpg';
import icon6 from '../assets/dogIcons/terrier.jpg';
// END TEMP

const sendQuery = async ({ route, payload, headers }) => {
  // Make sure route has leading slash and add API base
  // prettier-ignore
  const fullRoute = route.charAt(0) === '/'
    ? `${process.env.API_BASE}${route}`
    : `${process.env.API_BASE}/${route}`;
  // Add token from stored app state to the payload
  const { token } = JSON.parse(localStorage.getItem('appState'));
  const fullPayload = {
    ...payload,
    headers: {
      ...headers,
      Authorization: `Bearer: ${token}`,
    },
  };
  // Send the query
  const res = await fetch(fullRoute, fullPayload);
  // If query response has success code, return it!
  if ([200, 201].includes(res.status)) {
    const data = await res.json();
    return data;
  }
  // If no success, return false
  return false;
};

const fetchAllFromDatabase = async (noun) => {
  // Get user object from localStorage
  const { user } = JSON.parse(localStorage.getItem('appState'));
  // Build route to fetch all of the user's things
  const route = `/breeders/${user.id}/${noun}`;
  const payload = { method: 'GET' };
  // Send query and return response
  return sendQuery({ route, payload });
};

const updateOneInDatabase = async (noun, id, update) => {
  const payload = {
    method: 'PUT',
    body: JSON.stringify(update),
  };
  const headers = {
    'Content-Type': 'application/json',
  };
  const route = `/${noun}s/${id}`;
  return sendQuery({ route, payload, headers });
};

// TEMP to randomize dog pics
const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
const dogsWithImages = async () => {
  // Get the dogs
  const dogs = await fetchAllFromDatabase('dogs');
  // Insert images
  const dogsImaged = dogs.map((d) => ({
    ...d,
    image: icons[Math.floor(Math.random() * dogs.length)],
  }));
  // Sort by alpha and return
  return dogsImaged.sort((a, b) => (a.name < b.name ? -1 : 1));
};
// END TEMP

const db = {
  get: {
    dogs: () => dogsWithImages(),
    litters: () => fetchAllFromDatabase('litters'),
    breeder: () => fetchAllFromDatabase(''),
  },
  update: {
    dog: ({ id, update }) => updateOneInDatabase('dog', id, update),
    litter: ({ id, update }) => updateOneInDatabase('litter', id, update),
    breeder: ({ id, update }) => updateOneInDatabase('breeder', id, update),
  },
};

export default db;
