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
