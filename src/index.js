
exports.min = function min (array) {
    if ( array === undefined ) {
        return 0;
    }

    if ( array.length === 0 ) {
        return 0;
    }
        
    let tempMin = array[0];
    
    for ( let i = 1; i < array.length; i++) {
        if ( array[i] < tempMin ) {
            tempMin = array[i];
        }
    }
      
    return tempMin;
}

exports.max = function max (array) {
    if ( array === undefined ) {
        return 0;
    }

    if ( array.length === 0 ) {
        return 0;
    }
      
    let tempMax = array[0];
      
    for ( let i = 1; i < array.length; i++) {
        if ( array[i] > tempMax ) {
            tempMax = array[i];
        }
    }
      
    return tempMax;
}

exports.avg = function avg (array) {
    if ( array === undefined ) {
        return 0;
    }

    if ( array.length === 0 ) {
        return 0;
    }
    
    let sum = 0;
    for ( let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    return sum / array.length;
}
