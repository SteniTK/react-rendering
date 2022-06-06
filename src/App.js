import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// TODO: Add routes to navigate to each folder
export default function App() {
  return (
    <Router>
     <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users/>} />
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}