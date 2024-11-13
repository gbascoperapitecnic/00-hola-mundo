import './index.css';
import { TwitterFollowCard } from './components/TwitterFollowCard'
import React from 'react';

const users = [
  {
    id: 1,
    userName: 'messi',
    name: 'hola',
    isFollowing: true
  },
  {
    id: 2,
    userName: 'neymarjr',
    name: 'hola',
    isFollowing: false
  },
  {
    id: 3,
    userName: 'luissuarez',
    name: 'hola',
    isFollowing: true
  },

];



export function App(){
  return(
    <React.Fragment>
      {/* <TwitterFollowCard userName={'leomessisite'} name={'hola'} initialIsFollowing={true}/>
      <TwitterFollowCard userName={'neymarjr'} name={'hola'} />
      <TwitterFollowCard userName={'luissuarez'} name={'hola'}/> */}
      {
        users.map((user) =>
          <TwitterFollowCard 
            key={user.id}
            userName={user.userName} 
            name={user.name} 
            initialIsFollowing={user.isFollowing}/>
        ) 
      }

    </React.Fragment>
  )
}