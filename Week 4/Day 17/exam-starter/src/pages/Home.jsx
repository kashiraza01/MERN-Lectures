import Counter from '../components/Counter.jsx';
import SearchBar from '../components/SearchBar.jsx';

export default function Home() {
  return (
    <div>
      <h1>Mid-Term Exam Starter</h1>
      <p className="muted">
        Welcome. This starter contains two small demos below (a counter and a search box)
        plus a Products page and a Cart page in the navbar. Open <code>TASKS.md</code> and
        complete each task in order. Good luck!
      </p>
      <div className="spacer" />
      <Counter />
      <SearchBar />
    </div>
  );
}
