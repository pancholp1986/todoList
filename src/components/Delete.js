import React from 'react'

import {
    Button,
    Header,
    Icon,
    Modal
} from 'semantic-ui-react'

import {
    useDispatch
} from 'react-redux';

import {
    getItemToDeleteAction,
    deleteItemAction
} from '../redux/actions/todoListActions'

function Delete({ item }) {

    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false)

    const deleteItem = item => {
        dispatch(getItemToDeleteAction(item));
    }

    const onConfirm = async item => {
        await dispatch(deleteItemAction(item));
    }

    return (
        <Modal
            closeIcon
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={<Button type='button' color='red' onClick={() => deleteItem(item)}  icon='remove' />}
        >
            <Header icon>
                <Icon name='archive' />
                Remove
            </Header>
            <Modal.Content>
                <p>
                    ¿Are you sure to delete the item??
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' onClick={() => {
                    setOpen(false)
                    onConfirm(item);
                }}>
                    <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default Delete