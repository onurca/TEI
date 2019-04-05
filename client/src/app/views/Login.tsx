import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Login extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <input type="text" id="username" className="form-control" placeholder="Username" />
                <input type="password" id="password" className="form-control" placeholder="Password" />
                <br></br>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        )
    }
}
