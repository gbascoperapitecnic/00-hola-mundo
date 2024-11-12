import { useState } from "react";


export function TwitterFollowCard({userName = 'unknow', name}){

    //el estado inicial será false --> el state nos devolverá un array de dos posiciones
    const [isFollowing, setIsFollowing] = useState(false);
    /*
        const state = useState(false);
        const isFollowing = state[0]; --> valor del estado 
        const setIsFollowing = state[1]; --> función que nos permite actualizar el estado
    */
    const imgSrc = `https://unavatar.io/${userName}`;
    const btnClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
 

    const handleClick = () =>{
        //si el valor que tenia isFollowing era true, lo convertimos a false, y al revés
        setIsFollowing(!isFollowing);
    }

    return(
      <article style={{display: "flex"}}>
        <header>
          <img 
            src={imgSrc} 
            alt="avatar" />
          <div>
            <strong>{name}</strong>
            <span>@{userName}</span>
          </div>
          <button className={btnClassName} onClick={handleClick}>{(isFollowing) ? "Siguiendo" : "Seguir"}</button>
        </header>
      </article>
    )
}