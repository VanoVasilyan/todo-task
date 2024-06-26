import * as Yup from 'yup';

export const validationSchema = () => {
    return Yup.object().shape({
        title: Yup.string()
            .required('Required field')
            .min(5)
            .max(50),
        description: Yup.string()
            .required('Required field')
            .min(10)
            .max(150),
        date: Yup.string()
            .required('Date is required')
    })
}