import React, { useEffect, useState } from 'react'
import './header.css'
export default function header() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[showMenu , setshowMenu]=useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Swich , Setswich]=useState(window.localStorage.getItem("mode") ?? "dark" );
   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(()=>{
    if (Swich==="dark"){
document.body.classList.remove("light")
document.body.classList.add("dark")
}
else{
  document.body.classList.remove("dark")
  document.body.classList.add("light")
}

   } ,[Swich])
  return (
    <header  className=' flex'>

<button className='minu icon-menu' onClick={ ()=>{
  setshowMenu(true)
} } />
      
      <div />

      <nav>
        <ul className='flex'>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Project</a></li>
          <li><a href="">speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

      <button onClick={()=>
      {window.localStorage.setItem("mode" , Swich== "dark" ? "light" : "dark");
      Setswich( Swich=="dark" ? "light" : "dark")}}  className={Swich === "dark" ? 'd&n  icon-moon-o' : 'd&n  icon-sun' } />
     
      {showMenu && (
<div className="fixed ">
  
    <ul className='modal testing'>
      <li><button className='icon-cross' onClick={ ()=>{
  setshowMenu(false)
} }/></li>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Project</a></li>
          <li><a href="">speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>
</div>)
}
    </header>
  )
}
