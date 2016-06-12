# jsPad

Recursive function implementation of the experimental padEnd and padStart String methods described by MDN.

##[str.padEnd](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
Returns a right-hand padded string of the specified length.

###Usage 
>`str.padEnd(targetLength [, padString])`

As with the Mozilla version, target length is the length of the final string length to be returned. The optional padString parameter takes a string as a pad and will default to ' ' (U+0020). The method returns the padded string. If the source string is longer than the target length method will return the target string. 

##[str.padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
Returns a left-hand padded string of the specified length.

###Usage 
>`str.padStart(targetLength [, padString])`

Target length is the length of the final string length to be returned. The optional padString parameter takes a string as a pad and will default to ' ' (U+0020). The method returns the padded string. If the source string is longer than the target length method will return the target string. 
