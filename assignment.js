

// first problem Kilometer to meter starts //

function KilometerToMeter(Kilometer){
    var meter = Kilometer * 1000;
    return meter;
}
var dhakaToChottogram = KilometerToMeter(120);
console.log("Dhaka to chottogram : ",dhakaToChottogram," meter" )

// first problem Kilometer to meter ends //

// Second problem budgeCalculator starts //

function budgeCalculator(watch,phone,laptop){
    var buyingWatch = watch * 50;
    var buyingPhone = phone * 100;
    var buyingLaptop = laptop * 500;
    var total = buyingWatch + buyingPhone + buyingLaptop;
    return total;
}
var total = budgeCalculator(5,3,2);
console.log("My Total budge :", total, " USD")

// Second problem budgeCalculator ends //

// Third problem hotelCost starts //

function hotelCost(days){
    var cost = 0;
    if( days <= 10){
        var cost = days * 100;
    }
    else if( days <= 20){
        var firstPart = 10 * 100;
        var secondPart = days - 10;
        var remaining = secondPart;
        var cost = firstPart + remaining * 80;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 *80;
        var thirdPart = days - 20;
        var remaining = thirdPart;
        var cost = firstPart + secondPart + remaining *50;
    }
    return cost;
}
var totalCost = hotelCost(25);
console.log("My total costs : ",totalCost, " USD")

// Third problem hotelCost ends //

// Fourth problem megaFriend starts //

function megaFriend(names) {
    var longestName = "";

    names.forEach(function(name) {
        if(name.length > longestName.length) {
        longestName = name;
        }
    });

    return longestName;
    }
var friends = [ "mehedi", "zubaer", "Nahid", "faisal", "arman", "abdullah"];
var longestName = megaFriend(friends);
console.log("The longest Name among my friends is : ",longestName);

// Fourth problem megaFriend ends //