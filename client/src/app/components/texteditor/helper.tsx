import * as React from "react";
import { renderToStaticMarkup as Render } from 'react-dom/server'

export class Helper {
	static FindLastTextNode = (node: Node): Node | null => {
		if (node.nodeType === Node.TEXT_NODE) return node;
		let children = node.childNodes;
		for (let i = children.length - 1; i >= 0; i--) {
			let textNode = Helper.FindLastTextNode(children[i]);
			if (textNode !== null) return textNode;
		}
		return null;
	}

	static ReplaceCaret = (el: HTMLElement) => {
		const target = Helper.FindLastTextNode(el);
		const isTargetFocused = document.activeElement === el;
		if (target !== null && target.nodeValue !== null && isTargetFocused) {
			var range = document.createRange();
			var sel = window.getSelection() as any;
			range.setStart(target, target.nodeValue.length);
			range.collapse(true);
			sel.removeAllRanges();
			sel.addRange(range);
			if (el instanceof HTMLElement) el.focus();
		}
	}
}

export class Decode {
	static htmlDecode = (input: string) => {
		var cache: any = [];
		var character: any;
		var e = document.createElement('div');

		return input.replace(/([&][^&; ]+[;])/g, function (entity: any) {
			character = cache[entity];
			if (!character) {
				e.innerHTML = entity;
				if (e.childNodes[0])
					character = cache[entity] = e.childNodes[0].nodeValue;
				else
					character = '';
			}
			return character;
		});
	}
}

export class Utils {
	static Highlight = (html: any, key: string) => {
		if (!key)
			return html;

		var pattern = new RegExp(`(${key})(?![^<]*>|[^<>]*\/)`, "ig");

		let array = html.split(pattern) as Array<string>;

		html = <div>
			{array.map((value, index) => {

				if (value.toLowerCase() === key.toLowerCase()) {
					return <span key={index} className='highlighted'><b>{value}</b></span>;
				}
				else {
					return value;
				}
			})}
		</div>

		return Decode.htmlDecode(Render(html));
	}
}
