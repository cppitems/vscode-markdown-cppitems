# added features for the default markdown preview
- cppitems language highlighting (also inline)
- folding sections

# build extension (.vsix file)
```bash
# https://code.visualstudio.com/api/working-with-extensions/publishing-extension
npm install
npm install -g vsce
vsce package
```

# debug extension
- open debugger (preconfigured, launch.json)
- press "play"
- open makrdown preview and debug html (CTRL+SHIFT+I)