import net from "net";

const server = net.createServer((socket) => {
    console.log("Client connected");
    socket.write("Hello From server!\n");
    socket.on("data", (data)=>{
    console.log("Client says: " + data.toString());
    })
    socket.on("end", () => {
        console.log("Disconnected from Client");
    })
})




server.listen(8080, () => {
    console.log("Server listening on port 8080");
})