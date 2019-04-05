//Memento

interface IState {
	get(): string;

	getDate(): string;
}

class State implements IState {
	private state: string;

	private date: string;

	constructor(state: string) {
		this.state = state;
		this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
	}

	public getDate(): string {
		return this.date;
	}

	public get(): any {
		return this.state;
	}
}

export class UndoManager {
	private limit: number;
	private index: number;

	private states: IState[] = [];
	public Current: State;

	constructor(limit: number) {
		this.limit = limit;
		this.Current = new State("");
		this.index = 0;
		this.states.push(this.Current);
	}

	public Add(current: string): void {
		this.index++;

		if (this.states.length == this.limit) {
			this.states.shift();
			this.index = this.limit;
		}
		
		this.Current = new State(current);
		this.states.push(this.Current);
	}

	public canUndo(): boolean {
		return this.index == 0;
	}

	public canRedo(): boolean {
		return this.index == this.states.length - 1;
	}

	public undo(): string | undefined {
		if (!this.states.length) {
			return;
		}
		this.index--;
		this.Current = this.states[this.index] as State;

		return this.Current.get();
	}

	public redo(): string | undefined {
		if (!this.states.length) {
			return;
		}
		this.index++;
		this.Current = this.states[this.index] as State;

		return this.Current.get();
	}
}
