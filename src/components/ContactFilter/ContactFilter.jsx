import { Div, Label, Input } from './ContactFilter.styled';
import { selectFilter } from 'redux/filter/selectors';
import { changeFilter } from 'redux/filter/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

export const ContactFilter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();
    dispatch(changeFilter(normalizedValue));
  };

  return (
    <Div>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter a name to search" />
    </Div>
  );
};
