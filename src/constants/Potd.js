import React from 'react'
import styled from 'styled-components' //adding style components
import StyledDiv from './StyledDiv'
import StyledText from './StyledText'
import StyledImg from './StyledImg'


function Potd (props) {

  return (
    <StyledDiv>
    <h1>{props.data.title}</h1>
    <h2>{props.data.date}</h2>
    <StyledImg src={props.data.url} alt= {props.data.title}/>
    <StyledText>{props.data.explanation}</StyledText>
    </StyledDiv>
  )
}

export default Potd;