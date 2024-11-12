import './index.css';
import { TwitterFollowCard } from './components/TwitterFollowCard'
import React from 'react';

export function App(){
  return(
    <React.Fragment>
      <TwitterFollowCard userName={'leomessisite'} name={'hola'} isFollowing={true}/>
      <TwitterFollowCard userName={'neymarjr'} name={'hola'} isFollowing={false}/>
      <TwitterFollowCard userName={'luissuarez'} name={'hola'} isFollowing={true}/>
    </React.Fragment>
  )
}