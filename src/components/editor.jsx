import React from 'react';
import { useState, useRef } from 'react';
import Toolbar from './toolbar';
import Main from './main';

const Editor = () => {
  const initialState = {
    brightness: 100,
    saturate: 100,
    blur: 0,
    invert: 0,
    sepia: 0,
    grayscale: 0,
    hue: 0,
    opacity: 100,
    image: null
  }

  const [brightness, setBrightness] = useState(initialState.brightness);
  const [saturate, setSaturate] = useState(initialState.saturate);
  const [blur, setBlur] = useState(initialState.blur);
  const [invert, setInvert] = useState(initialState.invert);
  const [sepia, setSepia] = useState(initialState.sepia);
  const [grayscale, setGrayscale] = useState(initialState.grayscale);
  const [hue, setHue] = useState(initialState.hue);
  const [opacity, setOpacity] = useState(initialState.opacity);
  const [image, setImage] = useState();

  const imageInput = useRef();

  const resetState = () => {
    setBrightness(initialState.brightness);
    setSaturate(initialState.saturate)
    setBlur(initialState.blur)
    setInvert(initialState.invert)
    setSepia(initialState.sepia)
    setGrayscale(initialState.grayscale)
    setHue(initialState.hue)
    setOpacity(initialState.opacity)
    setImage(null)
  };


  return (
    <div className="editor">
        <Toolbar props={{
          brightness, setBrightness,
          saturate, setSaturate,
          blur, setBlur,
          invert, setInvert,
          sepia, setSepia,
          grayscale, setGrayscale,
          hue,setHue,
          opacity, setOpacity,
          image, setImage,
          resetState
      
          }} imageInput={imageInput} />

          <Main  props={{
                brightness,
                saturate,
                blur,
                invert,
                sepia,
                grayscale,
                hue,
                opacity,
                image,setImage,
                resetState,
               
          }} imageInput={imageInput}   />
    </div>
  )
}

export default Editor