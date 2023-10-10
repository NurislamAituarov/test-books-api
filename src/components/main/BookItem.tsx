import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { CLoader } from '../content-loader/ContentLoader';
import { BookItemProps } from '../../types/BooksType';

export const BookItem = ({ category, title, date, authors, img, id }: BookItemProps) => {
  return (
    <NavLink to={`/bookInfo/${id}`}>
      <div tabIndex={0} className="item">
        {img ? (
          <LazyLoadImage width="180px" height="250px" src={img} effect="blur" alt="обложка" />
        ) : (
          <CLoader />
        )}
        <div className="item__infoTitle">
          {category && <h6>{category}</h6>}
          <h5>{title.length > 50 ? title.slice(0, 50) + ' ...' : title}</h5>
          <p>{date}</p>
          <p>{authors && authors.join(',  ')}</p>
        </div>
      </div>
    </NavLink>
  );
};
