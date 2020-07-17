function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}


function woodCalculator(chair, table, khat){
    var chairCubicFeet = chair * 1;
    var tableCubicFeet = table * 3;
    var khatCubicFeet =khat * 5;
    var totalCubicFeet = chairCubicFeet + tableCubicFeet + khatCubicFeet;
    return totalCubicFeet;
}


function brickCalculator(floor){
    if(floor>=1 && floor <=10)
        console.log(floor * 15 * 1000);

    else if(floor>=11 && floor <=20)
        console.log(150000 + (floor-10) * 12 * 1000);

    else 
    console.log(150000 + 120000 + (floor-20) * 10 * 1000);

    return result;
}


function tinyFriend(name) {
    var smallerName = name[0];
    for (var i = 0; i < name.length; i++) {
        var currentName = name[i];
        if(currentName.length < smallerName.length) {
            smallerName = currentName;
        }
    }
    return smallerName;
}