import React, { useState } from "react";
import Wrapper from './Wrapper';

function App() {

  const [isOpen, setIsOpen] = useState(true)


  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const buttonText = isOpen ? "close" : "open";

  return (
    <div className='App'>
      <button onClick={toggleModal}>{buttonText}</button>

      <Wrapper title="This is a Best part of React" isOpen={isOpen}>
        <div>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error reiciendis laborum laboriosam nobis quos aperiam molestiae sapiente voluptatibus repudiandae, harum facilis in quae eius sint perferendis numquam omnis, nesciunt deleniti alias magni! Consequuntur, dolorem, veniam est eveniet in unde corporis iste sed error alias, illum id incidunt facere nihil minus ipsum ad! Harum nisi vitae nobis veniam quis obcaecati!</p>
        </div>
      </Wrapper>

      <Wrapper title="no Children" isOpen={isOpen} />


    </div>
  );
}

export default App;
