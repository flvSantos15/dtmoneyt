import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <GlobalStyles/>
    </div>
  );
}