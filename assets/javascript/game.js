$(document).ready(function () { //will not work without 

    var computerNumber;
    var currentNumber = 0;
    var wins = 0;
    var losses = 0;

    //create object to pull from  MAKE SURE ITS GLOBAL
    var crystals = {
        first:
        {
            name: "First",
            value: 0,
        },
        second:
        {
            name: "Second",
            value: 0,
        },
        third:
        {
            name: "Third",
            value: 0,
        },
        fourth:
        {
            name: "Fourth",
            value: 0,
        }
    };

    function crystalReset() {
        crystals.first.value = crystalNumbers(1, 10);
        crystals.second.value = crystalNumbers(1, 10);
        crystals.third.value = crystalNumbers(1, 10);
        crystals.fourth.value = crystalNumbers(1, 10);
    };

    function updateScore(crystal) {
        currentNumber = currentNumber + crystal.value;
        $("#myNumber").text(currentNumber);
        console.log("reading");
        console.log(crystal.value);
        console.log(currentNumber)
    };

    function winCondition() {
        if (currentNumber === computerNumber) {
            alert("You Won");
            wins++;
            gameStart();

        } else if (currentNumber > computerNumber) {
            alert("You Lost!")
            losses++;
            gameStart();
        }
    };

    function numberPicker() {
        return Math.floor(Math.random() * 100) + 1;
    }
    function crystalNumbers(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // turn imgs to buttons

    $("#first").click(function () {
        updateScore(crystals.first);
        winCondition();

    });

    $("#second").click(function () {
        updateScore(crystals.second);
        winCondition();
    });

    $("#third").click(function () {
        updateScore(crystals.third);
        winCondition();
    });

    $("#fourth").click(function () {
        updateScore(crystals.fourth);
        winCondition();
    });





    //insert reset functions
    function gameStart() {
        crystalReset();
        computerNumber = numberPicker();
        $("#target").text(computerNumber);
        currentNumber = 0;
        $("#myNumber").text(0);
        $("#wins").text(wins);
        $("#losses").text(losses);

        // console.log(computerNumber);
        // console.log(crystals.first.value);






    };


    gameStart();

});

