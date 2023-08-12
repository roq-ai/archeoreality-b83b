import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  admin_id: yup.string().nullable(),
});
