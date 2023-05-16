import { Fragment } from "react";
import ListItem from "../ListItem/ListItem";


const Lists = ({data}) => {
    console.log(data)
    return (
        <Fragment>
                {data.map(d => {
                    return (
                            <ListItem />
                    )
                })}
        </Fragment>
    )
}

export default Lists