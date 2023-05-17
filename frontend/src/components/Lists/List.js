import { Fragment } from "react";
import ListItem from "../ListItem/ListItem";
import './Lists.css';

const Lists = ({ list }) => {
    return (
        <Fragment>
            {list.map((data, index) => {
                return (
                    <ListItem data={data} key={index}/>
                )
            })}
        </Fragment>
    )
}

export default Lists