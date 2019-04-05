import * as React from "react";
import '../../styles/scss/toolbar.scss';

type Iprops = {
	IsActive: boolean
}

export class Toolbar extends React.Component<Iprops, {}> {
	props: Iprops = {
		IsActive: false
	}

	componentDidMount() {
		if(!this.props.IsActive) return;
		
		$(document).ready(function () {
			var colorPalette = ['000000', 'FF9966', '6699FF', '99FF66', 'CC0000', '00CC00', '0000CC', '333333', '0066FF', 'FFFFFF'];
			var forePalette = $('.fore-palette');
			var backPalette = $('.back-palette');

			$.each(colorPalette, function (key, value) {
				forePalette.append($('<a href="#" data-command="forecolor" data-value="' + '#' + value + '" style="background-color:' + '#' + value + ';" class="palette-item"></a>'))
				backPalette.append($('<a href="#" data-command="backcolor" data-value="' + '#' + value + '" style="background-color:' + '#' + value + ';" class="palette-item"></a>'))
			})

			$.each($('.toolbar a'), function (key, value) {
				var $this = $(value);
				$this.on("click", function () {
					var command = $this.data("command");
					switch (command) {
						case "h1":
						case "h2":
						case "p":
							document.execCommand('formatBlock', false, command);
							break;
						case "forecolor":
						case "backcolor":
							document.execCommand(command, false, $this.data("value"));
							break;
						default:
							document.execCommand(command, false, undefined);
					}
				})
			})
		})
	}

	render() {

		return (
			<div className="toolbar-container toolbar">
				<a href="#" data-command='undo'><i className='fa fa-undo'></i></a>
				<a href="#" data-command='redo'><i className='fa fa-repeat'></i></a>
				<div className="fore-wrapper"><i className='fa fa-font' style={{ color: 'blue' }}></i>
					<div className="fore-palette">
					</div>
				</div>
				<div className="back-wrapper"><i className='fa fa-font' style={{ backgroundColor: '#ffd200', padding: '2px' }}></i>
					<div className="back-palette">
					</div>
				</div>
				<a href="#" data-command='bold'><i className='fa fa-bold'></i></a>
				<a href="#" data-command='italic'><i className='fa fa-italic'></i></a>
				<a href="#" data-command='underline'><i className='fa fa-underline'></i></a>
				<a href="#" data-command='strikeThrough'><i className='fa fa-strikethrough'></i></a>
				<a href="#" data-command='justifyLeft'><i className='fa fa-align-left'></i></a>
				<a href="#" data-command='justifyCenter'><i className='fa fa-align-center'></i></a>
				<a href="#" data-command='justifyRight'><i className='fa fa-align-right'></i></a>
				<a href="#" data-command='justifyFull'><i className='fa fa-align-justify'></i></a>
				<a href="#" data-command='indent'><i className='fa fa-indent'></i></a>
				<a href="#" data-command='outdent'><i className='fa fa-outdent'></i></a>
				<a href="#" data-command='insertUnorderedList'><i className='fa fa-list-ul'></i></a>
				<a href="#" data-command='insertOrderedList'><i className='fa fa-list-ol'></i></a>
			</div>
		)
	}
}