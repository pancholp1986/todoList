import React from 'react'

import {
    Button,
    Form,
    Grid,
    Segment
} from 'semantic-ui-react'

import {
    useDispatch
} from 'react-redux';

import { useNavigate } from "react-router-dom";

import {
    checkUserAction,
} from '../redux/actions/userActions'

import { useFormik } from 'formik'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const checkUser = userData => dispatch(checkUserAction(userData))

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: async data => {
            if (undefined !== data.username && data.username && data.username.length > 0 &&
                undefined !== data.password && data.password && data.password.length > 0) {
                    await checkUser(data);
                    navigate('/items')
                }

        }
    })

    return (
        <>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Form size='large' onSubmit={formik.handleSubmit} >
                        <Segment stacked>
                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='User name'
                                name='username'
                                onChange={formik.handleChange}
                                required
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                name='password'
                                onChange={formik.handleChange}
                                required
                            />

                            <Button color='teal' fluid size='large'  >
                                Login
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </>
    )
}

export default Login