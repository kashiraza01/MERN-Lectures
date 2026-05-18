// import { Link } from 'react-router-dom';

/*
 * TODO (Task 8):
 *   - Make this page show "404 — Page not found".
 *   - Add a link back to "/" (the home page) using react-router-dom's <Link>.
 *   - Then register this page as a catch-all route in src/App.jsx:
 *         <Route path="*" element={<NotFound />} />
 */
export default function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <p className="muted">Placeholder. Complete <strong>Task 8</strong>.</p>
    </div>
  );
}
