import "./App.css";
import Countdown from "./LaunchCountdown";

export default function App() {
  return (
    <>
      <h1>Dana&apos;s Countdown</h1>
      <div className="app">
        <Countdown />
        <Countdown />
      </div>
    </>
  );
}
