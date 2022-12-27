import html2canvas from 'html2canvas';
import React, {useState} from 'react';


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
            let img =canvas.toDataURL("image/png");
            let link= document.createElement("a");
            link.download =  "memepropio.png";
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
            <select onChange={seleccionarImg}>
                <option value={1}>Bob Esponja</option>
                <option value={2}>Novio</option>
                <option value={3}>IT</option>
                <option value={4}>Botones</option>
                <option value={5}>Cálculos</option>
                <option value={6}>Agarrame</option>
                <option value={7}>Burbuja</option>
                <option value={8}>Yoo?</option>
                <option value={9}>Homero</option>
                <option value={10}>jajaja</option>
                <option value={11}>Piel de Gallina</option>          
            </select>
         <div id='exportarImg' className="exportarImagen">
            <p>{textmeme}</p>
            <img src={`./meme/${imgmeme}.jpg`} alt={`meme ${imgmeme}`}/>
         </div>
         <button type='button' onClick={Descargar}> Descargar </button>
        </div>
    )
}
export default Imgmeme;