import React from "react";
import Delete from "./Delete";

import {
    getItemToEditAction
} from '../redux/actions/todoListActions'

import {
    Button,
    Table
} from "semantic-ui-react";

import { useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";
import ItemStatus from "./ItemStatus";

const Item = ({ item }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const redirectEdit = item => {
        dispatch(getItemToEditAction(item))
        navigate(`/items/${item.id}`);
    }
    
    return (
        <>
            <Table.Row>
                <Table.Cell>{item.title}</Table.Cell>
                <ItemStatus status={item.completed} />
                <Table.Cell>
                    <Button type='button' onClick={() => redirectEdit(item)} icon='edit' />
                    <Delete item={item} />
                </Table.Cell>
            </Table.Row>
        </>
    )
}

export default Item;