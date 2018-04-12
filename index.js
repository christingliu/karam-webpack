var srctext = require.context('./src', true, /\.js$/); //make sure you have your directory and regex test set correctly!
srctext.keys().forEach(srctext);
var context = require.context('./test', true, /\.test\.js$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);

