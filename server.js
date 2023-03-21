const escpos = require('escpos')

escpos.USB = require('escpos-usb')

const device = new escpos.Serial('/dev/usb/lp0')
const printer = new escpos.Printer(device)

printer.text('TEST 12342342')