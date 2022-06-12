import { useState, memo, useMemo, useCallback } from 'react';
import { Button, VisualComponent, Layout, FnProps } from '../ReactRendering/Layouts';

const Child = memo((props) => {
  return (
    <VisualComponent title="memo(Child)">
      <FnProps {...props}/>
    </VisualComponent>);
});

const Parent = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = useCallback(() => console.log("Clicked"), []);
  return (
    <VisualComponent title='Parent'>
       <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
      <Child onClick={handleClick}/>
    </VisualComponent>
  );
}

const RenderingProps = () => {
  return (
  <Layout>
    <Parent />
  </Layout>);
}

export default RenderingProps;