import React, { FC, useEffect } from 'react';
import { Container } from '@mui/material';
import { useFormik } from 'formik';
import { useTasksAction, useTasksSelector } from '../../store/slices/tasks';
import { compareDates } from '../../utils/compareDates';
import { validationSchema } from './validation';
import Input from '../Input';
import Button from '../Button';

const Form: FC = () => {
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
    }, [editableItem])

    return (
        <Container maxWidth='sm' sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '20px' }}>
            <Input id='title' name='title' label='Title' error={formik.errors.title} value={formik.values.title} onChange={formik.handleChange} />
            <Input id='description' name='description' error={formik.errors.description} sx={{ marginTop: '15px' }} label='Description' multiline value={formik.values.description}
                onChange={formik.handleChange} />
            <Input id='date' name='date' type='datePicker' label="Deadline" value={formik.values.date} onChange={(newValue) => {
                formik.setFieldValue('date', newValue);
                formik.setFieldError('date', '');
            }} sx={{ marginTop: '15px' }} error={formik.errors.date} />
            <Button sx={{ maxWidth: '115px', marginTop: '15px', marginLeft: 'auto', marginRight: 'auto' }} onClick={() => formik.handleSubmit()}>
                {editableItem?.title ? 'Edit Task' : 'Add Task'}
            </Button>
        </Container>
    )
}

export default Form