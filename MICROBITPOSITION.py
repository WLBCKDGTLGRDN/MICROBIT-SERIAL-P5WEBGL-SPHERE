from microbit import *

while True:
    ax = accelerometer.get_x()
    ay = accelerometer.get_y()
    az = accelerometer.get_z()
    cx = compass.get_x()
    cy = compass.get_y()
    print("Ax ", ax, " Ay ", ay, " Az ", az, " Cx ", cx, " Cy ", cy)
    sleep(200)