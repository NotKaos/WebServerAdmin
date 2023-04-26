function passwordStrength() {
    let password = document.getElementById("password").value; //retreives the password
    let strength_points=0

//below uses regex to scan the password input
    if(/[a-z]/.test(password) == true){// checks for lowercase letters
        strength_points += 1;
    }

    if(/[A-Z]/.test(password) == true){// checks for uppcase letters
        strength_points += 1;
    }

    if (/[0-9]/.test(password) == true) {//checks for numbers
        strength_points += 1;
    }

    if (/[$@#&!?%*()-+=/£]/.test(password) == true) {//checks for special characters
        strength_points += 1;
    }

//below displays the strength of the password depending on how many points it gained above
    if (strength_points === 0){
        document.getElementById('strength').innerHTML = 'Password is very weak'
        document.getElementById('strength').style.color = "red"
        document.getElementById('strengthDivBar').style.background = "red"
        document.getElementById('strengthDivBar').style.visibility = "visible"
        document.getElementById('strengthDivBar').style.width = "33%"

    }else if (strength_points == 1){
        document.getElementById('strength').innerHTML = 'Password is very weak'
        document.getElementById('strength').style.color = "red"
        document.getElementById('strengthDivBar').style.background = "red"
        document.getElementById('strengthDivBar').style.visibility = "visible"
        document.getElementById('strengthDivBar').style.width = "33%"

    }else if (strength_points == 2){
        document.getElementById('strength').innerHTML = 'Password is medium strength'
        document.getElementById('strength').style.color = "orange"
        document.getElementById('strengthDivBar').style.visibility = "visible"
        document.getElementById('strengthDivBar').style.background = "orange"
        document.getElementById('strengthDivBar').style.width = "66%"
    }else if (strength_points == 3){
        document.getElementById('strength').innerHTML = 'Password is strong'
        document.getElementById('strength').style.color = "green"
        document.getElementById('strengthDivBar').style.visibility = "visible"
        document.getElementById('strengthDivBar').style.background = "green"
        document.getElementById('strengthDivBar').style.width = "100%"

    }else if (strength_points == 4){
        document.getElementById('strength').innerHTML = 'Password is very strong'
        document.getElementById('strength').style.color = "green"
        document.getElementById('strengthDivBar').style.background = "green"
        document.getElementById('strengthDivBar').style.visibility = "visible"
        document.getElementById('strengthDivBar').style.width = "100%"

    }
}