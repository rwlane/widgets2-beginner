//
import React from 'react';

export interface ButtonProps {
  children: string;
}

export const Button = (props: ButtonProps) => {
  const style = {backgroundColor: "black", color: "white"};
  return <button style={style}>{props.children}</button>
}