import React, { Component } from 'react';
import Button from './Button';
import './App.css';
import Tooltip from './Tooltip';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetButton: 'button-top-left',
      target: "top",
      text: "",
      fontSize: 14,
      padding: 10,
      textColor: "#000000",
      bgColor: "#FFFFFF",
      radius: 5,
      tooltipWidth: 200,
      arrowHeight: 5,
      image: localStorage.getItem('image') || null,
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      localStorage.setItem(event.target.name, event.target.value);
    });
  }

  render() {
    const { targetButton, target, text, fontSize, padding, textColor, bgColor, radius, tooltipWidth, arrowHeight, image } = this.state;

    return (
      <>
        <div className="styl-50 tc styl-5">
          <h1> Tooltip Project by Yash Sancheti</h1>
        </div>

        <div className="dropdown">
            <label htmlFor="targetButton">Target Button:</label>
            <select 
              id="targetButton" 
              value={this.state.targetButton} 
              onChange={e => this.setState({ targetButton: e.target.value })}
            >
              <option value="button-top-left">Top Left</option>
              <option value="button-top-right">Top Right</option>
              <option value="button-bottom-left">Bottom Left</option>
              <option value="button-bottom-right">Bottom Right</option>
              <option value="button-center">Center</option>
            </select>
        </div>

        <div className="dropdown">
            <label htmlFor="position">Tooltip Position:</label>
            <select 
              id="position" 
              value={this.state.target} 
              onChange={e => this.setState({ target: e.target.value })}
            >
              <option value="top">Top</option>
              <option value="right">Right</option>
              <option value="bottom">Bottom</option>
              <option value="left">Left</option>
            </select>
          </div>

        <div className="mobile-screen">
          <Button 
            className="button-top-left" 
            targetButton={targetButton}
            position={target} 
            text={text} 
            fontSize={fontSize} 
            padding={padding} 
            textColor={textColor} 
            bgColor={bgColor} 
            radius={radius} 
            tooltipWidth={tooltipWidth} 
            arrowHeight={arrowHeight} 
            image={image} 
          />
          <Button 
            className="button-top-right" 
            targetButton={targetButton}
            position={target} 
            text={text} 
            fontSize={fontSize} 
            padding={padding} 
            textColor={textColor} 
            bgColor={bgColor} 
            radius={radius} 
            tooltipWidth={tooltipWidth} 
            arrowHeight={arrowHeight} 
            image={image} 
          />
          <Button 
            className="button-bottom-left" 
            targetButton={targetButton}
            position={target} 
            text={text} 
            fontSize={fontSize} 
            padding={padding} 
            textColor={textColor} 
            bgColor={bgColor} 
            radius={radius} 
            tooltipWidth={tooltipWidth} 
            arrowHeight={arrowHeight} 
            image={image} 
          />
          <Button 
            className="button-bottom-right" 
            targetButton={targetButton}
            position={target} 
            text={text} 
            fontSize={fontSize} 
            padding={padding} 
            textColor={textColor} 
            bgColor={bgColor} 
            radius={radius} 
            tooltipWidth={tooltipWidth} 
            arrowHeight={arrowHeight} 
            image={image} 
          />
          <Button 
            className="button-center" 
            targetButton={targetButton}
            position={target} 
            text={text} 
            fontSize={fontSize} 
            padding={padding} 
            textColor={textColor} 
            bgColor={bgColor} 
            radius={radius} 
            tooltipWidth={tooltipWidth} 
            arrowHeight={arrowHeight} 
            image={image} 
          />
        </div>

        <div className="styl-50 tc">
          <div className="styl-3">
            <Tooltip 
              position={target} 
              text={text} 
              fontSize={fontSize} 
              padding={padding} 
              textColor={textColor} 
              bgColor={bgColor} 
              radius={radius} 
              tooltipWidth={tooltipWidth} 
              arrowHeight={arrowHeight}
              image={image} 
            />
          </div>
        </div>
        <form>
        <div className="menu-option">
          <label htmlFor="text">Tooltip text:</label>
          <input id="text" type="text" name="text" onChange={this.handleInputChange} />
        </div>
        <div className="menu-option">
          <label htmlFor="fontSize">Font size:</label>
          <input id="fontSize" type="number" name="fontSize" onChange={this.handleInputChange} />
        </div>
        <div className="menu-option">
          <label htmlFor="padding">Padding:</label>
          <input id="padding" type="number" name="padding" onChange={this.handleInputChange} />
        </div>
        <div className="menu-option">
          <label htmlFor="textColor">Text color:</label>
          <input id="textColor" type="color" name="textColor" onChange={this.handleInputChange} />
        </div>
        <div className="menu-option">
          <label htmlFor="bgColor">Background color:</label>
          <input id="bgColor" type="color" name="bgColor" onChange={this.handleInputChange} />
        </div>
        <div className="menu-option">
          <label htmlFor="radius">Border radius:</label>
          <input id="radius" type="number" name="radius" onChange={this.handleInputChange} />
        </div>
        <div className="menu-option">
          <label htmlFor="tooltipWidth">Tooltip width:</label>
          <input id="tooltipWidth" type="number" name="tooltipWidth" onChange={this.handleInputChange} />
        </div>
        <div className="menu-option">
          <label htmlFor="arrowHeight">Arrow height:</label>
          <input id="arrowHeight" type="number" name="arrowHeight" onChange={this.handleInputChange} />
        </div>
        <div className="menu-option">
          <label htmlFor="image">Image URL:</label>
          <input id="image" type="text" name="image" onChange={this.handleInputChange} />
        </div>
      </form>

      </>
    );
  }
}

export default App;
