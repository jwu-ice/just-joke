import { API_URL, categoryType } from "./constants";

const { CHUCK_NORRIS, CHUCK_NORRIS_CATEGORY } = API_URL;
const getJoke = async (category?: categoryType) => {
  if (category) {
    const targetUrl = CHUCK_NORRIS_CATEGORY.replace("{category}", category);
    const res = await fetch(targetUrl);
    const { value } = await res.json();
    return value;
  }

  const res = await fetch(CHUCK_NORRIS);
  const { value } = await res.json();
  return value;
};
export { getJoke };
