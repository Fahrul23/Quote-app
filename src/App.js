import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
function App() {
    const [quote,setQuote] = useState('');
    const [myquote,setMyQuote] = useState('');
    const [favorite,setFavorite] = useState('');
    const [onsubmit,setOnSubmit] = useState(false);

    const getQuote = async()=>{
            
            let response = await axios.get('https://api.kanye.rest',{
                headers:{
                    'Content-Type' : 'aplication/json'  
                }
            });
            setQuote(response.data.quote);
        }
    const changeQuote = ()=>{
        getQuote();
    }
    const addFavorite = () =>{
        setFavorite(quote);
    }
    const onSubmit =()=>{
        setOnSubmit(true);
    }
    const setMyfavoritequote=(e)=>{
        setMyQuote(e.target.value);
        setOnSubmit(false);
    }
    useEffect(()=>{
        getQuote();
    },[])

  return (
    <div className="App">
      <img width="200" height="200" src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg" alt="img"/>
      <h1>Kanye-West Quote</h1>
      <p>{quote}</p>
      <button onClick={()=>changeQuote()}>get Quote</button>
      <button onClick={()=>addFavorite()}>add Favorite</button>
      <p>{favorite}</p>
      <h2>My Quote</h2>
      <input type="text" onChange={(e) => setMyfavoritequote(e)} />
      <button onClick={()=> onSubmit()} >Submit</button>
      {onsubmit ?
        (<p>{myquote}</p>)
      : '' }
    </div>
  );
}

export default App;
