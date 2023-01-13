import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/App.css';

(function(){
  function App(){
    const [title,setTitle] = React.useState('')
    return(
      <>
      <div id="all">
      <button title="red" onClick={()=>console.log('red')}>red</button>
      <button title="green" onClick={()=>console.log('green')}>green</button>
      <button title="blue" onClick={()=>console.log('blue')}>blue</button>
      <button title="violet" onClick={()=>console.log('violet')}>violet</button>
      <div className="main"><img src="../source/blue.png" alt="상세이미지"/></div>
      </div>
      </>
    )
  }
  function Img(props){
    function onImgClick(e){
      props.ImgClick(e.target.value);66
    }
    return(
      <div>
       <img src= {`../images/${props.title}.jpg`} alt="상세이미지"/>
      </div>
      
    )
  }
  function btn(props){
    return(
      
      <button title="red" 
      defaultValue={props.title}
      // eslint-disable-next-line no-undef
      onClick = {onImgClick}
      >red</button>
      
      
    )
  }


  Img.defaultProps = {
    title: "red",
  };




  // 수출
  const root = ReactDOM.createRoot(document.querySelector('#root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>)
})()
