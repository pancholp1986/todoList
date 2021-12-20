import React, { useEffect, useState } from "react";

import {
    Form,
    Button,
    Grid,
    Icon
} from 'semantic-ui-react';

import {
    useDispatch,
    useSelector
} from 'react-redux';

import {
    editItemAction,
} from '../redux/actions/todoListActions'

import { useFormik } from 'formik'

import { Link, useNavigate } from "react-router-dom";
import { isUserValid } from "../utils";
import DataLoad from "./layout/DataLoad";

const Edit = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.user);
    const item = useSelector(state => state.todoList.activeItem);
    
    const [itemEdit, setItemEdit] = useState(null)

    useEffect(() => {
        if (!isUserValid(user)) {
            navigate('/');
        } else {
            if (item) {
                setItemEdit(item);
            }
        }
    }, [item, user, navigate])

    const formik = useFormik({
        initialValues: {
            title: itemEdit?.title ? itemEdit.title : '',
            completed: itemEdit?.completed ? itemEdit.completed : false,
            id: itemEdit?.id ? itemEdit.id : null,
            userId: itemEdit?.userId ? itemEdit.userId : null
        },
        enableReinitialize: true,
        onSubmit: (data) => {
            editItem({ ...data });
        }
    })
    
    const editItem = item => dispatch(editItemAction(item));

    return (
        <>
            <DataLoad />
            <Grid textAlign='center'>
                <Grid.Row>
                    <h2>Edition</h2>
                </Grid.Row>
            </Grid>
            <Grid textAlign='center'>
                <Grid.Column width={8}>

                    <Form
                        onSubmit={formik.handleSubmit}
                    >
                        <Form.Field
                            control='input'
                            name='title'
                            fluid label='Title'
                            placeholder='title'
                            onChange={formik.handleChange}
                            value={formik.values.title}
                            required
                        />
                        <Form.Field
                            control='input'
                            type='checkbox'
                            label='Complete'
                            name='completed'
                            toggle
                            onChange={formik.handleChange}
                            value={formik.values.completed}
                            required
                        />

                        <Link to={'/items'} >
                            <Button icon labelPosition='left'>
                                <Icon name='angle left' />
                                Cancel
                            </Button>
                        </Link>
                        <Button type='submit' color='blue'>
                            <Icon name='save' />
                            Save
                        </Button>
                    </Form>
                </Grid.Column>
            </Grid>
        </>
    )
}

export default Edit;