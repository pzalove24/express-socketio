import "./App.css";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function App() {
  const sendMessage = () => {
    socket.emit("send_message", { message: "hellso" });
  };

  return (
    <div className="App">
      <button onClick={sendMessage}>click me</button>
    </div>
  );
}

export default App;
