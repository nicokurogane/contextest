import React from "react";
import LanguageContext from "../contexts/LanguageContext"; //the Context OBJECT WE NEED


class Button extends React.Component {
  // 1. we need to hook up the context object first before using it, like this (contextType name is amust)
  static contextType = LanguageContext;

  render() {
    //2. to access to the object Context, we do it like this
    const text = this.context.language === "english" ? "Submit" : "Voorleggen";
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
