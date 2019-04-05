import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Editor } from '../components/texteditor/editor';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {

    public render() {
        return (
            <div>
                <Editor toolbar={true} />
            </div>
        )
    }
}
