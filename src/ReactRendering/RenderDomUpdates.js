import { useState } from 'react';
import { Button, Box, Layout } from './Layouts';

const ComponentA = () => {
  const [counter, setCounter] = useState(0);
  return (
    <Box title='Component A'>
      <span className='text-black'> Count = {counter} </span>
      <Button onClick={() => setCounter(counter + 1)}>Update Count</Button>
      <ComponentB />
    </Box>
  );
};

const ComponentB = () => {
  const [counter, setCounter] = useState(0);
  return (
    <Box title='Component B'>
      <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
      <div className='grid grid-rows-2 md:grid-cols-2 md:gap-4 md:grid-rows-1'>
        <ComponentC />
        <ComponentD />
      </div>
    </Box>
  );
};

const ComponentC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <Box title='Component C'>
      <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
    </Box>
  );
};

const ComponentD = () => {
  const [counter, setCounter] = useState(0);
  return (
    <Box title='Component D'>
      <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
    </Box>
  );
};

export default function Components() {
  return (
    <Layout>
      <ComponentA />
    </Layout>
  );
}
