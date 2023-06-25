import * as express from "express"
import * as cors from "cors"
import * as bodyParser from "body-parser"

const app = express()
const port = 7283

let ring: string[] = []

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
	res.json(ring)
})

app.post("/press", (req, res) => {
	const name = req.body.name
	if (name) {
		ring.push(name)
	}

	res.json({ status: "success" })
})

app.get("/reset", (req, res) => {
	ring = []

	res.json({ status: "success" })
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
