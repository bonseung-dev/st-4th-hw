import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/detail/1">Detail 1</Link>
      <br />
      <Link to="/detail/2">Detail 2</Link>
    </div>
  );
}

export default Home;
