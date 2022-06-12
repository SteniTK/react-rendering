import { useState, memo, useMemo } from 'react';
import { Button, VisualComponent, Layout, Props } from '../ReactRendering/Layouts';

const Child = memo((props) => {
  return (
    <VisualComponent title="memo(Child)">
      <Props {...props}/>
    </VisualComponent>);
});

const Parent = () => {
  const [counter, setCounter] = useState(0);
  const style = useMemo(() => ({display: 'flex'}), []);
  return (
    <VisualComponent title='Parent'>
       <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
      <Child style={style}/>
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