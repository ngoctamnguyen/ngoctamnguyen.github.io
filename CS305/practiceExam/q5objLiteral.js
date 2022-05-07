const unitConversion = {
    isDegrees: false,
    convert: function(number){
        if (this.isDegrees){
            let radians = number * Math.PI/180;
            return radians;
        }
        else{
            let degrees = number * 180/Math.PI;
            return degrees;
        }
    },
}

unitConversion.isDegrees = true;
console.log(unitConversion);
console.log(unitConversion.convert(10));