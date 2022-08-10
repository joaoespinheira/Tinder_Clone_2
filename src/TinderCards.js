import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

//setPeople([...people, "joao", "espinheira"])

function TinderCards() {
  const [people, setPeople] = useState([]);
  const peopleCollectionRef = collection(db, "people");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(peopleCollectionRef);
      setPeople(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [people]);

  // const [people, setPeople] = useState([
  //   {
  //     name: "Angelina Jolie",
  //     url: "https://br.web.img3.acsta.net/pictures/19/10/15/22/20/5747748.jpg",
  //   },
  //   {
  //     name: "mark zuckerberg",
  //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg/1200px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg",
  //   },
  // ]);

  // {
  //   people.map((user) => {
  //     return (
  //       <div>
  //         {" "}
  //         <h1>Name:{people.name}</h1>
  //         <h1>Age:{people.age}</h1>
  //       </div>
  //     );
  //   });
  // }
  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
