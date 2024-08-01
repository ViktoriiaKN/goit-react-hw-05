import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  query: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
})

const SearchForm = ({initialValues, onSubmit}) => {

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
    <Field 
    as='input'
    text='text'
    name='filter'
    placeholder='Search movies'
    />
    <ErrorMessage name="query" component="div"/>
    <button type="submit">Search</button>
    </Form>
</Formik>
  )
}

export default SearchForm;
