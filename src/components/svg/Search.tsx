import { NavLink } from 'react-router-dom';

interface SearchProps {
  onSearch: () => void;
}

export function Search({ onSearch }: SearchProps) {
  const url = process.env.NODE_ENV === 'development' ? '/' : '/test-books-api/';

  return (
    <NavLink to={url}>
      <svg
        onClick={onSearch}
        width="26"
        height="26"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.1132 10.4446C12.1674 9.33726 12.8252 7.85455 12.8252 6.22171C12.8252 2.79647 9.95255 0 6.41258 0C2.8726 0 0 2.79647 0 6.22171C0 9.64694 2.8726 12.4434 6.41258 12.4434C7.85373 12.4434 9.17878 11.9836 10.2524 11.2047L15.0207 15.8311C15.1368 15.9437 15.2818 16 15.4269 16C15.572 16 15.7267 15.9437 15.8331 15.8311C16.0556 15.6152 16.0556 15.2587 15.8331 15.0334L11.1132 10.4446ZM1.16065 6.22171C1.16065 3.41583 3.51096 1.1261 6.41258 1.1261C9.30454 1.1261 11.6645 3.40645 11.6645 6.22171C11.6645 9.03696 9.3142 11.3173 6.41258 11.3173C3.51096 11.3173 1.16065 9.02758 1.16065 6.22171Z"
          fill="#2C2C31"
        />
      </svg>
    </NavLink>
  );
}
