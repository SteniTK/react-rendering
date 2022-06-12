import { useState, memo } from 'react';
import { Button, VisualComponent, Layout, Props } from '../ReactRendering/Layouts';

const style = {display: 'flex'};

const Child = memo((props) => {
  return (
    <VisualComponent title="memo(Child)">
      <Props {...props}/>
    </VisualComponent>);
});

const Parent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <VisualComponent title='Parent'>
       <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
      <Child {...style}/>
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