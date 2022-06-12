import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Components from './ReactRendering/Components';
import RenderingProps from './2-rendering-optimization-usememo/RenderingProps';

// TODO: Add routes to navigate to each folder
export default function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/render-props' element={<RenderingProps />} />
            <Route path='/' element={<Components/>} />
          </Routes>
        </div>
      </Router>

      {/* <Components /> */}
    </>
  );
}