import { useDispatch } from 'react-redux';
import './Select.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import { addCategory, addSorting } from '../../actions/action';

interface SelectProps {
  title: string;
  arr: Array<string>;
}

export function Select({ title, arr }: SelectProps) {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(arr[0]);

  function onSelected(str: string) {
    setSelectedCategory(str);
    if (arr.length > 3) {
      dispatch(addCategory(str));
    } else {
      dispatch(addSorting(str));
    }
  }

  return (
    <div className="select">
      <>
        <p>{title}</p>
        <Dropdown style={{ width: '200px' }}>
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            {selectedCategory}
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            {arr.map((list, i) => {
              return (
                <Dropdown.Item onClick={() => onSelected(list)} key={i}>
                  {list}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </>
    </div>
  );
}
