import { useState, memo, useMemo } from 'react';
import { Button, VisualComponent, Layout, FnProps } from '../ReactRendering/Layouts';

const Parent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <VisualComponent title='Parent'>
       <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
      <Child onClick={() => console.log("Clicked")}/>
    </VisualComponent>
  );
}

const Child = memo((props) => {
  return (
    <VisualComponent title="memo(Child)">
      <FnProps {...props}/>
    </VisualComponent>);
});

const RenderingProps = () => {
  return (
  <Layout>
    <Parent />
  </Layout>);
}

export default RenderingProps;