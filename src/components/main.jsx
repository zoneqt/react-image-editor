import React from 'react';
import { useState, useEffect, useRef } from 'react';

const Main = ({props, imageInput}) => {

    const [canvasVisible, setCanvasVisible] = useState(false);
    const canvasStyle = canvasVisible ? "visible" : "hidden";

    const canvas = useRef(null)

      useEffect(() => {
        if(props.image && canvas) {
            const ctx = canvas.current.getContext("2d");

            ctx.canvas.width = props.image.width;
            ctx.canvas.height = props.image.height;

            ctx.filter = `brightness(${props.brightness}%) saturate(${props.saturate}%) blur(${props.blur}px) 
                          invert(${props.invert}%) sepia(${props.sepia}%) grayscale(${props.grayscale}%)
                          hue-rotate(${props.hue}deg) opacity(${props.opacity}%)`;

            ctx.drawImage(props.image, 0, 0);   
            setCanvasVisible(true); 
          }
      }, [props, canvas]);

      
      function downloadImage() {
        const img = canvas.current.toDataURL();
        const createEl = document.createElement('a');
        const fileName = Date.now();
        createEl.href = img;

        // This is the name of our downloaded file
        createEl.download = `${fileName}`;

        // Click the download button, causing a download, and then remove it
        createEl.click();
        createEl.remove();
      }
    
    
      function clearCanvas() {
        const ctx = canvas.current.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.canvas.width = 500;
        ctx.canvas.height = 500;
        imageInput.current.value = "";
        
      }

  return (
    <div className="main">
        
    <div className="canvas-container pos-rel">
        { canvasVisible ? 
                <>
                <div className="download-image" onClick={downloadImage}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"/></svg>
                </div>
                    <div className="close-image" onClick={() => { props.resetState(); setCanvasVisible(false); clearCanvas(); }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                </div> 
                </>
            : null }
        
       

        <canvas 
            ref={canvas}
            width={500}
            height={500}
            style={{ visibility: canvasStyle }}
          
        />
    </div> 
 
</div>
  )
}

export default Main