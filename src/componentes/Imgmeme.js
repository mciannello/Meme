import html2canvas from 'html2canvas';
import React, {useState, useEffect} from 'react';
import '../../src/styles/_editor.scss';
import NuevoMeme from './Cont'

const Imgmeme=()=> {
    
    const [textmeme,setTextomeme] = useState();
  
    const textomeme = (e)=>{
        setTextomeme(e.target.value);
    }
    const Descargar = (e)=>{
        html2canvas(document.getElementById("#exportarImg")).then(function(canvas) {
            {/*document.body.appendChild(canvas);*/}
            let img =canvas.toDataURL("memes/png");
            
            let link= document.createElement("a");
            
            link.download = "memepropio.png";
            link.href= img;
            link.click();
        });
    }
    
       
  
    return (
        <div className="editor_container">
                   
            <h1> Editá tu propio meme</h1>
            <h3>Igrese el texto que quiere incluir:</h3>
            <input onChange={textomeme} className='form' type='text' placeholder='Poné tu frase' name='meme' arial-aria-label='true'></input>
            <h3>Elegí tu imagen</h3>
      <NuevoMeme />
            <figure className ="exportarImg" id='exportarImg'>
            <p>{textmeme} </p>
           
            </figure>
            <button type='button' onClick={Descargar}> Descargar </button>
        </div>
    )
}
export default Imgmeme;