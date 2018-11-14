
var wins = 0;
var losses = 0;
var amount = 0;
var crystalValue = 0;
var amountNeeded = Math.floor(Math.random() * 100) + 1;


$(document).ready(function () {

    $("#Box1").append(amount);

    $("#Box2").append(amountNeeded);


    $("#crystal-1").on("click", function () {

        var crystalValue = Math.floor(Math.random() * 10) + 4;

        amount += crystalValue;

        $("#Box1").html("<div><ins>Your Amount</ins>: </div>" + amount);

        if (amount === amountNeeded) {

            wins++;

            alert("you won! nice job")

            $(".wins").html("<p>Wins: </p>" + wins)

            // var amount = 0;

            // var amountNeeded = (Math.floor(Math.random() * 100) + 1);

            // $("#Box1").html("<div><ins>Your Amount</ins>: </div>" + amount);

            // $("#Box2").html("<div><ins>Amount Required</ins>: </div>" + amountNeeded)
        }

        if (amount > amountNeeded) {

            losses++;

            alert("you lose! try again")

            $(".losses").html("<p>Losses: </p>" + losses)

            // var amount = 0;

            // $("#Box1").html("<div><ins>Your Amount</ins>: </div>" + amount);
        }
    })

    $("#crystal-2").on("click", function () {

        var crystalValue = (Math.floor(Math.random() * 10) + 4);

        amount += crystalValue;

        $("#Box1").html("<div><ins>Your Amount</ins>: </div>" + amount);

        if (amount === amountNeeded) {

            wins++;

            alert("you won! nice job")

            $(".wins").html("<p>Wins: </p>" + wins)

        }

        if (amount > amountNeeded) {

            losses++;

            alert("you lose! try again")

            $(".losses").html("<p>Losses: </p>" + losses)

        }
    })

    $("#crystal-3").on("click", function () {

        var crystalValue = (Math.floor(Math.random() * 10) + 4);

        amount += crystalValue;

        $("#Box1").html("<div><ins>Your Amount</ins>: </div>" + amount);

        if (amount === amountNeeded) {

            wins++;

            alert("you won! nice job")

            $(".wins").html("<p>Wins: </p>" + wins)
        }

        if (amount > amountNeeded) {

            losses++;

            alert("you lose! try again")

            $(".losses").html("<p>Losses: </p>" + losses)
        }
    })

    $("#crystal-4").on("click", function () {

        var crystalValue = Math.floor(Math.random() * 10) + 4;

        amount += crystalValue;

        $("#Box1").html("<div><ins>Your Amount</ins>: </div>" + amount)

        if (amount === amountNeeded) {

            wins++;

            alert("you won! nice job")

            $(".wins").html("<p>Wins: </p>" + wins)
        }

        if (amount > amountNeeded) {

            losses++;

            alert("you lose! try again")

            $(".losses").html("<p>Losses: </p>" + losses)
        }
    })

    $("#start").on("click", function () {

        amount = 0;

        amountNeeded = (Math.floor(Math.random() * 100) + 1);

        $("#Box1").html("<div><ins>Your Amount</ins>: </div>" + amount);

        $("#Box2").html("<div><ins>Amount Required</ins>: </div>" + amountNeeded);


    })

})