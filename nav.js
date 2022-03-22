const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="container hero-section">
    <div class="row">
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img class="img-fluid w-10" src="C:\Users\sreet\Documents\myntra\img\myntra.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
<a class="nav-link" aria-current="page" href="#">MEN</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">WOMEN</a>
                </li>
                <li class="nav-item">
                   <a class="nav-link" href="#">KIDS</a>
                 </li>
                 <li class="nav-item">
                   <a class="nav-link" href="#">HOME&LIVING</a>
                 </li>
<li class="nav-item">
                   <a class="nav-link" href="#">BEAUTY</a>
                 </li>
                 <li class="nav-item">
                   <a class="nav-link" href="#">STUDIO</a>
                 </li>
              </ul>
<form class="d-flex">
<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
</form>
            </div>
          </div>
        </nav>
        <img src="C:\Users\sreet\Documents\myntra\img\images.jpeg" width="30px" height="30px">
        <img src="C:\Users\sreet\Documents\myntra\img\3386813-200.png" width="30px" height="30px">
        <img src="C:\Users\sreet\Documents\myntra\img\images~2.png" width="30px" height="30px">
    </div>
</div>
    `;
}

createNav();








