# m VSCode Runner

VSCode extension to integrate [m](https://github.com/qrush/m) gem (is a Test::Unit runner that can run test by line number, this is his) into VSCode.

## Features

m VSCode runner help you to run specific test on your suite onli¡y selecting him and calling the extension.

**Example of use:**

![animation](https://media.giphy.com/media/WS5watNCROPHrjsG0h/giphy.gif)

## How to use
1. **Install the 'm' gem**

    For install this gem on your repo, follow the installation steps on this [documentation](https://github.com/qrush/m)
2. **Call extension**

    First select the first line of your specific test.
    
    You will have two method for run the extension. First is oopen the Command Palette in VSCode (⇧⌘P or Ctrl+Shift+P) and search this command `M Vscode Runner: Run test with m gem`.

    The second option is hit right click on this line after selection and select the option `M Vscode Runner: Run test with m gem`.

    Any of this ways will open a terminal inside VSCode and run the m command to run this test, like `m filePath:currentLine`
## Requirements

* Have installed [m gem](https://github.com/qrush/m)

## Release Notes

### 1.0.0

Initial release of m VSCode runner.

## Issues

If you find some issue with this extension please report him.
