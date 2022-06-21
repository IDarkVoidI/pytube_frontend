import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="h-1">Typography</h1>
        <h2 className="h-2">Typography</h2>
        <h3 className="h-3">Typography</h3>
        <p className="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae non vel consequatur officia repellat facilis
          porro ex distinctio? Explicabo, optio id fugit tempore tenetur quod voluptatum ut impedit! Reprehenderit
          eligendi eum consectetur officia eius beatae reiciendis ad, soluta molestiae aliquid. Consequatur itaque
          deserunt porro dolores fuga ad, rem ullam excepturi! Vel qui cumque labore necessitatibus blanditiis. Dolorum
          voluptate quaerat numquam praesentium nostrum ipsa sapiente alias provident. Laboriosam aperiam dignissimos
          nostrum suscipit delectus, neque eius facilis dicta velit maxime doloribus repudiandae expedita obcaecati fuga
          dolores illo ipsa, a atque hic! Voluptatibus eaque delectus iste odit corrupti magnam deleniti excepturi
          doloribus suscipit?
        </p>
        <small className="small-text">Typography</small>
        <br />
        <a className="link" href="/">
          Typography
        </a>
      </div>
    </div>
  );
}

export default Home;
