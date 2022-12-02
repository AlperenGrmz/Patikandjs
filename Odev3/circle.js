function circleArea(r){
    let PI = Math.PI
    console.log(PI*(r**2));
}

function circleCircumference(r){
    let PI = Math.PI
    console.log(2*PI*r)
}

module.exports = {
    circleArea,
    circleCircumference
}
