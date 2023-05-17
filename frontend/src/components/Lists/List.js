import { Fragment } from "react";
import ListItem from "../ListItem/ListItem";
import './Lists.css';

const Lists = ({ list }) => {
    return (
        <Fragment>
            {list.map(data => {
                return (
                    <ListItem data={data} />
                )
            })}
        </Fragment>
    )
}

export default Lists