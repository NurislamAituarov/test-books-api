import { NavLink } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { CLoader } from '../Content-loader/ContentLoader';

interface BookItemProps {
  category: string;
  title: string;
  date: string;
  authors: Array<string>;
  img: string;
  id: string;
}

export const BookItem = ({ category, title, date, authors, img, id }: BookItemProps) => {
  return (
    <div className="item">
      {img ? (
        <LazyLoadImage width="60%" height="55%" src={img} effect="blur" alt="обложка" />
      ) : (
        <CLoader />
      )}
      <h6>{category}</h6>
      <h5>{title.length > 50 ? title.slice(0, 50) + ' ...' : title}</h5>
      <p>{date}</p>
      <p>{authors && authors.join(',  ')}</p>
      <NavLink to={`/bookInfo/${id}`}>Дополнительная финформация</NavLink>
    </div>
  );
};
