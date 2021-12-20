import React, { useEffect } from "react";

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
    addItemAction
} from '../redux/actions/todoListActions'

import { useFormik } from 'formik'

import { Link, useNavigate } from "react-router-dom";
import { isUserValid } from "../utils";

const Add = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const itemsLength = useSelector(state => state.todoList.items.length)
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        if (!isUserValid(user)) {
            navigate('/');
        }
    }, [user, navigate])

    const addItem = item => dispatch(addItemAction(item));

    const formik = useFormik({
        initialValues: {
            title: '',
            completed: false
        },
        onSubmit: async (data) => {
            await addItem({ ...data, userId: user.id, id: itemsLength + 1 });
            navigate('/items');
        }
    })

    return (
        <>
            <Grid textAlign='center'>
                <Grid.Row>
                    <h2>Creation</h2>
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
                        <Button type='submit' color='blue' icon labelPosition='right'  >
                            <Icon name='save' />
                            Save
                        </Button>
                    </Form>
                </Grid.Column>
            </Grid>
        </>
    )

}

export default Add;