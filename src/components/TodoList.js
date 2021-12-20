import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from 'react-redux';

import {
    listItemsAction
} from '../redux/actions/todoListActions'

import {
    Button,
    Grid,
    Table,
    Icon
} from "semantic-ui-react";

import { Link, useNavigate } from "react-router-dom";

import { hasItems, isUserValid } from "../utils";
import Item from "./Item";
import DataLoad from "./layout/DataLoad";
import { Pagination } from 'semantic-ui-react'
import config from "../config";

const {
    pagination: {
        from,
        to
    }
} = config;

const TodoList = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(from);
    const [itemsPerPage, setItemsPerPage] = useState(to);

    const items = useSelector(state => state.todoList.items);
    const user = useSelector(state => state.user.user);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)
    const totalPages = Math.ceil(items.length / itemsPerPage);

    useEffect(() => {
        if (!isUserValid(user)) {
            navigate('/')
        } else {

            if (!hasItems(items)) {
                const loadItems = () => dispatch(listItemsAction(user.id));
                loadItems();
            }
        }
    }, [items, dispatch, user, navigate]);

    return (
        <>
            {!hasItems(items)
                ? 
                    <>Items not found. Please, try again. <Icon name='refresh' onClick={() => navigate('/')} /></>
                : (
                    <>
                        <DataLoad />
                        <Grid celled textAlign='center'>
                            <Grid.Column width={14}>
                                <Link to={'/items/create'} >
                                    <Button color='blue'>Add</Button>
                                </Link>
                                <Table celled>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Title</Table.HeaderCell>
                                            <Table.HeaderCell>Status</Table.HeaderCell>
                                            <Table.HeaderCell></Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {currentItems.map(item => <Item key={item.id} item={item} />)}
                                    </Table.Body>
                                </Table>
                            </Grid.Column>
                            <Pagination 
                                defaultActivePage={1}
                                totalPages={totalPages}
                                onPageChange={(value, data) => setCurrentPage(data.activePage)}
                            />
                        </Grid>
                    </>
                )}
        </>
    )
}

export default TodoList;