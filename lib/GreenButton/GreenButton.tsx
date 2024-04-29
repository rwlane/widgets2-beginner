//
import React from 'react';

export interface GreenButtonProps {
  children: string;
}

export const GreenButton = (props: GreenButtonProps) => {
  return <button style={{backgroundColor: "green", color: "white"}}>{props.children}</button>
}