import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Components from './ReactRendering/Components';
import RenderingProps from './2-rendering-optimization-usememo/RenderingProps';
import RenderingPropFunctions from './2-rendering-optimization-usememo/RenderingPropFunctions';

// TODO: Add routes to navigate to each folder
export default function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Components/>} />
            <Route path='/render-props' element={<RenderingProps />} />
            <Route path='/render-anonymized-functions' element={<RenderingPropFunctions />} />
          </Routes>
        </div>
      </Router>

      {/* <Components /> */}
    </>
  );
}