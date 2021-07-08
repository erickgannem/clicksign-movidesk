import App from "./app"

const server = new App().server
const PORT = process.env.PORT || 3000
const feedback = `Listening on port ${PORT}`

server.listen(PORT, () => process.stdout.write(feedback))