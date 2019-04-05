import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class Sidebar extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="bg-light border-right" id="sidebar-wrapper">
                <Logo to="/" />
                <SideItem name="Home" to="/" />
            </div>
        )
    }
}

const SideItem = (props: { name: string, to: string }) => {
    return (
        <li className="list-group list-group-flush">
            <NavLink to={props.to} exact className='list-group-item list-group-item-action bg-light' activeClassName='active'>
                {props.name}
            </NavLink>
        </li >
    );
}

const Logo = (props: { to: string }) => {
    return (
        <div className="sidebar-heading">
            <div className="sidebar-logo">
                <Link to={props.to}>
                    <div className='logo'></div>
                </Link>
            </div>
        </div>
    )
}