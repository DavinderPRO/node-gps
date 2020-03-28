// dmesg | grep tty
//ls /dev/serial/by-path
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')
const GPS = require('gps');
const port = new SerialPort('/dev/ttyUSB1', { baudRate: 9600 })
const parser = port.pipe(new Readline({ delimiter: '\r\n' }))
const gps = new GPS;
parser.on('data', function (data) {
    gps.update(data);
    //gps.updatePartial(data);
});

gps.on('data', function (data) {
    console.log(data);
});


