import net from "net";

const client = net.createConnection({ port: 8080 }, () => {
    console.log("Connected to server!");
    client.write("Hello From client!\n");
})

client.on("data", (data)=>{
    console.log("Server says: " + data.toString());
})

client.on("end", () => {
    console.log("Disconnected from server");
})