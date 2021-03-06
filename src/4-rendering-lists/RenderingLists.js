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
    <div className="p-10"> 
      {comments.map((c, index) => <ListItem {...c} onClick={handleClick} />)}
    </div>
  );
}

const ListItem = memo(({id, comment, onClick}) => <li onClick={() => onClick(id)}>{id} : {comment}</li>);

export default RenderingLists;