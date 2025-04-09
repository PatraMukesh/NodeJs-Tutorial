function add(a,b){
    return "The sum of a and b is: " + (a+b);
}

function sub(a,b){
    return "The difference of a and b is: " + (a-b);
}

function mul(a,b){
    return "The product of a and b is: " + (a*b);
}

function div(a,b){
   return "The quotient of a and b is: " + (a/b);
}

module.exports = {
    addition: add,
    subtraction: sub,
    multiplication: mul,
    division: div
};

// exports.addition = add;
// exports.subtraction = sub;
// exports.multiplication = mul;
// exports.division = div;