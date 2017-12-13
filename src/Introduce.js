import React, { Component } from 'react';
import '../media/css/Introduce.css';
import me from '../media/images/GANTENG.jpg'
import { Col, Row } from 'react-bootstrap';


class Introduce extends Component {
  render() {
    var start = this.props.startAnimationIntro;
    return (
        <div className={start === true ? 'App-introduce' : 'App-introduce-bg'}>
            <div className={start === true ? 'hoverImg' : 'hidden'}>
                <a href="https://github.com/denisenricohasyim93">Github</a>
                <a href="https://www.linkedin.com/in/denis-enrico-hasyim-833422132/">LinkedIn</a>
                <a href="https://github.com/denisenricohasyim93/CV-Ijazah-Transkrip/blob/master/Denis%20Enrico%20Hasyim%20-%20CV.pdf">CV</a>
            </div>
            <div className={start === true ? 'index' : 'hidden'}>
                <img src={me} href="#"/>
            </div>
            <div className={start === true ? 'show' : 'hidden'}>
                <div className="App-p-div">
                    <p>Denis Enrico Hasyim, fun and serious combined together</p>
                 </div>
            </div>  
        </div>
    );
  }
}

export default Introduce;
