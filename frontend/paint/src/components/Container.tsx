import React from 'react'

interface Props{
    children?: JSX.Element | JSX.Element[]
}
const Container: React.FC<Props> = (props) => {
  return (
    <div className='p-3' style={Styles.border}>
        {props.children}
    </div>
  )
}

export default Container

const Styles = {
    border:{
        boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        borderRadius: "4px"
    },
};