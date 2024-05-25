import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Некоректний email')
    .required('Поле є обов\'язковим'),
  firstName: Yup.string()
    .required('Поле є обов\'язковим'),
  lastName: Yup.string()
    .required('Поле є обов\'язковим'),
  password: Yup.string()
    .min(6, 'Пароль повинен містити мінімум 6 символів')
    .required('Поле є обов\'язковим'),
  passwordRepeat: Yup.string()
    .oneOf([Yup.ref('password')], 'Паролі повинні співпадати')
    .required('Поле є обов\'язковим'),
});

export default validationSchema;