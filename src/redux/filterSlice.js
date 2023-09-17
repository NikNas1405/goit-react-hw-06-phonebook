import { initialState } from './initialState';

//actions
export const setFilters = value => {
  return { type: 'filters/setFilters', payload: value };
};

//redusers
export const filterReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case 'filters/setFilters':
      // return {
      //   ...state,
      //   filters: action.payload,
      // };

      return (state = `${action.payload}`);
    default:
      return state;
  }
};
