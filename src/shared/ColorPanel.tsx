import React from 'react';
import { useDispatch } from 'react-redux';
import { setStrokeColor } from '../modules/currentStroke/slice';
import { COLORS as colors} from './colors';

export const ColorPanel = () => {

  const dispatch = useDispatch();

  const onColorChange = (color: string) => {
    dispatch(setStrokeColor(color));
  }

  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Colors</div>
      </div>
      <div className="window-body colors">
        {colors.map((color: string) => {
          return <div 
            className="color"
            key={color}
            onClick={() => {onColorChange(color)}}
            style={{ backgroundColor: color}}
          ></div>
        }) }
      </div>
    </div>
  )
}

function dispatch(arg0: { type: string; payload: string; }) {
  throw new Error('Function not implemented.');
}
