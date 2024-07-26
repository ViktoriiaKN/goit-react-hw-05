import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import * as Yup from 'yup';
import { Formik } from "formik";

const MoviesPage = () => {
  const [filter, setFilter] = useState('');
/* const [searchParams, setSearchParams] = useState(''); */
const initialValues = {name: '',};

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required(),
})

const handleFilterChange = (e) => {
  setFilter(e.target.value);
};

  /* const handleSubmit= value => {
    setSearchParams({ query: value });
    };   */

  return (
    <>
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
<SearchForm filter={filter} handleFilterChange={handleFilterChange}/>
    </Formik>
    </>
  )
}

export default MoviesPage
