import React, { FC } from 'react';
import { Container } from '@mui/material';
import { useForm } from '../../hooks/useForm';
import Input from '../Input';
import Button from '../Button';

const Form: FC = () => {
    const { formik, editableItem, handleDateChange } = useForm();

    return (
        <Container maxWidth='sm' sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '20px' }}>
            <Input id='title' name='title' label='Title' error={formik.errors.title} value={formik.values.title} onChange={formik.handleChange} />
            <Input id='description' name='description' error={formik.errors.description} sx={{ marginTop: '15px' }} label='Description' multiline value={formik.values.description}
                onChange={formik.handleChange} />
            <Input id='date' name='date' type='datePicker' label='Deadline' value={formik.values.date} onChange={handleDateChange} sx={{ marginTop: '15px' }} error={formik.errors.date} />
            <Button sx={{ maxWidth: '115px', marginTop: '15px', marginLeft: 'auto', marginRight: 'auto' }} onClick={formik.handleSubmit}>
                {editableItem?.title ? 'Edit Task' : 'Add Task'}
            </Button>
        </Container>
    )
};

export default Form
