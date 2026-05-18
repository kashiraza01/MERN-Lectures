import { useState } from 'react';
import useDebounce from '../hooks/useDebounce.js';

/*
 * TODO (Task 2):
 *   - Use the `useDebounce` custom hook so that `debounced` only updates
 *     ~300ms after the user stops typing (not on every keystroke).
 *
 *   Example:
 *       const debounced = useDebounce(query, 300);
 */
export default function SearchBar() {
  const [query, setQuery] = useState('');
  const debounced = useDebounce(query, 300);

  return (
    <div className="card">
      <h3>Search Demo</h3>
      <input
        type="text"
        placeholder="Start typing..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: '100%', maxWidth: 360 }}
      />
      <p className="muted" style={{ marginTop: '0.5rem' }}>
        Live: <strong>{query || '—'}</strong>
      </p>
      <p>
        Debounced: <strong>{debounced || '—'}</strong>
      </p>
    </div>
  );
}
