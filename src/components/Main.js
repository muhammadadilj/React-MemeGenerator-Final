import React, { useState, useEffect } from "react";
//import memesData from "../memesData.js";

export default function Form() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomMeme: "https://i.imgflip.com/6k7hzj.jpg"
  });
  const [allMemes, setAllMemes] = useState([])

  function getMeme() {
    const randomMeme = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomMeme].url;
    setMeme(prevMeme => ({
        ...prevMeme,
        randomMeme: url
    }))
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
     .then(res => res.json())
     .then(data =>setAllMemes(data.data.memes))
  }, [])

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <input
            type="text"
            value={meme.topText}
            onChange={handleChange}
            name="topText"
            placeholder="First Name"
            className="form-input"
        />
        <input
            type="text"
            value={meme.bottomText}
            onChange={handleChange}
            name="bottomText"
            placeholder="Last Name"
            className="form-input"
        />
        <button onClick={getMeme} className="form-btn">
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img className="memeImg" src={meme.randomMeme} alt=""/>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}