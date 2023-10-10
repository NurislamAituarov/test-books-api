import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addItemBooksExisting } from '../../store/actions/action';
import { searchBooks } from '../../api/client';
import { useAppSelector } from '../../hooks/hooks';
import { StateType } from '../../types/ReduxType';
import { IBooks } from '../../types/BooksType';
import { Loader } from '../loader/Loader';
import { BookItem } from './BookItem';
import { BtnMore } from '../btn-more/BtnMore';

export function CardsBooks() {
  const { booksData, category, sort, loader, value, arrBooks }: StateType = useAppSelector(
    (state) => state.reducer,
  );
  const [result, setResult] = useState(30);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  function categoryFn(arr: IBooks[]) {
    return arr.filter((item) => {
      if (category === 'All') {
        return item;
      }
      if (item.volumeInfo.categories && category === item.volumeInfo.categories[0]) {
        return item;
      }
    });
  }

  function sortFn(arr: IBooks[]) {
    if (sort === 'newest') {
      return arr.sort(function (a, b) {
        return parseInt(b.volumeInfo.publishedDate) - parseInt(a.volumeInfo.publishedDate);
      });
    }
    return arr;
  }

  function moreLoad() {
    setResult((result) => result + 30);
    setIsLoading(true);
    searchBooks(value, result).then((result) => {
      dispatch(addItemBooksExisting(result.data));
      setIsLoading(false);
    });
  }

  const itemsBooks = arrBooks && sortFn(categoryFn(arrBooks));
  return (
    <>
      {booksData && <h2>Found {booksData.totalItems} results</h2>}
      <div className="block__items">
        {itemsBooks &&
          itemsBooks.slice(0, result).map((book: any, i: number) => {
            return (
              <BookItem
                key={i}
                id={book.id}
                category={book.volumeInfo.categories && book.volumeInfo.categories[0]}
                title={book.volumeInfo.title}
                date={book.volumeInfo.publishedDate}
                authors={book.volumeInfo.authors}
                img={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}
              />
            );
          })}
      </div>
      {booksData && result < booksData.totalItems && (
        <BtnMore moreLoad={moreLoad} isLoading={isLoading} />
      )}
      {loader && <Loader />}
    </>
  );
}
