import * as React from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import "jquery";
import "../../styles/scss/style.scss";

export interface LayoutProps {
    children?: React.ReactNode;
    pageTitle?: string
}

export class Layout extends React.Component<LayoutProps, {}> {

    public render() {
        return (
            <div className="d-flex" id="wrapper">
                <Sidebar />
                <div id="page-content-wrapper">
                    <Navbar />
                    <div className="container-fluid">
                        <h1 className="mt-4">{this.props.pageTitle}</h1>
                        <div className="page-body">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
