import './BtnMore.scss';

interface IProps {
  isLoading: boolean;
  moreLoad: () => void;
}

export function BtnMore({ moreLoad, isLoading }: IProps) {
  return (
    <button className="btn__more" onClick={moreLoad}>
      {!isLoading ? (
        'Load more'
      ) : (
        <div className="simple-spinner">
          <span></span>
        </div>
      )}
    </button>
  );
}
