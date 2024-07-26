import { Field } from "formik";


const SearchForm = ({filter, handleFilterChange}) => {


  return (
    <Field 
    as='input'
    text='text'
    name='filter'
    value={filter}
    onChange={handleFilterChange}
    placeholder='Search movies'
    />

  )
}

export default SearchForm;
