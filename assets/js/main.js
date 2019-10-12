document.addEventListener('DOMContentLoaded', function() {
	// console.log("Your document is ready!");
	const codeHTML = document.querySelectorAll('.code-html');
	const codeCSS = document.querySelectorAll('.code-css');
	const codeJS = document.querySelectorAll('.code-js');

	//Code HTML
	codeHTML.forEach(function(item) {
		CodeMirror(item, {
			indentUnit: 2,
			smartIndent: true,
			tabSize: 2,
			lineNumbers: true,
			indentWithTabs: true,
			mode: 'htmlmixed',
			theme: 'monokai',
			lineWiseCopyCut: true,
		});
	});

	// Code JS
	codeJS.forEach(function(item) {
		CodeMirror.fromTextArea(item, {
			indentUnit: 2,
			smartIndent: true,
			tabSize: 2,
			lineNumbers: true,
			indentWithTabs: true,
			mode: 'javascript',
			theme: 'monokai',
			lineWiseCopyCut: true,
			readOnly: true,
		});
	});
});
