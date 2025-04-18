import './style.css';
import { useParams, useSearchParams } from 'react-router-dom';

export const Post = () => {
  const { id } = useParams();
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>Post {`Param: ${id}`} {`QS: ${qs}`}</h1>
    </div>
  )
}
