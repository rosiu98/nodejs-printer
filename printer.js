const {ThermalPrinter} = require("node-thermal-printer");
async function example() {
const printer = new ThermalPrinter({
    type: 'epson',
    interface: '/dev/usb/lp0'
})
const isConnected = await printer.isPrinterConnected();
console.log('Printer connected:', isConnected);

printer.printIn('Hello world')

}
example()