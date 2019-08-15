import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Field extends React.Component {
  renderSubmitText(value) {
    console.log(value);

    return value.language === "english" ? "Name" : "Naam";
  }

  render() {
    return (
      <div className="ui field">
        {/* para utilizar Consumers, accedemos al objeto consumer que tiene Context
           y luego pasamos como un children, una funcion el cual puede acceder al
           valor, este metodo nos permite utilizar varios Context a a vez, en vez de solo uno
           con el metodo de asignar contextType*/}
        <ColorContext.Consumer>
          {(color) => (
            <label style={{ color }}>
              <LanguageContext.Consumer>
                {value => this.renderSubmitText(value)}
              </LanguageContext.Consumer>
            </label>
          )}
        </ColorContext.Consumer>

        <input />
      </div>
    );
  }
}

export default Field;
