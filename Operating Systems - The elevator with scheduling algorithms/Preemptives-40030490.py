'''
||| In the name of ALLAH |||
    The Elevator - Operating systems - Final project
    Author: Seyed mahdi mahdavi mortazavi (theMHD) - 40030490
    THE PYTHON CODE WITH ONLY PREEMPTIVE ALGORITHMS.

    --------------------------- << The Elevator >> ---------------------------
    Designing an elevator scheduling using python;
    With this << preemptive >> scheduling algorithms:
        - Shortest remaning time first (SRTF)
        - Round Robin (RR)
        -------- << In JS file >> --------
        - First come first serve (FCFS)
        - Shortest job first (SJF)
'''

# Shotest-remaining time first (SRTF) ------------------------------------------------------------
def srtf(self, psngrs, gantt_chart):
    pass

# Round Robin (RR) -------------------------------------------------------------------------------
def round_robin(Qft, num, psngrs):
    temp_array = [0 for i in range(num)]
    turnaround_time = 0  # total turnaround time.
    for i in range(num):
        temp_array[i] += (Qft * 3)  # each quantom floor is 3 seconds.
        turnaround_time += temp_array[i]
    return turnaround_time

# Main Part --------------------------------------------------------------------------------------
passengers_floors = []  # different between start and end floor for each passenger.
alg = int(input("please choose your algorithm (1 --> RR), (2 --> SRTF): "))
QF = int(input("Please enter the quantom floor (each quantom floor: 3 seconds): "))
number = int(input("Please enter number of passengers: "))
for Pi in range(number):  # Pi: ith-passenger
    f1 = int(input(f"Please enter the source floor of passenger {Pi}: "))        # start floor 
    f2 = int(input(f"Please enter the destinantion floor of passenger {Pi}: "))  # end floor
    passengers_floors.append(abs(f2 - f1))  # floor different
if alg == 1:
    print("--------------------------------------------------------------------------")
    print("The total turnaround time is: ", round_robin(QF, number, passengers_floors))