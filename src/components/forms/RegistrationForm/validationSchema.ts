import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Поле є обов\'язковим')
    .email('Некоректний email'),
  firstName: Yup.string()
    .required('Поле є обов\'язковим'),
  lastName: Yup.string()
    .required('Поле є обов\'язковим'),
  password: Yup.string()
    .required('Поле є обов\'язковим')
    .min(6, 'Пароль повинен містити мінімум 6 символів'),
  passwordRepeat: Yup.string()
    .required('Поле є обов\'язковим')
    .oneOf([Yup.ref('password')], 'Паролі повинні співпадати'),
});

export default validationSchema;