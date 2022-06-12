import { useState, memo, useCallback } from 'react';
import { COMMENTS } from './data.constants';

const transformedComments = () => {
  return COMMENTS.map((c, index) => ({ id: index, comment: c}))
};

const RenderingLists = () => {
  const [comments, setComments] = useState(transformedComments);
  const handleClick = useCallback((index) => {
    setComments((comments) => comments.filter((c) => c.id !== index));
  }, []);

  return (
    comments.map((c) => 
    <ListItem key={c.id}
      {...c}
      onClick={handleClick} 
    />))
}

const ListItem = memo(({id, comment, onClick}) => <li onClick={() => onClick(id)}>{id} : {comment}</li>);

export default RenderingLists;