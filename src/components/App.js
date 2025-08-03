
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from "react-router-dom";

// Layout Component
function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/women">Women</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

// Home Page
function Home() {
  return <h2>Index</h2>;
}

// Women Category
function Women() {
  const items = ["Grooming", "Shirt", "Trouser","jewellery"];
  return (
    <div>
      <h2>Women Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.toLowerCase()}>{item}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

// Item Details
function ItemDetail() {
  const { itemId } = useParams();
  return <h3>{itemId}</h3>;
}
const App = () => {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="women" element={<Women />}>
            <Route path=":itemId" element={<ItemDetail />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
