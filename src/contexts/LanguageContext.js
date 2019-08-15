import React from "react";

// that english String is 1 of the ways to put data inside a Context object (the default value way)
//any valid JS value its okay
const Context = React.createContext("dutch");

export class LanguageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
