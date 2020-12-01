import React from 'react';


function Home() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>


      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./img/santa.jpg" height="650px" class="d-block w-100" alt="..."></img>
          <div class="carousel-caption d-none d-md-block">
            <h1 class="tituloslide">Santa</h1>
            <h2>santa catarina</h2>
            <p>texto qualquer texto qualquer texto qualquer texto qualquer texto qualquer texto qualquer texto qualquer texto qualquer </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="./img/sp.png" height="650px" class="d-block w-100" alt="..."></img>
          <div class="carousel-caption d-none d-md-block">
            <h1 class="tituloslide">São Paulo</h1>
            <h2>São Paulo</h2>
            <p>texto qualquer texto qualquer texto qualquer texto qualquer texto qualquer texto qualquer texto qualquer texto qualquer </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="./img/rio.jpg" height="650px" class="d-block w-100" alt="..."></img>
          <div class="carousel-caption d-none d-md-block">
            <h1 class="tituloslide">Rio</h1>
            <h2>Rio de Janeiro</h2>
            <p>texto qualquer texto qualquer texto qualquer texto qualquer texto qualquer texto qualquer texto qualquer texto qualquer </p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

  );
}

export default Home;