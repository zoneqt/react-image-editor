import React from 'react';




const Toolbar = ({ props, imageInput }) => {


    const imageLoad = (e) => {
        props.resetState();
        const img = new Image();
        const file = e.target.files[0];  
        img.src = URL.createObjectURL(file);
        img.onload = () => props.setImage(img)
      };

  return (
    
    <div className="toolbar">
    <div className="toolbar-item">
        <label className="upload-img">
            <span>Upload image</span>
            <input ref={imageInput} type="file" id="imageFileInput" onChange={imageLoad} />
        </label>
    </div>

     <div className="toolbar-item">
        <label className="tool-label">Brightness</label>
        <input className="tool-input" type="range" value={props.brightness} onChange={e => props.setBrightness(e.target.value)} min="0" max="200" />
    </div>
 
    <div className="toolbar-item">
        <label className="tool-label">Saturation</label>
        <input className="tool-input" type="range" value={props.saturate} onChange={e => props.setSaturate(e.target.value)} min="0" max="200" />
      </div>

      <div className="toolbar-item">
        <label className="tool-label">Blur</label>
        <input className="tool-input" type="range" value={props.blur} onChange={e => props.setBlur(e.target.value)} min="0" max="25" />
    </div>

    <div className="toolbar-item">
        <label className="tool-label">Inversion</label>
        <input className="tool-input" type="range" value={props.invert} onChange={e => props.setInvert(e.target.value)} min="0" max="100" />
    </div>

    <div className="toolbar-item">
        <label className="tool-label">Sepia</label>
        <input className="tool-input" type="range" value={props.sepia} onChange={e => props.setSepia(e.target.value)} min="0" max="100" />
    </div>

    <div className="toolbar-item">
        <label className="tool-label">Grayscale</label>
        <input className="tool-input" type="range" value={props.grayscale} onChange={e => props.setGrayscale(e.target.value)} min="0" max="100" />
    </div>

    <div className="toolbar-item">
        <label className="tool-label">Hue Rotate</label>
        <input className="tool-input" type="range" value={props.hue} onChange={e => props.setHue(e.target.value)} min="0" max="360" />
    </div>

    <div className="toolbar-item">
        <label className="tool-label">Opacity</label>
        <input className="tool-input" type="range" value={props.opacity} onChange={e => props.setOpacity(e.target.value)} min="0" max="100" />
    </div>


</div>
  )
}

export default Toolbar