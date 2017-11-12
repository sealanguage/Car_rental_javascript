/*global leila's code example*/
var carRental = {
    name: "Enterprise Car Rental",
    TypesAvailable: [{ type: "Economy", numAvailable: 100, numRented: 0}],
                    [{ type: "Midsize", numAvailable: 100, numRented: 0}],
                    
    getAvailability: function() {
        var EconomyuCarsNum = this.ThpesAvailable[0].numAvailable - this.TypesAvailable[0].numRented;
        var MidsizeCarsNum = this.ThpesAvailable[1].numAvailable - this.ThpesAvailable[1].numRented;
        return {EcononyCarsNum: EconomyCarsNum, MidsizeCarsNum: MidsizeCarsNum};
    },
    
    rentEcon: function() {
        this.TypesAvaiable[0].numRented++;
        console.log("click");
    },
    rentMid: function() {
        this.TypesAvailable[0].numRented++;
    }
};
document.getElementById("businessName").innerHTML = carRentala.name;

function updateInfo() {
    document.getElementById("econNum").innerHTML = carRental.getAvailablilty()/EconomyCarsNum;
    document.getElementById("econCar").innerHTML = "Economy";
    document.getElementById("midNum").innerHTML = carrental.getAvailability().MidsizeCarsNum;
    document.getElementsById("midCar").innerHRML = "Midsize"
    
}