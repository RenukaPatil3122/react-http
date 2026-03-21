import logo from "./logo.svg";
import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import ClassCounterOne from "./components/ClassCounterOne";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <CounterOne />

      {/* <UserContext.Provider value={"Renuka"}>
        <ChannelContext.Provider value={"Patil"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <DataFetching /> */}

      {/* <IntervalHookCounter someProp="hello" />
      <IntervalClassCounter /> */}

      {/* <MouseContainer /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}

      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}

      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}

      {/* <PostList /> */}
      {/* <PostForm /> */}
    </div>
  );
}

export default App;
