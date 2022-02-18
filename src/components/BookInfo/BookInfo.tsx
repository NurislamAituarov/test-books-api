import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../Hooks/Hooks';
import { StateType } from '../../reducer/reducer';
import { CLoader } from '../Content-loader/ContentLoader';
import './BookInfo.scss';

export function BookInfo() {
  const { booksData }: StateType = useAppSelector((state) => state.reducer);
  const idParams = useParams();

  const bookItem =
    booksData &&
    booksData.items.filter((item) => {
      return item.id === idParams.bookId;
    })[0];

  return (
    <div className="book__container">
      {bookItem && (
        <>
          <div className="book__container_img">
            {bookItem.volumeInfo.imageLinks ? (
              <img src={bookItem.volumeInfo.imageLinks.thumbnail} alt="oбложка" />
            ) : (
              <CLoader />
            )}
          </div>
          <div className="book__container_info">
            <p className="book__category">{bookItem.volumeInfo.categories}</p>
            <p className="book__title">{bookItem.volumeInfo.title}</p>
            <p>{bookItem.volumeInfo.publishedDate}</p>
            <p>{bookItem.volumeInfo.authors && bookItem.volumeInfo.authors.join(',  ')}</p>
            {bookItem.volumeInfo.description && (
              <textarea
                className="book__description"
                defaultValue={bookItem.volumeInfo.description}
              />
            )}

            <NavLink to="/">
              <button>back</button>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}
