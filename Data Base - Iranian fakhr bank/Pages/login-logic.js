// change form display ------------------------------------------------------
function tab_work(bool) {
    if (bool)
        document.getElementById('window-01').style.display = 'block';
    else
        document.getElementById('window-01').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('window-01'))
        document.getElementById('window-01').style.display = "none";
}

// input corrections ------------------------------------------------------
function check_validation(self) {
    var uelement = document.getElementById("uname");
    var pelement = document.getElementById("pass");
    if (uelement.value.includes('"') || uelement.value.includes("'") || uelement.value.includes("/") ||
        uelement.value.includes("-") || uelement.value.includes(";") || uelement.value.includes("+"))
        alert("username is invalid");
    else if (pelement.value.includes('"') || pelement.value.includes("'") || pelement.value.includes("/") ||
        pelement.value.includes("-") || pelement.value.includes(";") || pelement.value.includes("+"))
        alert("password is invalid");
    else 
        self.type = "submit";
}

// change password visability ------------------------------------------------------
function chnage_pass_type(self) {
    if (self.type == "password")
        self.type = "text";
    else
        self.type = "password";
}