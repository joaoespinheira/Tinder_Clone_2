import "./App.css";
// import Header from "./Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChatView from "./ChatView";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chatView" element={<ChatView />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
// function App() {
//   return (
//     <div className="App">

//       <Routes>
//         <Route exact path="/chat" element={<ChatView />}>
//           {/* <span>i m chat </span>
//           <ChatView /> */}
//         </Route>
//         <Route exact path="/">
//           <h1>i m homepage</h1>
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;
