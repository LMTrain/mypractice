import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      <FriendCard
        name={friends[0].name}
        image={friends[0].image}        
      />
      <FriendCard
        name={friends[1].name}
        image={friends[1].image}        
      />
      <FriendCard
        name={friends[2].name}
        image={friends[2].image}        
      />
      <FriendCard
        name={friends[3].name}
        image={friends[3].image}        
      />
      <FriendCard
        name={friends[4].name}
        image={friends[4].image}        
      />
      <FriendCard
        name={friends[5].name}
        image={friends[5].image}        
      />
      <FriendCard
        name={friends[6].name}
        image={friends[6].image}        
      />
      <FriendCard
        name={friends[7].name}
        image={friends[7].image}        
      />
      <FriendCard
        name={friends[8].name}
        image={friends[8].image}        
      />
      <FriendCard
        name={friends[9].name}
        image={friends[9].image}        
      />
      <FriendCard
        name={friends[10].name}
        image={friends[10].image}        
      />
      <FriendCard
        name={friends[11].name}
        image={friends[11].image}    
      />      
    </Wrapper>
  );
}

export default App;
