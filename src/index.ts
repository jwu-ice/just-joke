import constants = require("./constants");

const { API_URL, CATEGORIES } = constants;

/**
Get a random joke including chuck norris api [Api link](https://api.chucknorris.io/)

@param undefined - Get a random joke
@param category - Get a random joke from category
@returns A random joke string

@example
```
import { getJoke, category } from "just-joke";

// Get a random joke
const joke = getJoke();

// Get a random joke, using category
const targetJoke = getJoke(category[0]);
```
*/
const getJoke = async (category: (typeof CATEGORIES)[number]) => {
  if (category) {
    const targetUrl = category.replace("{category}", category);
    const res = await fetch(targetUrl);
    const { value } = await res.json();
    return value;
  }

  const res = await fetch(API_URL.CHUCK_NORRIS);
  const { value } = await res.json();
  return value;
};

export = getJoke;
