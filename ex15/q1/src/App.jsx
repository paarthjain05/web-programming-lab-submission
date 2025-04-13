import React, { useState } from "react";

// Component Imports
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import StyledButton from "./components/StyledButton";
import LifecycleDemo from "./components/LifecycleDemo";
import Parent from "./components/Parent";
import CounterState from "./components/CounterState";
import CounterReducer from "./components/CounterReducer";
import JokeFetcher from "./components/JokeFetcher";
import FocusInput from "./components/FocusInput";
import ThemeToggler from "./components/ThemeToggler";
import FormUseState from "./components/FormUseState";
import FormUseRef from "./components/FormUseRef";

// Component Menu Map
const componentMap = {
  "Header + Content + Footer": (
    <>
      <Header title="Welcome to the React App" />
      <Content />
      <Footer />
    </>
  ),
  "StyledButton": <StyledButton />,
  "LifecycleDemo": <LifecycleDemo />,
  "Props Example": <Parent />,
  "Counter (useState)": <CounterState />,
  "Counter (useReducer)": <CounterReducer />,
  "Joke Fetcher (useEffect)": <JokeFetcher />,
  "Focus Input (useRef)": <FocusInput />,
  "Theme Toggler (useContext)": <ThemeToggler />,
  "Form (useState)": <FormUseState />,
  "Form (useRef)": <FormUseRef />,
};

function App() {
  const [activeComponent, setActiveComponent] = useState("Header + Content + Footer");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Lab Component Demo</h1>

      <div style={{ marginBottom: "20px" }}>
        {Object.keys(componentMap).map((key) => (
          <button
            key={key}
            onClick={() => setActiveComponent(key)}
            style={{
              margin: "5px",
              padding: "10px",
              cursor: "pointer",
              backgroundColor: activeComponent === key ? "#007bff" : "#f0f0f0",
              color: activeComponent === key ? "#fff" : "#000",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {key}
          </button>
        ))}
      </div>

      <div
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#fafafa",
        }}
      >
        {componentMap[activeComponent]}
      </div>
    </div>
  );
}

export default App;
