/**
 * Created by Administrator on 2017/7/12.
 */
import React from 'react';
import {Link} from "react-router"
export default function App(props) {
    return (
        <div>
            <h2>Hello React Router!</h2>
            <ul>
                <li>
                    <Link to="/about" activeClassName="active">About</Link>
                </li>
                <li>
                    <Link to="/repos" activeClassName="active">Repos</Link>
                </li>
            </ul>
            {props.children}
        </div>
    )
}