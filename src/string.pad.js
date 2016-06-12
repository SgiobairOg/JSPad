String.prototype.padEnd = function ( len, pad=' ' ) {
  //Pads the string object with the given character to the target length
  return this.length < len ? ( this + pad ).padEnd( len, pad ) : this 
}

String.prototype.padStart = function ( len, pad=' ' ) {
  //Pads the string object with the given character to the target length
  return this.length < len ? ( pad + this ).padStart( len, pad ) : this 
}
