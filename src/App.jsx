import "./App.css";
import Clicker from "./components/Clicker";
import Counter from "./components/Counter";
import Greetings from "./components/Greetings";
import Header from "./components/Header";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Inputer from "./components/Inputer";
import WellcomeMessage from "./components/WellcomeMessage";
import Dashboard from "./components/Dashboard";
import Notification from "./components/Notification";


function App() {
  return (
    <>
      <ThemeSwitcher />
      <Clicker />
      <WellcomeMessage />
      <Notification hasNewMessages ={true} />
      <Dashboard isOnline={false} />
      <Header />
      <Greetings name="Farhan" surname="Omar" />
      <Counter />
      <Greetings name="Farhan" surname="Omar" />
      <Inputer />
    </>
  );
}

export default App;
