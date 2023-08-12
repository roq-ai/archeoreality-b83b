import * as yup from 'yup';

export const ticketValidationSchema = yup.object().shape({
  discount_code: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
