import * as yup from 'yup';

export const tourValidationSchema = yup.object().shape({
  trailer_link: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
