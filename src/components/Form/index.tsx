import React, { FC } from 'react';
import { Container } from '@mui/material';
import { useFormik } from 'formik';
import { useTasksAction } from '../../store/slices/tasks';
import { compareDates } from '../../utils/compareDates';
import { validationSchema } from './validation';
import Input from '../Input';
import Button from '../Button';

const Form: FC = () => {
    const { addTask } = useTasksAction();
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
        }
    })

    return (
        <Container maxWidth='sm' sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', backgroundColor: 'ThreeDFace', padding: '20px' }}>
            <Input id='title' name='title' label='Title' error={formik.errors.title} value={formik.values.title} onChange={formik.handleChange} />
            <Input id='description' name='description' error={formik.errors.description} sx={{ marginTop: '15px' }} label='Description' multiline value={formik.values.description}
                onChange={formik.handleChange} />
            <Input id='date' name='date' type='datePicker' label="Deadline" value={formik.values.date} onChange={(newValue) => {
                formik.setFieldValue('date', newValue);
                // formik.setFieldError('date', ''); can be used
            }} sx={{ marginTop: '15px' }} error={formik.errors.date} />
            <Button sx={{ maxWidth: '115px', marginTop: '15px', marginLeft: 'auto', marginRight: 'auto' }} onClick={() => formik.handleSubmit()}>
                Add Task
            </Button>
        </Container>
    )
}

export default Form