import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/filter";
import { FilterLabel, FilterInput } from "./Filter.styled";

export const Filter = () => {
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  const handleChangeFilter = event => dispatch(setFilter(event.target.value));
  
    return  <FilterLabel>
              Find contacts by name <FilterInput type="text" value={filter} onChange={handleChangeFilter} />
            </FilterLabel>
};