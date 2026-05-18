# Exam Tasks (offline reference)

This is the same task list as `MID_EXAM.md`. Use it during the exam without internet.

| # | Task | Points | Time |
|---|------|-------:|-----:|
| 1 | Fix two bugs in `src/components/Counter.jsx` | 5  | 10 min |
| 2 | Implement `src/hooks/useDebounce.js` and use it in `src/components/SearchBar.jsx` | 10 | 15 min |
| 3 | Fetch products in `src/pages/Products.jsx` with `useEffect` (loading + error states) | 10 | 15 min |
| 4 | Move the fetch into Redux: complete `src/store/productsSlice.js` with `createAsyncThunk` | 15 | 20 min |
| 5 | Add `/products/:id` route → `src/pages/ProductDetails.jsx` using `useParams` | 10 | 15 min |
| 6 | Complete `src/store/cartSlice.js` (`addToCart`, `removeFromCart`, `clearCart`, `selectTotalQuantity`) | 15 | 20 min |
| 7 | Category filter in `Products.jsx` using `Array.filter` + `useMemo` | 10 | 15 min |
| 8 | 404 page + active `<NavLink>` styling in `src/components/Navbar.jsx` | 5  | 5 min |
| 9 | Fill in `ANSWERS.md` (2 short questions) | 10 | 10 min |
| 10 | Push to a **private** GitHub repo and invite the instructor | 5  | 5 min |
| | **Total** | **100** | |

## Reminders

- Each task is largely independent — if you get stuck, skip and come back.
- Make per-task commits: `git commit -m "task-1: fix counter bugs"`.
- Partial credit is given for partial implementations that still compile.
- Do NOT use AI tools. Only the official docs and your own notes are allowed.

## API endpoints you will use

```
GET https://dummyjson.com/products
GET https://dummyjson.com/products/{id}
```

Sample response shape:

```json
{
  "products": [
    { "id": 1, "title": "...", "price": 549, "thumbnail": "...", "category": "smartphones" }
  ],
  "total": 100, "skip": 0, "limit": 30
}
```
