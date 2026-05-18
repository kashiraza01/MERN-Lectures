# Week 4 Assignment — Build a Full React App (Wed–Thu, Submit Friday)

## Overview

In this assignment you will build a **complete, deployed React application** using a free fake/public API of your choice. The goal is to bring together everything you have learned across the JavaScript and React weeks — hooks, custom hooks, props, components, **React Router v6**, and **Redux Toolkit** — into one polished, working product. By the end you should have a deployed app, a clean GitHub repository, and a short walkthrough video that proves the app works and that you understand the code you wrote.

---

## Timeline

| Day | What you should be doing |
|-----|--------------------------|
| **Wednesday** | Pick your app option, scaffold the project with Vite, set up Router + Redux Toolkit, build core pages and the API fetch. |
| **Thursday**  | Finish Redux features (cart / favorites / saved items), search, filters, polish UI, write README, deploy. |
| **Friday (by 11:59 PM)** | Submit GitHub URL + Live URL + 2-minute walkthrough video. |
| **Monday** | I will evaluate your submission and conduct a short 1-on-1 review during the day. The **Mid-Term Practical Exam (2 hours)** also takes place on Monday. |

**Hard deadline: Friday 11:59 PM.** Late submissions lose 10 points per 12 hours.

---

## Choose ONE of Three App Options

You must pick **exactly one** of the three options below. All three are equal in difficulty and points — pick the one you find most interesting.

---

### Option A — Mini E-Commerce Store

Build a small shopping experience: browse products, view details, add to cart, see a checkout summary.

**APIs to use (pick one as primary):**
- `https://fakestoreapi.com/products`
- `https://dummyjson.com/products`

**Exact endpoints you will hit:**
- `GET https://dummyjson.com/products` — list all products
- `GET https://dummyjson.com/products/{id}` — single product
- `GET https://dummyjson.com/products/categories` — list categories
- `GET https://dummyjson.com/products/category/{categoryName}` — filter by category
- `GET https://dummyjson.com/products/search?q={query}` — search

**Sample response (truncated):**
```json
{
  "products": [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://...",
      "images": ["https://...", "https://..."]
    }
  ],
  "total": 100,
  "skip": 0,
  "limit": 30
}
```

**Required pages (routes):**
- `/` — Home with product grid
- `/products/:id` — Product details
- `/cart` — Shopping cart
- `/checkout` — Order summary (no real payment)
- `*` — 404 page

**Required features:**
- Cart managed in **Redux Toolkit** (`addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`)
- Category filter dropdown
- Search bar with debouncing
- Sort by price (low → high, high → low)
- Cart badge in navbar showing total item count

**UI screenshots to aim for:**
1. **Home grid:** 3–4 columns on desktop, 1 column on mobile, each card shows image, title, price, rating, and an "Add to Cart" button.
2. **Product detail:** Large image on the left, title + description + price + quantity selector + "Add to Cart" on the right.
3. **Cart page:** Vertical list of items with thumbnail, name, qty +/- buttons, remove button, and a sticky total at the bottom.

---

### Option B — Movie Discovery App

Build a movie browser: search movies, see details, save favorites.

**APIs to use (pick one):**
- **OMDb** (simpler, free key): `https://www.omdbapi.com/`
- **TMDB** (richer data): `https://api.themoviedb.org/3/`

**Exact endpoints you will hit (OMDb):**
- `GET https://www.omdbapi.com/?apikey={KEY}&s={query}&page={n}` — search
- `GET https://www.omdbapi.com/?apikey={KEY}&i={imdbID}&plot=full` — movie details
- `GET https://www.omdbapi.com/?apikey={KEY}&s={query}&y={year}&type=movie` — filter by year/type

**Sample response (truncated):**
```json
{
  "Search": [
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/..."
    }
  ],
  "totalResults": "457",
  "Response": "True"
}
```

> Get a free OMDb API key here: `https://www.omdbapi.com/apikey.aspx`. Store it in `.env` as `VITE_OMDB_KEY=...`.

**Required pages (routes):**
- `/` — Home with trending or search results
- `/movie/:id` — Movie details (plot, cast, ratings, poster)
- `/favorites` — Saved favorites list
- `*` — 404 page

**Required features:**
- Favorites managed in **Redux Toolkit** (`addFavorite`, `removeFavorite`, persist to `localStorage`)
- Search with **debouncing** (custom `useDebounce` hook)
- Filter by year and type (movie / series / episode)
- "Add to favorites" heart icon that toggles state
- Favorites count in navbar

**UI screenshots to aim for:**
1. **Search page:** Centered search bar at the top, results below as a poster grid with title and year on each card.
2. **Movie detail:** Two-column layout — poster on the left, full plot, IMDb rating, runtime, genre, actors on the right, with a big heart button to favorite.
3. **Favorites page:** Same grid style as search but only shows saved movies, each card has a "remove" X button on hover.

---

### Option C — Recipe Finder

Browse meals by category, search by ingredient, save favorite recipes.

**API to use (no key required):**
- `https://www.themealdb.com/api.php`

**Exact endpoints you will hit:**
- `GET https://www.themealdb.com/api/json/v1/1/categories.php` — all categories
- `GET https://www.themealdb.com/api/json/v1/1/filter.php?c={category}` — meals by category
- `GET https://www.themealdb.com/api/json/v1/1/filter.php?a={area}` — meals by area/cuisine
- `GET https://www.themealdb.com/api/json/v1/1/search.php?s={query}` — search by name
- `GET https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}` — search by ingredient
- `GET https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealId}` — full meal details

**Sample response (truncated):**
```json
{
  "meals": [
    {
      "idMeal": "52772",
      "strMeal": "Teriyaki Chicken Casserole",
      "strCategory": "Chicken",
      "strArea": "Japanese",
      "strInstructions": "Preheat oven to 350° F...",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/...",
      "strYoutube": "https://www.youtube.com/watch?v=...",
      "strIngredient1": "soy sauce",
      "strMeasure1": "3/4 cup"
    }
  ]
}
```

**Required pages (routes):**
- `/` — Home with all categories as cards
- `/category/:name` — Meals in a category
- `/meal/:id` — Meal details (ingredients, instructions, YouTube embed)
- `/saved` — Saved recipes
- `*` — 404 page

**Required features:**
- Saved recipes managed in **Redux Toolkit** (`saveRecipe`, `removeRecipe`, persist to `localStorage`)
- Filter by category AND by area (cuisine) via dropdown
- Search by ingredient using a separate input
- Ingredient list with measurements rendered as a clean table on the detail page
- Saved-count badge in navbar

**UI screenshots to aim for:**
1. **Home:** Grid of category cards, each with the official category thumbnail and name; clicking opens that category.
2. **Meal detail:** Hero image at the top, ingredients table on the left, instructions on the right, embedded YouTube video at the bottom.
3. **Saved recipes:** Compact list/grid of bookmarked meals with quick "open" and "remove" actions.

---

## Mandatory Technical Requirements

You must check off **every box** below (apart from optional bonuses). I will verify each item while grading.

### React Core
- [ ] Project bootstrapped with **Vite** (`npm create vite@latest`)
- [ ] At least **5 reusable components** (e.g., `Navbar`, `Card`, `Button`, `Loader`, `EmptyState`)
- [ ] Clean separation between **pages** (`src/pages/`) and **components** (`src/components/`)
- [ ] **Props** passed correctly and typed by usage (no unused props)
- [ ] At least **one custom hook** (e.g., `useFetch`, `useDebounce`, `useLocalStorage`)

### Hooks
- [ ] `useState` and `useEffect` used correctly (no infinite loops, complete dependency arrays)
- [ ] `useRef` used somewhere meaningful (focus an input, store previous value, scroll target, etc.)
- [ ] `useMemo` **or** `useCallback` used for at least one real optimization (with a code comment explaining why)

### Routing (React Router v6)
- [ ] At least **3 routes** plus a **404** route
- [ ] At least one **dynamic param route** (`/products/:id`, `/movie/:id`, `/meal/:id`) using `useParams`
- [ ] **Navigation** uses `<NavLink>` with active styling
- [ ] Programmatic navigation using `useNavigate` somewhere (e.g., after add-to-cart)

### Redux Toolkit
- [ ] At least **2 slices** (e.g., `productsSlice` + `cartSlice`)
- [ ] At least **1 `createAsyncThunk`** for the API call, handling **`pending` / `fulfilled` / `rejected`**
- [ ] State read with `useSelector`, actions dispatched with `useDispatch`
- [ ] Slice files contain only reducers + thunks — no UI logic

### JavaScript
- [ ] Uses `Array.prototype.map`, `filter`, and `reduce` meaningfully on data
- [ ] `async/await` with proper `try/catch/finally` for every API call
- [ ] ES modules with named and/or default exports — no global scripts

### UX
- [ ] **Loading** state for every API call (spinner or skeleton)
- [ ] **Error** state for every API call (friendly message, not a raw stack trace)
- [ ] **Empty** state when results are zero (e.g., "No movies match your search")
- [ ] Responsive layout (looks correct on a 360px mobile screen and a 1280px desktop)
- [ ] **Zero console errors and zero console warnings** in production build

### Docs
- [ ] `README.md` with: project name, description, screenshots, API used, run instructions, deployed link, and a one-paragraph "what I learned" section

---

## Bonus / Extra Credit (up to +10 points)

| Bonus | Points |
|-------|--------|
| Dark mode toggle persisted to `localStorage` | +3 |
| Pagination or infinite scroll on the listing page | +3 |
| A form (login / contact / checkout) with proper validation and error messages | +2 |
| Live deployed link working on Vercel or Netlify (this is also part of submission) | +2 |

---

## Submission Requirements

You must submit **all three** of these — missing any one results in a 30-point penalty.

1. **GitHub repository URL** (public, with all commits — not a single dump commit). The repo must contain a clear commit history showing your work spread across Wednesday and Thursday.
2. **Deployed live URL** on **Vercel** or **Netlify** (both have free instant deploys for Vite + React).
3. **2-minute Loom / screen-recording video** in which you:
   - Open the deployed app and use every feature
   - Open the code editor and explain **one component** and **one Redux slice** in your own words
   - State which API you used and what challenges you faced

Submit all three links in the Google Form / LMS by **Friday 11:59 PM**.

---

## Grading Rubric (100 points)

| Category | Points |
|----------|-------:|
| App runs with no errors | 10 |
| Component structure & reusability | 10 |
| Hooks usage (incl. custom hook) | 15 |
| React Router (routes, params, 404) | 10 |
| Redux Toolkit (slices + thunk) | 20 |
| API integration (loading / error / empty states) | 10 |
| UI / UX & responsiveness | 10 |
| Code quality (naming, no warnings) | 5 |
| README + deployment + video | 10 |
| **Total** | **100** |

> Bonus points (up to +10) are added on top.

---

## Academic Integrity

- **You may use** official docs (react.dev, redux-toolkit.js.org, MDN), Stack Overflow for specific bugs, and AI tools **only** to explain concepts you don't understand.
- **You may not** ask AI to generate the whole app, copy another student's code, or fork an existing tutorial repo and rename it.
- During the Monday 1-on-1 review, I will pick **2 random lines from your code** and ask you to explain them. If you cannot, that section's points are lost.
- Copy-paste from a tutorial or peer = **zero**. Honest 60% > dishonest 100%.

---

## Suggested 2-Day Schedule

### Wednesday

| Time | Task |
|------|------|
| Morning (2h) | Pick your option, sketch routes & components on paper, create Vite app, install `react-router-dom` + `@reduxjs/toolkit` + `react-redux`, set up folder structure. |
| Afternoon (3h) | Build `Navbar` + `Home` page. Wire up the API fetch in a `productsSlice` (or equivalent) using `createAsyncThunk`. Display the list with loading / error states. |
| Evening (3h) | Build the **details page** with a dynamic route. Pass props from list to detail. Verify navigation works. |

### Thursday

| Time | Task |
|------|------|
| Morning (3h) | Build the **second slice** (cart / favorites / saved). Wire up add / remove / clear actions. Add the count badge to navbar. |
| Afternoon (3h) | Add **search**, **filter**, and (where relevant) **sort**. Implement at least one **custom hook** (e.g., `useDebounce`). Add `useMemo`/`useCallback` somewhere meaningful. |
| Evening (3h) | Polish styling, make it responsive, fix console warnings, write `README.md`, take screenshots, deploy to Vercel/Netlify, push final commits. |

### Friday Morning Before Submission
- Open the deployed URL in an incognito window — does it work?
- Open DevTools console — zero red errors?
- Try every route + every button — does anything crash?
- Record your 2-minute video.
- Submit the three links.

---

## FAQ

**Q1: Can I use Tailwind CSS, Bootstrap, or Material UI?**
Yes. You may use Tailwind, Bootstrap, MUI, Chakra, or plain CSS / CSS Modules. **You may not** use a pre-built admin template — the layout and components must be your own.

**Q2: Can I use a starter template from GitHub?**
No. Start from `npm create vite@latest`. Anything beyond that should be code you wrote (or installed as an `npm` package).

**Q3: What if the API is down on Friday?**
The three suggested APIs are very stable. Still — once you fetch data, you can keep a JSON file in `src/data/fallback.json` and read it if the API errors. This is a great place to use the `rejected` state of your thunk.

**Q4: Can I use TypeScript?**
Yes, if you're comfortable. JavaScript is the default and what the rubric expects, but TS does not lose any points if it's used correctly.

**Q5: Do I need to handle authentication / login?**
No. None of the three options require auth. If you add a fake login as a bonus form, that counts toward the +2 bonus.

**Q6: Where do I deploy?**
- **Vercel:** `https://vercel.com` — import the GitHub repo, click deploy. Done in ~60 seconds for a Vite app.
- **Netlify:** `https://app.netlify.com/start` — same drag-and-drop or Git import flow.
- Both are free and require no credit card.

**Q7: Can I work in a team?**
No. This is an individual assignment. You may discuss approaches with classmates, but the code in your repo must be 100% yours.
