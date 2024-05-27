import * as Yup from 'yup';

const userLinksSchema = Yup.object().shape({
  instagram: Yup.string(),
  facebook: Yup.string(),
  github: Yup.string(),
  linkedIn: Yup.string(),
});

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Поле є обов\'язковим')
    .email('Некоректний email'),
  firstName: Yup.string()
    .required('Поле є обов\'язковим'),
  lastName: Yup.string()
    .required('Поле є обов\'язковим'),
  work: Yup.string(),
  location: Yup.string(),
  photo: Yup.string(),
  description: Yup.string(),
  links: userLinksSchema
});

export default validationSchema;