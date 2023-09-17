import { TextFilter, InputFilter, ContactFilterDiv } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from 'redux/selectors';
import { setFilters } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getFilter);
  return (
    <ContactFilterDiv>
      <TextFilter> Find contacts by name </TextFilter>
      <InputFilter
        type="text"
        value={filters}
        onChange={evt => dispatch(setFilters(evt.target.value))}
      />
    </ContactFilterDiv>
  );
};
