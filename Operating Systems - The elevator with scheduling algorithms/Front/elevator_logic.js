/*
    ||| In the name of ALLAH |||
    The Elevator - Operating systems - Final project
    Author: Seyed mahdi mahdavi mortazavi (theMHD) - 40030490
    Attention: this code is only manages non-preemptive algorithms

    --------------------------- << The Elevator >> ---------------------------
    Designing an elevator using Javascript;
    With this scheduling algorithms:
        - First come first serve (FCFS)
        - Shortest job first (SJF)
        >>> See this two preemptive algorithms in the python file;
        - Shortest remaning time first (SRTF)
        - Round Robin (RR)
*/

// The enter page ----------------------------------------------------------------------
var currTime = null;
var timeFlag = true;

function getCurrTime() {
    var currDate = new Date();
    var time = currDate.toLocaleTimeString();
    document.getElementById("clock").innerHTML = time;
}

function digiClock() {
    if (timeFlag == true)
        currTime = setInterval(function() {getCurrTime();}, 1000);
    else
        clearInterval(currTime);
}

function aboutMe() {
    alert("Seyed Mahdi Mahdavi Mortazavi (theMHD) - 40030490"
     + "\n" + "Github repos: https://github.com/theMHD-120");
}

// The elevator page -------------------------------------------------------------------
function elev_tab(bool) {
    if (bool) {
        document.getElementById('enter_options').style.display = 'none';
        document.getElementById('space').style.borderRadius = "60px";
        document.getElementById('space').style.width = "700px";
        document.getElementById('space').style.height = "680px";
        document.getElementById('elev_options').style.display = "block";
    } else {
        document.getElementById('elev_options').style.display = "none";
        document.getElementById('space').style.borderRadius = "50%";
        document.getElementById('space').style.width = "650px";
        document.getElementById('space').style.height = "650px";
        document.getElementById('enter_options').style.display = 'block';

        document.getElementById("alg_selector").disabled = false;
        document.getElementById("source").value = "";
        document.getElementById("floor").value = "0";
        document.getElementById("dest").value = "";
        finalArray = [];
        passNumber = 0;
        runQueue = [];
    }
}

// The elevator workspace --------------------------------------------------------------
function control_number(self) {
    if (self.value < 0)
        self.value = 0;
}

var selectedAlg = "";
function changeAlg(self) {
    selectedAlg = self.options[self.selectedIndex].value;
}

var runQueue = [];
var passNumber = 0;
function toQueue() {
    var src = document.getElementById("source").value;
    var dest = document.getElementById("dest").value;
    if (src == "" || dest == "")
        alert("Please enter both source and destinantion;");
    else if (selectedAlg != "1" && selectedAlg != "2" && selectedAlg != "3" && selectedAlg != "4") 
        alert("Please select a scheduling algorithm;");
    else if (src == dest)
        alert("Please enter different source and destinantion;");
    else {
        document.getElementById("alg_selector").disabled = true;
        runQueue.push([Math.abs(Number(dest) - Number(src)), Number(src), Number(dest), passNumber++]);
        alert("Passenger Number #" + passNumber + " added;" + "\nSource: " + src + " | Dest: " + dest);
    }
}

// Passenger running -------------------------------------------------------------------
function move_elevator(pass) {
    var floorNum = Number(document.getElementById("floor").value);
    let source = pass[1];
    let dest = pass[2];

    if (floorNum < source) {
        var run1 = setInterval(function() {
            document.getElementById("floor").value = (floorNum += 1).toString();
            if (floorNum == source) {
                clearInterval(run1);
                if (floorNum > dest) {
                    var run2 = setInterval(function() {
                        document.getElementById("floor").value = (floorNum -= 1).toString();
                        if (floorNum == dest) {
                            clearInterval(run2);
                        }
                    }, 3000);
                } else if (floorNum < dest) {
                    var run3 = setInterval(function() {
                        document.getElementById("floor").value = (floorNum += 1).toString();
                        if (floorNum == dest) {
                            clearInterval(run3);
                        }
                    }, 3000);
                }
            }
        }, 3000);
    } else if (floorNum > source) {
        var run4 = setInterval(function() {
            document.getElementById("floor").value = (floorNum -= 1).toString();
            if (floorNum == source) {
                clearInterval(run4);
                if (floorNum > dest) {
                    var run5 = setInterval(function() {
                        document.getElementById("floor").value = (floorNum -= 1).toString();
                        if (floorNum == dest) {
                            clearInterval(run5);
                        }
                    }, 3000);
                } else if (floorNum < dest) {
                    var run6 = setInterval(function() {
                        document.getElementById("floor").value = (floorNum += 1).toString();
                        if (floorNum == dest) {
                            clearInterval(run6);
                        }
                    }, 3000);
                }
            }
        }, 3000);
    } 
}

var finalArray = [];  // to save the order of processes at the end;
function run_elev_np(passenger) {  // np: non-preemptive algorithms;
    move_elevator(passenger);
    finalArray.push("P" + passenger.slice(-1).toString());
}   

function letsRun() {
    if (selectedAlg == "2")
        runQueue = runQueue.sort(function(a, b) { return a[0] - b[0]; });

    runQueue.forEach(run_elev_np);
    alert("Passengers: " + finalArray);
}