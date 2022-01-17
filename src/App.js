import Form from "./form";
import { AudioList } from "./audios";

function App() {
  return (
    <div className="App">
      <header className="Audio Hub">
        <Form />
        <AudioList />
      </header>
    </div>
  );
}

export default App;
