import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import leftBracket from './leftBracket.png';
import circle from './circle.png';
import rightBracket from './rightBracket.png';
import iCodeNetwork from './iCodeNetwork.png';

class ConstructionContainer extends React.Component {

  render() {
    return(
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh'}}>
          <img className='nav-items' src={leftBracket} alt="iCode Logo" style={{height: '35vh', width:60}}/>
          <img className='nav-items' src={circle} alt="iCode Logo" className='logo' style={{height: '40vh'}}/>
          <img className='nav-items' src={rightBracket} alt="iCode Logo" style={{height: '35vh', width: 60}}/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '5vh'}}>
          <img className='nav-items' src={iCodeNetwork} alt="iCode Network" style={{height: '5vh', paddingTop:50}}/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '5vh', paddingTop: 100}}>
          <i className='material-icons' style={{color: 'grey'}}>build</i>
          <div style={{fontFamily: 'Roboto', paddingTop:5, color: 'grey'}}>site under construction</div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps, actions)(ConstructionContainer);
