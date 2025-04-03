import net from "net";
import { exec } from "child_process";

const port = 3000; // Puerto donde corre React
const maxRetries = 20;
let retries = 0;

function checkServer() {
  const client = new net.Socket();
  client.connect({ port }, () => {
    console.log("✅ Frontend está listo, iniciando Electron...");
    client.end();
    exec("cd ../frontend && npm run electron");
  });

  client.on("error", () => {
    retries++;
    if (retries < maxRetries) {
      console.log(`⏳ Esperando que React inicie... (${retries}/${maxRetries})`);
      setTimeout(checkServer, 3000);
    } else {
      console.error("❌ Error: El frontend no inició.");
    }
  });
}

checkServer();
