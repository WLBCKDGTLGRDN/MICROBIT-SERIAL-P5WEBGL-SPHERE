import json
import time
import serial

conn = serial.Serial('/dev/ttyACM0', 115200, timeout=None, bytesize=8)
conn.flushInput()
conn.flushOutput()
print(conn.name)

mbposjson = {

        "Ax" : 0,
        "Ay" : 0,
        "Az" : 0,
        "Cx" : 0,
        "Cy" : 0
    }

while True:
    data_raw = conn.readline()
    print(data_raw)
    datastrip = data_raw.decode("utf-8").strip('b:\r\n ')
    #print(datastrip)
    datastripjson = datastrip.split()
    #print(datastripjson)

    mbposjson = {

        datastripjson[0] : datastripjson[1],
        datastripjson[2] : datastripjson[3],
        datastripjson[4] : datastripjson[5],
        datastripjson[6] : datastripjson[7],
        datastripjson[8] : datastripjson[9]
    }

    with open('mbposjson.json', 'w') as MBPOSJSON:
        json.dump(mbposjson, MBPOSJSON, indent=4, sort_keys=True)
    time.sleep(0.2)

    print(mbposjson)
