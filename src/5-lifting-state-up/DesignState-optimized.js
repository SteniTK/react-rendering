import { useState } from 'react';
import { Button, VisualComponent, Layout } from '../ReactRendering/Layouts';

const FastComponent = ({children}) => {
  const [counter, setCounter] = useState(0);
  return (
    <VisualComponent title='Component A'>
      {counter}
      <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
      {children}
    </VisualComponent>
  );
};

const SlowComponent = () => {
  const [counter, setCounter] = useState(1);
  let now = performance.now();
  while (performance.now() - now < 500) {
    // super slow component 500ms for rendering...
  }
  return (
    <VisualComponent title='Slow Component'>
      <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
      <div className='grid grid-rows-2 md:grid-cols-2 md:gap-4 md:grid-rows-1'>
      </div>
    </VisualComponent>
  );
};

export default function Components() {
  return (
    <Layout>
      <FastComponent>
        <SlowComponent />
      </FastComponent>
    </Layout>
  );
}
