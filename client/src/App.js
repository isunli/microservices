import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
function App() {
  return (
    <div className="container">
      <PostCreate />
      <hr />
      <h1>Posts!!</h1>
      <PostList />
    </div>
  );
}

export default App;
