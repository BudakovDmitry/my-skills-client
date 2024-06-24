import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Поле є обов\'язковим')
});

export default validationSchema;