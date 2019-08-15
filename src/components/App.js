import React from "react";
import UserCreate from "./UserCreate";
import LanguageSelector from "./LanguageSelector";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext"; //1. to use Context Provider, we start the same, import the context

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          {/*then we procced to wrap the interesed parent with {ObjectContextNAME}.Provider 
           then we use the prop 'value' to pass the value we want to put inside the object Context
           thi is how we dot it dinamically
           
           here is a gotcha: Each time Context.Provider is used, it creates a different "pipe" of information 
           */}
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
