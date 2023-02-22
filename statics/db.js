const {readFileSync} = require("fs")

function readUser() {
    try{
        const data = readFileSync("./db.json") || 
    }
}

function saveUsers() {
    try {

        const data = JSON.stringify(users, null, 4)
    }
    
}