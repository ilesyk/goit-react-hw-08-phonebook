import { useDispatch } from 'react-redux';
import { filterValue } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={evt => dispatch(filterValue(evt.target.value))}
        placeholder="Topic filter"
      />
    </div>
  );
};
