const printer = require("printer")
const fs = require("fs")

const express = require("express")
const app = express()
const port = 3000

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post("/find", async (req, res) => {
    const searchItem = await req.body.data_input
    console.log(searchItem)
  
    
  printer.printDirect({data:`${searchItem} \n\n\n\n\n\n\n\n\n\n\n\n`,
  printer: printerName, 
  type: 'RAW',
  success:function(jobID){
      console.log("sent to printer with ID: " + jobID );
  },
  error:function(err){console.log(err);}
})

    res.send(`We can search for this item on our backend:  ${searchItem}`)

  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// console.log(printer.getPrinters())
const printerName = printer.getDefaultPrinterName()
// console.log(printer.getPrinter(printerName))


// Printing from variable

const data = "TEST\nTEST\nTEST                      1234\n Marzena Rosiek"

// printer.printDirect({data:data,
//     printer: printerName,
//     type: 'RAW',
//     success:function(jobID){
//         console.log("sent to printer with ID: " + jobID );
//     },
//     error:function(err){console.log(err);}
// })

// Printing from text file

// printer.printDirect({data:fs.readFileSync("./text.txt"),
//     printer: printerName,
//     type: 'RAW',
//     success:function(jobID){
//         console.log("sent to printer with ID: " + jobID );
//     },
//     error:function(err){console.log(err);}
// })