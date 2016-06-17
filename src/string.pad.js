String.prototype.padEnd = function ( len, pad='\x20' ) {
  //Pads the string object with the given character to the target length
  return this.length < len ? ( this + pad ).padEnd( len, pad ) : this.valueOf() 
}

String.prototype.padStart = function ( len, pad='\x20' ) {
  //Pads the string object with the given character to the target length
  return this.length < len ? ( pad + this ).padStart( len, pad ) : this.valueOf() 
}
