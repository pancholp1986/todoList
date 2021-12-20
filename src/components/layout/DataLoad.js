import React from "react";
import { useSelector } from "react-redux";
import { Dimmer, Image, Loader, Segment } from "semantic-ui-react";

const DataLoad = () => {

    const loading = useSelector(state => state.todoList.loading);

    return (
        <>
        {loading && <Segment>
            <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>}        
        </>
    )
}

export default DataLoad;