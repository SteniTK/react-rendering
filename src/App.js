import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Components from './ReactRendering/Components';

// TODO: Add routes to navigate to each folder
export default function App() {
  return (
    <>
      {/* <Router>
        <div>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/users' element={<Users />} />
          </Routes>
        </div>
      </Router> */}

      <Components />
    </>
  );
}

function Home() {
  return;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
