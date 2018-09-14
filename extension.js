'use strict'

const vscode = require('vscode')

exports.activate = function activate(context) {
  let disposable = vscode.commands.registerCommand('extension.runTest', function () {
    let currentEditor = vscode.window.activeTextEditor
    if(!currentEditor) { return }

    const startPath = "/test/"
    const currentFilePath = `${startPath.substring(1)}${currentEditor.document.fileName.split(startPath)[1]}`
    const currentLine     = currentEditor.selection.active.line + 1
    const terminal        = vscode.window.createTerminal()

    terminal.show()
    terminal.sendText(`m ${currentFilePath}:${currentLine}`)
    vscode.window.showInformationMessage('')
  });

  context.subscriptions.push(disposable)
}

 exports.deactivate = function deactivate() {
}
