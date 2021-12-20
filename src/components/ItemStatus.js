import React from "react";

import {
    Table
} from "semantic-ui-react";

const ItemStatus = ({ status }) => {

        return status
             ? <Table.Cell positive >Completed</Table.Cell>
             : <Table.Cell negative >None</Table.Cell>
        
}

export default ItemStatus;