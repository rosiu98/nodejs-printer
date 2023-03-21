const printer = require("node-thermal-printer");
printer.init({
    type: 'epson',
    interface: '/dev/usb/lp0'
})
async function example() {
const isConnected = await printer.isPrinterConnected();
console.log('Printer connected:', isConnected);

printer.printIn('Hello world')
}

example()