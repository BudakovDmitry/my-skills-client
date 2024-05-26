import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Поле є обов\'язковим')
    .email('Некоректний email'),
  password: Yup.string()
    .required('Поле є обов\'язковим')
    .min(6, 'Пароль повинен містити мінімум 6 символів'),
});

export default validationSchema;