import * as yup from 'yup';

export const historyValidationSchema = yup.object().shape({
  content: yup.string().nullable(),
  content_manager_id: yup.string().nullable(),
});
