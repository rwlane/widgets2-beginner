//
import React from 'react';

export interface RedButtonProps {
  children: string;
}

export const RedButton = (props: RedButtonProps) => {
  return <button style={{backgroundColor: "red", color: "white"}}>{props.children}</button>
}