function idCard() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var address = document.getElementById("address");
    var age = document.getElementById("age");
    var phoneNumber = document.getElementById("phoneNumber");

    var numberArray = [parseInt( age.value), parseInt( phoneNumber.value)];

    var valid = true;

    var items = document.body.getElementsByTagName("*");
    for (var x = 0; x < items.length; x++)
    {
        if (items[x].nodeName === "INPUT")
        {
            if(items[x].value.length === 0)
            {
                valid = false;
            }
        }
    }

    if (valid)
    {
        document.getElementById("postFullName").innerHTML = firstName.value + " " + lastName.value;//FULLNAME
        document.getElementById("postAddress").innerHTML = address.value;//ADDRESS

        console.log(numberArray.length)
        for (var i = 0; i < numberArray.length; i++) {
            if (numberArray[i] <= 100) {
                document.getElementById("postAge").innerHTML = "Age: " + numberArray[0];//AGE

            }
            else if (numberArray[i] >= 100) {
                document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + numberArray[1];//Phone Number

            }

        }
    }
    else
    {
        alert("All Fields Are Required!");
    }
    
}