//require any needed modules
let express = require('express')

//declare app variable
let app = express()

//declare routes
app.get('/', (req, res) => {
	res.send('this is a test response')
})

//listen on a port

app.listen(3000)