import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  content: Yup.string()
    .required('Поле є обов\'язковим')
});

export default validationSchema;