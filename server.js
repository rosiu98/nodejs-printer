// const escpos = require('escpos')

// escpos.SerialPort = require('escpos-serialport')

// const device = new escpos.SerialPort('/dev/usb/lp0')
// const printer = new escpos.Printer(device)

// printer.text('TEST 12342342')
const SerialPort = require('serialport')
const escpos = require('escpos');
escpos.SerialPort = require('escpos-serialport')

const options = { encoding: "GB18030" /* default */ }
const device = new escpos.SerialPort('/dev/usb/lp0', {
  baudRate: 19200,
  stopBit: 1
});

const printer = new escpos.Printer(device, options);

device.open(function (err) {
    printer
     .align("CT") // align center
     .style("B") // font weight bold
     .size(0.1, 0.1) // text size
     .text("Your big test text")
     .size(0.01, 0.01)
     .text("Your small test text")
     .cut()
     .close();
  })