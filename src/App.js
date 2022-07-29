import "./App.css";
// import Header from "./Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChatView from "./ChatView";
import Home from "./Home";
import Profile from "./Profile";
// import { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "./firebase";

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
  // const [people, setPeople] = useState([]);
  // const peopleCollectionRef = collection(db, "people");
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(peopleCollectionRef);
  //     setPeople(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getUsers();
  // }, []);
}

export default App;

/*{ {people.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name:{people.name}</h1>
            <h1>Age:{user.age}</h1>
          </div>
        );
      })}} */

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
