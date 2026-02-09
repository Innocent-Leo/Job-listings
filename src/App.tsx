import Header from "./components/Header";
import JobList from "./components/JobList";

const App = () => {
  return (
    <div className="bg-light-green">
      <Header />
      <div className="mx-auto max-w-6xl">
        <JobList />
      </div>
    </div>
  );
};

export default App;
