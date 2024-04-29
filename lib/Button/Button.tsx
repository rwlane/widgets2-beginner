//
import React from 'react';

export interface ButtonProps {
  children: string;
}

export const Button = (props: ButtonProps) => {
  return <button>{props.children}</button>
}