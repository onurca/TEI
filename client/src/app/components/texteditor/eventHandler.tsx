//Factory, Singleton
import { Helper } from './helper'

interface IEvent {
	Execute(param?: any): void;
}

export class Undo implements IEvent {

	private static instance: Undo;
	private static Object: any;

	constructor() { };

	static Instance(object: any): any {
		this.Object = object;

		if (!Undo.instance) {
			this.instance = new Undo();
		}
		return this.instance;
	};

	Execute(param?: any): void {
		if (Undo.Object.History.canUndo()) return;
		Undo.Object.setState({ html: Undo.Object.History.undo() });
		Helper.ReplaceCaret(Undo.Object.contentEditable);
	}
}

export class Redo implements IEvent {

	private static instance: Redo;
	private static Object: any;

	constructor() { };

	static Instance(object: any): any {
		this.Object = object;

		if (!Redo.instance) {
			this.instance = new Redo();
		}
		return this.instance;
	};

	Execute(param?: any): void {
		if (Redo.Object.History.canRedo()) return;
		Redo.Object.setState({ html: Redo.Object.History.redo() });
		Helper.ReplaceCaret(Redo.Object.contentEditable);
	}
}

export class Search implements IEvent {

	private static instance: Search;
	private static Object: any;

	constructor() { };

	static Instance(object: any): any {
		this.Object = object;

		if (!Search.instance) {
			this.instance = new Search();
		}
		return this.instance;
	};

	Execute(param?: any): void {
		Search.Object.setState({ searchBoxActive: !Search.Object.state.searchBoxActive });

		if (!Search.Object.state.searchBoxActive) {
			Search.Object.setState({ html: Search.Object.History.Current.get() });
			Search.Object.contentEditable.focus();
		}
		Helper.ReplaceCaret(Search.Object.contentEditable);
	}
}

export class Cut implements IEvent {

	private static instance: Cut;

	constructor() { };

	static Instance(): any {

		if (!Cut.instance) {
			this.instance = new Cut();
		}
		return this.instance;
	};

	Execute(param?: any): void {
		var selectedText = document.getSelection() as any;
		document.execCommand("cut", true, selectedText)
	}
}

export class Copy implements IEvent {

	private static instance: Copy;

	constructor() { };

	static Instance(): any {

		if (!Copy.instance) {
			this.instance = new Copy();
		}
		return this.instance;
	};

	Execute(param?: any): void {
		var selectedText = document.getSelection() as any;
		document.execCommand("copy", true, selectedText)
	}
}

export class Delete implements IEvent {

	private static instance: Delete;

	constructor() { };

	static Instance(): any {

		if (!Delete.instance) {
			this.instance = new Delete();
		}
		return this.instance;
	};

	Execute(param?: any): void {
		var selectedText = document.getSelection() as any;
		document.execCommand("delete",true, selectedText)
	}
}

export class New implements IEvent {

	private static instance: New;

	constructor() { };

	static Instance(): any {

		if (!New.instance) {
			this.instance = new New();
		}
		return this.instance;
	};

	Execute(param?: any): void {

	}
}

export class History implements IEvent {

	private static instance: History;

	constructor() { };

	static Instance(): any {

		if (!History.instance) {
			this.instance = new History();
		}
		return this.instance;
	};

	Execute(param?: any): void {

	}
}

export class Save implements IEvent {

	private static instance: Save;

	constructor() { };

	static Instance(): any {

		if (!Save.instance) {
			this.instance = new Save();
		}
		return this.instance;
	};

	Execute(param?: any): void {

	}
}

export class Event {
	static Container: any;
	constructor() {
	}

	static Create = (e: KeyboardEvent, container: any): IEvent | undefined => {
		Event.Container = container;

		if (e.ctrlKey || e.metaKey) {
			switch (e.keyCode) {
				case 'R'.charCodeAt(0):
					e.preventDefault();
					return Redo.Instance(Event.Container);
				case 'Z'.charCodeAt(0):
					e.preventDefault();
					return Undo.Instance(Event.Container);
				case 'F'.charCodeAt(0):
					e.preventDefault();
					return Search.Instance(Event.Container);
				case 'C'.charCodeAt(0):
					e.preventDefault();
					return Copy.Instance();
				case 'X'.charCodeAt(0):
					e.preventDefault();
					return Cut.Instance();
				case 'H'.charCodeAt(0):
					e.preventDefault();
					return History.Instance();
				case 'N'.charCodeAt(0):
					e.preventDefault();
					return New.Instance();
				case 'S'.charCodeAt(0):
					e.preventDefault();
					return Save.Instance();
			}
		}

		switch (e.key) {
			case 'Delete':
				e.preventDefault();
				return Delete.Instance();
		}
	}
}
