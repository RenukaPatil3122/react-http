import logo from "./logo.svg";
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

function App() {
  return (
    <div className="App">
      {/* <ClassMouse /> */}
      <HookMouse />

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
