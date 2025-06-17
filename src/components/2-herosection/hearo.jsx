
import React,{useState} from 'react';
import './hearo.css'
export default function hearo() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [active, setActive] = useState();
  return (
    <section className="flex ">
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
     <div
  onClick={() => setActive(true)}
  className={`${
    active
      ? 'absolute z-10 w-fit h-96 sm:!ml-90 sm:!mt-10 !ml-[-40px] !p-3 duration-[400ms] transition-all transform '
      : 'w-50 cursor-pointer'
  }`}
>
  <button
    onClick={(e) => {
      e.stopPropagation(); // 🔒 Prevents re-opening
      setActive(false);
    }}
     className={`${
    !active
      ? 'hidden'
      : 'icon-cross absolute right-0 !p-4 text-red-800'
  }`}
    
  ></button>

  <img className="" src="https://i.imgur.com/QNfRL0D.png" alt="" />
</div>

    </section>
  );
}
