/* CSS code for the tip calculator */

// making an object named as Calculator
let Calculator = {
    // calculate function will be used when when you click calculate
    calculate: function () {
        // this is used to check for exceptions in inputs
        try {
            var bill = (document.getElementById("bill").value);
            var tip = (document.getElementById("tip").value);
            var numberOfPerson = (document.getElementById("NOP").value);

            
            // it will check for empty inputs by the user
            if (bill == "" || tip == "" || numberOfPerson == "") {
                throw alert("No entry should be empty");
            }

            // it will check bill is greater than or equal to zero
            if (bill < 0) {
                throw alert("Bill  should be greater than or equal to zero");
            }

            // it will check tip is greater than or equal to zero
            if (tip < 0) {
                throw alert("tip should be greater than or equal to zero");
            }

            // it will check tip is greater than to zero
            if (numberOfPerson <= 0) {
                throw alert("Number of Person should be greater than zero");
            }


            // it will check number of person is always integer
            if (parseFloat(numberOfPerson) / parseInt(numberOfPerson) != 1) {
                throw alert("Number of person is always integer");
            }


            else { //this will calculate the tip per person and bill per person
                let tipPerPerson = ((parseInt(bill) * parseInt(tip)) / 100) / parseInt(numberOfPerson);
                let billPerPerson = (parseInt(bill) + ((parseInt(bill) * parseInt(tip)) / 100)) / parseInt(numberOfPerson);
                document.getElementById("tip_per_person").innerHTML = "$" + tipPerPerson.toFixed(2);
                document.getElementById("bill_per_person").innerHTML = "$" + billPerPerson.toFixed(2);
            }
        } catch (error) {
            alert(error.message);
        }

    },

    incrementNop: function () { // increment the value of Number of person by 1
        document.getElementById("NOP").stepUp();
    },
    decrementNop: function () { // decrement the value of Number of person by 1
        document.getElementById("NOP").stepDown();
    },
    incrementTip: function () { // increment the value of tip percent by 1
        document.getElementById("tip").stepUp();
    },
    decrementTip: function () { // decrement the value of tip percent by 1
        document.getElementById("tip").stepDown();
    }
}