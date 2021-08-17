import "./styles.css";
import Card from "./components/card";
import Displayer from "./components/displayer";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState({ data: "", date: "" });

  const notices = [
    <Card
      text={`A & S - NOTICE OF PUBLIC SALE:John's Towing`}
      date={"11/12/13"}
      stateChange={(e) =>
        setState({ data: notices[0].props.text, date: notices[0].props.date })
      }
    />,
    <Card
      text={`F & S - NOTICE TO CREDITORS\n All persons, firms and`}
      date={"11/12/14"}
      stateChange={(e) =>
        setState({ data: notices[1].props.text, date: notices[1].props.date })
      }
    />
  ];

  return (
    <>
      {/* Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly"
        }}
      >
        {/* Col 1 */}
        <div className="App">
          <div>col 1</div>
          <div>{notices}</div>
        </div>
        {/* Col 2 */}
        <div className="App">
          <div>col 2</div>
          <Displayer text={state.data} date={state.date} />
        </div>
      </div>
    </>
  );
}
