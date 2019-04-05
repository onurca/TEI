import * as React from 'react';
import * as Factory from './eventHandler';
import { UndoManager } from './undoredo'
import { Toolbar } from './toolbar';
import { History } from './history';
import { Utils } from './helper';
import { FileExplorer } from './fileexplorer';
import '../../styles/scss/editor.scss';

type Istate = {
	html: any,
	searchBoxActive: boolean
};

type Iprops = {
	toolbar: boolean
}

export class Editor extends React.Component<Iprops, Istate> {
	state: Istate = {
		html: "",
		searchBoxActive: false
	};
	props: Iprops = {
		toolbar: true
	}

	History = new UndoManager(100);
	searchInput: HTMLInputElement | any;
	contentEditable: HTMLInputElement | any;

	public componentDidMount() {
		this._handleKeyPress();
		this.contentEditable.focus();
	}

	_updateHistory = () => {
		var html = this.contentEditable.innerHTML;
		this.History.Add(html);
	}

	_searchKey = () => {
		var content = this.History.Current.get();
		this.contentEditable.innerHTML = Utils.Highlight(content, this.searchInput.value);
	}

	_handleKeyPress = () => {
		document.addEventListener("keydown", (e) => {
			var Event = Factory.Event.Create(e, this);
			if (Event) Event.Execute();
		})
	}

	render() {
		return (
			<div className='text-editor-container'>
				<Toolbar IsActive={this.props.toolbar} ></Toolbar>
				<FileExplorer></FileExplorer>
				<div className='editor-container'>
					{
						this.state.searchBoxActive
							? <input onInput={this._searchKey} autoFocus className='search-area' placeholder="Search for..." ref={(c) => this.searchInput = c} />
							: null
					}
					<div
						onInput={this._updateHistory}
						className='editable-area'
						ref={(c) => this.contentEditable = c}
						spellCheck={false}
						dangerouslySetInnerHTML={{ __html: this.state.html }}
						contentEditable={!this.state.searchBoxActive}
						suppressContentEditableWarning >
					</div>

				</div>
				<History></History>
			</div >
		)
	}
}