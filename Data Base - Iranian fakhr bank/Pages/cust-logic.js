// Get current date ------------------------------------------------------
function getCurrTime() {
    var currDate = new Date();
    const option = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    var time = currDate.toLocaleTimeString();
    var date = currDate.toLocaleDateString("fa-IR", option);
    if (time.includes("PM"))
        var dateTime = "بعد از ظهر";
    else
        var dateTime = "قبل از ظهر";
    document.getElementById("Time#01").innerHTML = "ساعت: " + time.slice(0, 8) + " - " + dateTime;
    document.getElementById("Date#01").innerHTML = "تاریخ: " + date.slice(13, ) + " - " + date.slice(10, 12) + date.slice(4, 10) + date.slice(0, 4);
}
setInterval(function(){getCurrTime()}, 1000);

// Work with form tabs ------------------------------------------------------
function tabs_work(num, bool) {
    switch (num) {
        case 1:
            if (bool) {
                document.getElementById('accounts').style.display = 'none';
                document.getElementById('loans').style.display = 'none';
                document.getElementById('transactions').style.display = 'none';
                document.getElementById('dashbord').style.display = 'block';
            } else
                document.getElementById('dashbord').style.display = 'none';
            break;
        case 2:
            if (bool) {
                document.getElementById('dashbord').style.display = 'none';
                document.getElementById('loans').style.display = 'none';
                document.getElementById('transactions').style.display = 'none';
                document.getElementById('accounts').style.display = 'block';
            } else
                document.getElementById('accounts').style.display = 'none';
            break;
        case 3:
            if (bool) {
                document.getElementById('dashbord').style.display = 'none';
                document.getElementById('accounts').style.display = 'none';
                document.getElementById('loans').style.display = 'none';
                document.getElementById('transactions').style.display = 'block';
            } else
                document.getElementById('transactions').style.display = 'none';
            break;
        case 4:
            if (bool) {
                document.getElementById('dashbord').style.display = 'none';
                document.getElementById('accounts').style.display = 'none';
                document.getElementById('transactions').style.display = 'none';
                document.getElementById('loans').style.display = 'block';
            } else
                document.getElementById('loans').style.display = 'none';
            break;
        default:
            break;
    }
}

// active changes saving ------------------------------------------------------
function active_changes_dash(self) {
    let elem = document.getElementById("save-changes-dash");
    elem.type = "submit";
    elem.disabled = false;
    elem.style.backgroundColor = "rgba(63, 45, 3, 0.7)";
    onmouseover = ""
}

// change password visability ------------------------------------------------------
function chnage_pass_type(self) {
    if (self.type == "password")
        self.type = "text";
    else
        self.type = "password";
}

// change profile photo ------------------------------------------------------
var loadFile = function (event, self) {
    if (self.value.includes("png") || self.value.includes("jpg")) {
        var photo = document.getElementById("photo");
        photo.src = URL.createObjectURL(event.target.files[0]);
    } else
        alert("Invalid file type; Please select an image (png/jpg) file;");
};

// Work with add tabs ------------------------------------------------------
function form_work(num, bool) {
    if (num == 1) {
        if (bool)
            document.getElementById('trans-window').style.display = 'block';
        else
            document.getElementById('trans-window').style.display = 'none';
    } else if (num == 2) {
        if (bool)
            document.getElementById('loan-window').style.display = 'block';
        else
            document.getElementById('loan-window').style.display = 'none';
    }
}

window.onclick = function(event) {
    if (event.target == document.getElementById('trans-window')) 
        document.getElementById('trans-window').style.display = "none";
    else if (event.target == document.getElementById('loan-window')) 
        document.getElementById('loan-window').style.display = "none";
}

// Add forms to list ------------------------------------------------------
function trans_to_list() {
    var src = document.getElementById("source");
    var dest = document.getElementById("dest");
    var count = document.getElementById("count");
    var currTime = document.getElementById("Time#01").innerHTML;
    var currDate = document.getElementById("Date#01").innerHTML;

    if (src.value != "" && dest.value != "" && count.value != "") {
        var child = document.createElement("pre");
        child.innerHTML = "   شماره حساب مبدا " + src.value + "  |  شماره حساب مقصد " + dest.value + "  |  به مبلغ " + count.value + " ریال  |  در " + currTime + "  |  در " + currDate + "   ";
        child.style.fontFamily = 'B Nazanin';
        document.getElementById("trans-list").appendChild(child);
    } else 
        alert("لطفا موارد مورد نیاز را وارد کنید");

    src.value = "";
    dest.value = "";
    count.value = "";
}

function loans_to_list() {
    alert("asf")
}