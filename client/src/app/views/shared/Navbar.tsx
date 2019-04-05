import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class Navbar extends React.Component<{}, {}> {

    _toggleMenu = (e: any) => {
        jQuery("#wrapper").toggleClass("toggled");
    }

    public render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <ToogleButton onClick={this._toggleMenu.bind(this)} />

                <NavMenu>
                    <NavItem name="Login" to="login" />
                </NavMenu>
            </nav>
        )
    }
}

const ToogleButton = (props: { onClick: React.EventHandler<React.MouseEvent<HTMLButtonElement>> | undefined; }) => {
    return (
        <button className="btn" id="menu-toggle" onClick={props.onClick}  >&#9776;</button>
    )
}

const NavMenu = (props: { children: string | number | boolean | {} | any[] | React.ReactElement<any> | null | undefined; }) => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                {props.children}
            </ul>
        </div>
    )
}

const NavItem = (props: { name: string, to: string }) => {
    return (
        <li className="nav-item">
            <NavLink to={props.to} exact className='nav-link' activeClassName='active'>
                {props.name}
            </NavLink>
        </li>
    );
}
