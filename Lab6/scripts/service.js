// Function to validate phone number
function phoneMask() { 
    var num = $(this).val().replace(/\D/g,''); 
    $(this).val('(' + num.substring(0,3) + ') ' + num.substring(3,6) + '-' + num.substring(6,10)); 
}

// Function to validate credit card number
function creditValid() { 
    var num = $(this).val().replace(/\D/g,''); 
    $(this).val(num.substring(0,4) + ' ' + num.substring(4,8) + ' ' + num.substring(8,12) + ' ' + num.substring(12,16)); 
}

// Function to validate CVV code
function codeValid() { 
    var num = $(this).val().replace(/\D/g,''); 
    $(this).val(num.substring(0,3)); 
}

// Function that return the week day of the date selected
function getDayOfTheWeek() {
    var x = document.getElementById("dateInput").value;
    var fields = x.split('/');
    var new_date = new Date();
    new_date.setFullYear(fields[2], fields[0]-1, fields[1]);
    var day_of_week = new_date.getDay();
    return day_of_week;
}

// Function to validate doctors availability
function checkDoctorAvailability(day) {
    switch (day) {
        case 0:
            document.getElementById('lauren-button').disabled = true;
            document.getElementById('lee-button').disabled = true;
            document.getElementById('robert-button').disabled = false;
            document.getElementById('maria-button').disabled = true;
            break;
        case 1:
            document.getElementById('lauren-button').disabled = false;
            document.getElementById('lee-button').disabled = false;
            document.getElementById('robert-button').disabled = true;
            document.getElementById('maria-button').disabled = true;
            break;
        case 2:
            document.getElementById('lauren-button').disabled = false;
            document.getElementById('lee-button').disabled = true;
            document.getElementById('robert-button').disabled = true;
            document.getElementById('maria-button').disabled = false;
            break;
        case 4:
            document.getElementById('lauren-button').disabled = false;
            document.getElementById('lee-button').disabled = true;
            document.getElementById('robert-button').disabled = false;
            document.getElementById('maria-button').disabled = false;
            break;
        case 5:
            document.getElementById('lauren-button').disabled = true;
            document.getElementById('lee-button').disabled = false;
            document.getElementById('robert-button').disabled = true;
            document.getElementById('maria-button').disabled = false;
            break;
        case 6:
            document.getElementById('lauren-button').disabled = true;
            document.getElementById('lee-button').disabled = false;
            document.getElementById('robert-button').disabled = false;
            document.getElementById('maria-button').disabled = true;
            break;
    
        default:
            break;
    }
}

// Using date restrictions on datepicker
// Wednesday is day 3 that is a closed day
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    if (date.getDay() === 3)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}


// JQuery "LISTENING" 
$(document).ready(function(){

    // phone validation
    $("#phone").keyup(phoneMask);
    $("#phone").on("change", function(){
        console.log(document.getElementById("phone").value);
        var x = document.getElementById("phone").value.length;
        console.log(x);
        if (x<14){
            swal("Wrong phone number format", "Please finish inserting all of the 10 digits of your phone number", "warning");
            $("#phone").val("");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    // Credit card validation
    $("#debit").keyup(creditValid);
    $("#debit").on("change", function(){
        console.log(document.getElementById("debit").value);
        var x = document.getElementById("debit").value.length;
        console.log(x);
        if (x<19){
            swal("Wrong credit card number format" , "Please finish inserting the 16 digits of your credit card number", "warning");
            $("#debit").val("");
            $("#debit").addClass("error");
        }
        else {
            $("#debit").removeClass("error");
        }
    });

    // CVV code validation
    $("#code").keyup(codeValid);
    $("#code").on("change", function(){
        var x = document.getElementById("code").value.length;
        if (x<3){
            swal("Wrong code format" , "Please finish inserting your CVV", "warning");
            $("#code").val("");
            $("#code").addClass("error");
        }
        else {
            $("#code").removeClass("error");
        }
    });

    // Booking date validation
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2021
            minDate: new Date('06/01/2021'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );

    // Validating the input date of the credit card
    $( "#dateInputCredit" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2021
            minDate: new Date('06/01/2021'),
            maxDate: '+60M',
        }
    );

    // Checking the availability of doctors and disabling if needed
    $("#dateInput").on("change", function(){
        var day = getDayOfTheWeek();
        checkDoctorAvailability(day);
    });

    // https://www.w3schools.com/jquery/jquery_events.asp
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#phone").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });


});