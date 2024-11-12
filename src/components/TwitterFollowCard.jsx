export function TwitterFollowCard({userName = 'unknow', name, isFollowing}){
    const imgSrc = `https://unavatar.io/${userName}`;

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
          <button>{(isFollowing) ? "Siguiendo" : "Seguir"}</button>
        </header>
      </article>
    )
}