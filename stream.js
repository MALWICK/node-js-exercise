const { log } = require("console");
const { writeFile, open } = require("fs");

function execute() {
  open( "./statics/couter.txt", "w", function(err, fb){
    if(err){
        throw new Error(err);
    }
    console.time("track");
  });
  for (let i = 0; i < 1000000; i++) {
    write(fd, "w",  `${i}  ` , () => {})  
  }
}
 