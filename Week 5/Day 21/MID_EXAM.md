# Mid-Term Practical Exam — React + Redux + Router (2 hours)

## Format & Rules

| Item | Detail |
|------|--------|
| **Duration** | 2 hours (120 minutes), strictly enforced |
| **Mode** | Individual, in-class, laptop-based |
| **Total points** | 100 |
| **Passing score** | 50 |

### Allowed
- Official documentation: [react.dev](https://react.dev), [redux-toolkit.js.org](https://redux-toolkit.js.org), [reactrouter.com](https://reactrouter.com), [MDN](https://developer.mozilla.org)
- Your **own** personal notes (handwritten or your own typed `.md` files)
- Reading code inside the **starter repo** you received
- Browser DevTools

### Not Allowed
- AI tools of any kind — **ChatGPT, GitHub Copilot, Cursor AI / Tab, Claude, Gemini, etc.** Cursor must be in **Ask mode disabled** (or use plain VS Code / WebStorm).
- Asking peers, instructors, or anyone else for help during the exam
- Copy-pasting code from your previous assignments or any GitHub repo
- Stack Overflow, Reddit, Discord, or any third-party site other than the official docs listed above
- Pre-written snippets brought from outside the starter

**Any violation results in immediate disqualification and a zero on the exam.**

### Submission
- A **zip** of your `exam-starter/` folder (without `node_modules`) **AND** a **private GitHub repo link** invited to my account.
- Submission cut-off is the end of the 2-hour window. The repo's last commit timestamp is the ground truth — anything pushed after the timer is ignored.

---

## Starter Repo Instructions

### 1. Receive the starter
You will receive `exam-starter.zip` at the start of the exam (or it will already be on your machine in `Week 4/Day 17/exam-starter/`).

### 2. Install
Open the folder in your terminal and run:

```bash
cd exam-starter
npm install
```

Installation should complete with **no errors**. If `npm install` fails on your machine, raise your hand immediately — this is not part of the exam.

### 3. Run
```bash
npm run dev
```

You should see Vite log a local URL (typically `http://localhost:5173`). Open it. You should see:
- A working navbar with three links: **Home**, **Products**, **Cart**
- The Home page showing a `Counter` demo and a `SearchBar` demo
- The Products page showing a "Coming soon" placeholder
- The Cart page showing an empty cart

**Confirm the app boots cleanly before you start coding.** If anything is on fire before you've written a single line, raise your hand.

### 4. Read `TASKS.md`
The starter contains a `TASKS.md` with the same tasks listed below for offline reference. As you complete each task, commit your work with a clear message (`task-1: fix counter bugs`, etc.).

---

## Tasks (100 points total)

Tasks are independent where possible. If you get stuck on one, **skip it and move on**. Partial credit is awarded for partial implementations that compile.

---

### Task 1 — Fix two bugs in `Counter.jsx` *(5 pts, ~10 min)*

**Files to edit:** `src/components/Counter.jsx`

There are **two bugs** in this component. Find and fix both.

- **Bug A:** Clicking "Add 2" should increase the count by 2, but it only adds 1.
- **Bug B:** The `useEffect` that logs `Count is now: X` to the console only ever prints once on mount, not on every change.

**Expected behavior after fix:**
- "Add 2" reliably increments by 2 every click.
- The console logs `Count is now: X` every time the count changes.

---

### Task 2 — Implement `useDebounce` and use it in `SearchBar` *(10 pts, ~15 min)*

**Files to edit:**
- `src/hooks/useDebounce.js` (skeleton — fill in)
- `src/components/SearchBar.jsx` (use the hook)

Write a custom hook with the signature:

```js
const debouncedValue = useDebounce(value, delay);
```

It must return the latest `value` only after the user has stopped changing it for `delay` milliseconds.

**Expected behavior after fix:**
- In `SearchBar.jsx`, the `<p>Debounced: ...</p>` line below the input must only update **300ms** after the user stops typing, not on every keystroke.

---

### Task 3 — Fetch products with `useEffect` *(10 pts, ~15 min)*

**Files to edit:** `src/pages/Products.jsx`

Inside the `Products` page (only — do **not** touch Redux for this task yet):

1. Use `useEffect` to fetch from `https://dummyjson.com/products` on mount.
2. Store results, a `loading` boolean, and an `error` string in component state.
3. Render:
   - "Loading..." while loading
   - A friendly error message on error
   - The product list (just titles or simple cards) on success

**Expected behavior:**
- Navigating to `/products` shows "Loading..." briefly, then a list of ~30 products.
- Cutting your wifi reproduces the error state.

---

### Task 4 — Move the fetch into Redux *(15 pts, ~20 min)*

**Files to edit:**
- `src/store/productsSlice.js` (skeleton — fill in)
- `src/pages/Products.jsx` (replace local state with Redux)

1. In `productsSlice.js`, create a `fetchProducts` async thunk that calls `https://dummyjson.com/products` and returns the `products` array.
2. Handle the three thunk states in `extraReducers`:
   - `pending` → set `status = 'loading'`, clear `error`
   - `fulfilled` → store products, set `status = 'succeeded'`
   - `rejected` → set `status = 'failed'`, store `error.message`
3. In `Products.jsx`, dispatch `fetchProducts` on mount and read `items`, `status`, `error` from the store via `useSelector`.

**Expected behavior:**
- Same UI behavior as Task 3, but the data now lives in Redux.
- Opening Redux DevTools shows `products/fetchProducts/pending` → `fulfilled`.

---

### Task 5 — Product details route `/products/:id` *(10 pts, ~15 min)*

**Files to edit:**
- `src/App.jsx` (add the new route)
- `src/pages/ProductDetails.jsx` (placeholder exists — make it work)

1. Add a route `/products/:id` rendering `ProductDetails`.
2. Inside `ProductDetails`, read `id` from `useParams()`.
3. Fetch `https://dummyjson.com/products/{id}` and display: thumbnail image, title, description, price, rating, and brand.
4. On `Products.jsx`, make each product item a clickable link to its details page.

**Expected behavior:**
- Clicking a product on `/products` navigates to `/products/3` (or whichever id) and shows that product's details.
- Hitting refresh on `/products/3` still loads the details (the fetch is in the page).

---

### Task 6 — Cart slice and Add/Remove buttons *(15 pts, ~20 min)*

**Files to edit:**
- `src/store/cartSlice.js` (skeleton — fill in)
- `src/components/ProductCard.jsx` (wire "Add to Cart")
- `src/pages/Cart.jsx` (list items, remove button, clear button)

1. In `cartSlice.js`, write three reducers:
   - `addToCart(state, action)` — if the item already exists, increase its `quantity`; otherwise push it with `quantity: 1`.
   - `removeFromCart(state, action)` — remove the item with the given id entirely.
   - `clearCart(state)` — empty the cart.
2. Export a selector `selectTotalQuantity` that returns the sum of all `quantity` fields.
3. In `ProductCard.jsx`, dispatch `addToCart` when the button is clicked.
4. In `Cart.jsx`, render each cart item with a "Remove" button, plus a single "Clear cart" button at the bottom.

**Expected behavior:**
- Adding the same product twice from `/products` results in one cart row with `quantity: 2`.
- "Remove" deletes that row.
- "Clear cart" empties the list.
- The Cart link in the navbar shows the total quantity (this is already wired via the selector — you just need the selector to work).

---

### Task 7 — Category filter with `useMemo` *(10 pts, ~15 min)*

**Files to edit:** `src/pages/Products.jsx`

1. Add a category `<select>` dropdown. Hard-code the categories array, or derive it from the fetched products using `new Set(products.map(p => p.category))`.
2. Compute the filtered list using `Array.prototype.filter`.
3. Wrap the filter computation in `useMemo` so it only re-runs when `products` or `selectedCategory` change.

**Expected behavior:**
- Selecting "smartphones" shows only smartphones.
- Selecting "All" shows everything.
- The list does **not** recompute when an unrelated piece of state (e.g., typing in the search box) changes — verify by adding a `console.log('recomputing')` inside the `useMemo` callback.

---

### Task 8 — 404 page and active NavLink styling *(5 pts, ~5 min)*

**Files to edit:**
- `src/App.jsx` (add `*` route)
- `src/pages/NotFound.jsx` (create or fill in)
- `src/components/Navbar.jsx` (replace `<Link>` with `<NavLink>` and add active styling)

1. Create a `NotFound` page that says **"404 — Page not found"** with a link back to `/`.
2. Add a catch-all route `path="*"` that renders `NotFound`.
3. In `Navbar.jsx`, use `<NavLink>` with a `className` callback that adds an `active` class (already styled in `index.css`) when the link is active.

**Expected behavior:**
- Visiting `/this-route-doesnt-exist` shows the 404 page.
- The currently active navbar link is visibly highlighted (color or underline).

---

### Task 9 — Short answers in `ANSWERS.md` *(10 pts, ~10 min)*

**Files to edit:** `ANSWERS.md`

Answer the following two questions **in your own words** (3–6 sentences each):

1. **What is the difference between `useEffect` and `useLayoutEffect`?** Give a concrete example of when you would use `useLayoutEffect` instead of `useEffect`.
2. **Where did you use `useMemo` in this exam (Task 7) and why was it appropriate?** What problem would have occurred without it?

Answers that are clearly copy-pasted from docs without rewording will lose points.

---

### Task 10 — Push to a private GitHub repo *(5 pts, ~5 min)*

1. Create a **new private** GitHub repository.
2. Push your final `exam-starter/` folder (without `node_modules`).
3. Invite my GitHub account as a collaborator.
4. Submit the repo URL in the exam form.

**Expected behavior:**
- I can clone your repo, run `npm install && npm run dev`, and see your work.

---

## Task Summary

| # | Task | Points | Time |
|---|------|-------:|-----:|
| 1 | Fix two bugs in `Counter.jsx` | 5  | 10 min |
| 2 | Implement `useDebounce` + use in `SearchBar` | 10 | 15 min |
| 3 | Fetch products with `useEffect` (loading/error) | 10 | 15 min |
| 4 | Move fetch into Redux `createAsyncThunk` | 15 | 20 min |
| 5 | `/products/:id` details page | 10 | 15 min |
| 6 | `cartSlice` + add/remove/clear | 15 | 20 min |
| 7 | Category filter with `useMemo` | 10 | 15 min |
| 8 | 404 page + active `NavLink` styling | 5  | 5 min |
| 9 | Short answers in `ANSWERS.md` | 10 | 10 min |
| 10 | Push to private GitHub repo | 5  | 5 min |
| | **Total** | **100** | **130 min** |

> The total estimated time (130 min) intentionally exceeds 120 min to leave room — you are **not expected** to finish all tasks. Score what you can, correctly.

---

## Grading Notes

- **Partial credit** is awarded for partial implementations that still compile and run.
- Each task is graded primarily on **correctness** (does it behave as specified?), not style.
- I will **run your code** locally as part of grading. If `npm run dev` fails because of your changes, all incomplete tasks lose half their remaining points.
- Tasks 9 and 10 are graded on **completeness and clarity**, not perfection.
- The exam is designed so a well-prepared student can score 70–85 comfortably in 2 hours.

---

## Final Submission Checklist

Before the timer ends, verify each of these:

- [ ] `npm run dev` still starts without errors
- [ ] Each completed task behaves as described in the "Expected behavior" section
- [ ] `ANSWERS.md` is filled in (Task 9)
- [ ] Code is committed with **per-task commit messages** (`task-1: ...`, `task-2: ...`)
- [ ] `node_modules/` is NOT in your zip / not committed to GitHub (a `.gitignore` is already provided)
- [ ] Repository is **private** and I am invited as a collaborator
- [ ] Zip submitted **AND** GitHub link submitted in the exam form
- [ ] You have written your **name and roll number** at the top of `ANSWERS.md`

Good luck. Read each task carefully before coding — that alone earns you points.
