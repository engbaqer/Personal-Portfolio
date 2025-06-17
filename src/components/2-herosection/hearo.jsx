import React from 'react'
import './hearo.css'
export default function hearo() {
  return (
    <section className="flex">
      <div className="left_section  ">
        <div className="photo_icon flex">
          <img src="https://i.imgur.com/3t1YG0k.png" alt="" className="my_photo" />
          <div className="icon-checkmark"></div>
        </div>
        <h1>Junior Web Developer & Computer Engineer</h1>
        <div className="icons">
          <a href="https://www.linkedin.com/in/baqer-muhsin-7400462b3/" className="icon icon-linkedin"></a>
          <a href="https://github.com/engbaqer" className="icon icon-github"></a>
          <a href="https://www.instagram.com/2p.n_/" className="icon icon-instagram"></a>
          <a href="" className="icon icon-facebook2"></a>
        </div>
      </div>
      <div className="right_section testing"></div>
    </section>
  );
}
