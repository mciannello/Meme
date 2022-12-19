import html2canvas from 'html2canvas';
import React, {useState} from 'react';
import '../../src/styles/_editor.scss'


const Imgmeme= ()=>{
    const [imgmeme,setImgmeme] = useState();
    const [textmeme,setTextomeme] = useState();

    const seleccionarImg = (e)=>{
        setImgmeme(e.target.value);
        
    }
    const textomeme = (e)=>{
        setTextomeme(e.target.value);
    }
    const Descargar = (e)=>{
        html2canvas(document.querySelector("#exportarImg")).then(function(canvas) {
            {/*document.body.appendChild(canvas);*/}
            let img =canvas.toDataURL("memes/jpg");
            let link= document.createElement("a");
            link.download = "memepropio.jpg";
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
            <select  className='form'onChange={seleccionarImg}>
                <option value={1}>luisito</option>
                <option value={2}>simba</option>
                <option value={3}>goku</option>
                <option value={4}>indy</option>
                <option value={5}>medijiste</option>

            </select>
         <figure id='exportarImg'>
            <p>{textmeme}</p>
            <img src={`./memes/${imgmeme}.jpg`} alt="meme"/>
         </figure>
         <button type='button' onClick={Descargar}> Descargar </button>
        </div>
    )
}
export default Imgmeme;