import React from 'react'
// import styled from 'styled-components' //adding style components
import StyledDiv from './StyledDiv'
import StyledText from './StyledText'
import StyledImg from './StyledImg'
import StyledH1 from './StyledH1'
import StyledH2 from './StyledH2'
import StyledTextDiv from './StyledTextDiv'


function Potd (props) {

  return (
    <StyledDiv className = 'App'>
    <StyledH1>{props.data.title}</StyledH1>
    <StyledH2>{props.data.date}</StyledH2>
    <StyledImg src={props.data.url} alt= {props.data.title}/>
    <StyledTextDiv>
    <StyledText>{props.data.explanation}</StyledText>
    </StyledTextDiv>
    </StyledDiv>
  )
}

export default Potd;