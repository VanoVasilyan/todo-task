import { useFormik } from 'formik';
import { useTasksAction, useTasksSelector } from '../store/slices/tasks';
import { validationSchema } from '../components/Form/validation';
import { compareDates } from '../utils/compareDates';
import { useEffect } from 'react';

export const useForm = () => {
    const { addTask, editTask } = useTasksAction();
    const { editableItem } = useTasksSelector();

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            date: null
        },
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const newTaskData = {
                id: Date.now(),
                title: values.title,
                description: values.description,
                deadline: values.date,
                status: values.date && compareDates(values.date)
            }
            addTask(newTaskData);
            formik.handleReset('');
            editTask({});
        }
    })

    useEffect(() => {
        if (editableItem.title && editableItem.description && editableItem.deadline) {
            formik.setFieldValue('title', editableItem.title)
            formik.setFieldValue('description', editableItem.description)
            formik.setFieldValue('date', editableItem.deadline)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editableItem])

    return {
        formik,
        editableItem,
    }
}