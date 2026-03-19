import logo from "./logo.svg";
import "./App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";

function App() {
  return (
    <div className="App">
      <HookCounterTwo />
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}

      {/* <PostList /> */}
      {/* <PostForm /> */}
    </div>
  );
}

export default App;
