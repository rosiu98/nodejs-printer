const escpos = require('escpos')

escpos.SerialPort = require('escpos-serialport')

const device = new escpos.SerialPort('/dev/usb/lp0')
const printer = new escpos.Printer(device)

printer.text('TEST 12342342')