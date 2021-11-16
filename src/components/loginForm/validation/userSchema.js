import * as yup from 'yup';

const userSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(25).required(),
});

export default userSchema;
