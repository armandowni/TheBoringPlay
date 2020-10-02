<template>
  <div id="background">
    <div class="container" style="margin-top: 10px; padding: 20px 0px">
      <div class="row">
        <div class="col-sm-8 col-8" id="news">
          <h1>News</h1>
          <div class="trending">
            <div id="trendingcarousel" class="carousel slide" data-ride="carousel">
              <!-- The slideshow -->
              <div class="carousel-inner" style="background-color: coral;">
                <div class="carousel-item active">
                  <img
                    class="w-100"
                    style="height: 300px;"
                    src="storage/gambar/produk_desain/produk_skate.png"
                    alt="Los Angeles"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="w-100"
                    style="height: 300px;"
                    src="storage/gambar/produk_desain/produk_bmx.png"
                    alt="Chicago"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="w-100"
                    style="height: 300px;"
                    src="storage/gambar/produk_desain/produk inline-skate.png"
                    alt="New York"
                  />
                </div>
              </div>
              <a class="carousel-control-prev" href="#trendingcarousel" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="carousel-control-next" href="#trendingcarousel" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>
            <ul class="newslist" id="newslist" style="list-style: none; padding: 0px; margin: 0px;">
              <div class="d-xs-block d-sm-block d-md-block" id="posisikiri">
                <li>
                  <div class="card" style="width: 320px; height: 150px; margin: 10px 15px ;">
                    <div class="card-body">
                      <img
                        src="storage/gambar/berita/images.png"
                        alt="Tidak memuat"
                        style="width: 100px; height: 100px; float: left; margin-right: 10px;"
                      />
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="card" style="width: 320px; height: 150px; margin: 10px 15px ;">
                    <div class="card-body">
                      <img
                        src="storage/gambar/berita/images.png"
                        alt="Tidak memuat"
                        style="width: 100px; height: 100px; float: left; margin-right: 10px;"
                      />
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="card" style="width: 320px; height: 150px; margin: 10px 15px ;">
                    <div class="card-body">
                      <img
                        src="storage/gambar/berita/images.png"
                        alt="Tidak memuat"
                        style="width: 100px; height: 100px; float: left; margin-right: 10px;"
                      />
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </li>
              </div>
              <div class="d-xs-block d-sm-block d-md-block" id="posisikanan">
                <li>
                  <div class="card" style="width: 320px; height: 150px; margin: 10px 15px ;">
                    <div class="card-body">
                      <img
                        src="storage/gambar/berita/images.png"
                        alt="Tidak memuat"
                        style="width: 100px; height: 100px; float: left; margin-right: 10px;"
                      />
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="card" style="width: 320px; height: 150px; margin: 10px 15px ;">
                    <div class="card-body">
                      <img
                        src="storage/gambar/berita/images.png"
                        alt="Tidak memuat"
                        style="width: 100px; height: 100px; float: left; margin-right: 10px;"
                      />
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="card" style="width: 320px; height: 150px; margin: 10px 15px ;">
                    <div class="card-body">
                      <img
                        src="storage/gambar/berita/images.png"
                        alt="Tidak memuat"
                        style="width: 100px; height: 100px; float: left; margin-right: 10px;"
                      />
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </li>
              </div>
            </ul>
            <!-- Left and right controls -->
          </div>
          <button style="margin: 10px 10px;">
            <a href="/newsHome" style="color: black;">See More</a>
          </button>
        </div>
        <div class="col-4 d-block" id="most-popular">
          <div class="most-popular">
            <h1>Most popular</h1>

            <ul style="list-style: none; padding: 20px 0px;">
              <li>
                <span class="bs-stepper-circle" style="float: left;">1</span>
                <a href="/newsDetail">
                  <img
                    src="storage/gambar/berita/index.png"
                    alt
                    style="width: 50px; height: 50px; float: left;margin-right: 10px;"
                  />
                  <h5 style="color: black;">Andoots mengeluarkan grafik terbarunya</h5>
                </a>
              </li>
              <li>
                <span class="bs-stepper-circle" style="float: left;">2</span>
                <a href="/newsDetail">
                  <img
                    src="storage/gambar/berita/index1.png"
                    alt
                    style="width: 50px; height: 50px; float: left;margin-right: 10px;"
                  />
                  <h5 style="color: black;">Andoots mengeluarkan grafik terbarunya</h5>
                </a>
              </li>
              <li>
                <span class="bs-stepper-circle" style="float: left;">3</span>
                <a href="/newsDetail">
                  <img
                    src="storage/gambar/berita/index5.png"
                    alt
                    style="width: 50px; height: 50px; float: left;margin-right: 10px;"
                  />
                  <h5 style="color: black;">Andoots mengeluarkan grafik terbarunya</h5>
                </a>
              </li>
              <li>
                <span class="bs-stepper-circle" style="float: left;">4</span>
                <a href="/newsDetail">
                  <img
                    src="storage/gambar/berita/index4.png"
                    alt
                    style="width: 50px; height: 50px; float: left;margin-right: 10px;"
                  />
                  <h5 style="color: black;">Andoots mengeluarkan grafik terbarunya</h5>
                </a>
              </li>
              <li>
                <span class="bs-stepper-circle" style="float: left;">5</span>
                <a href="/newsDetail">
                  <img
                    src="storage/gambar/berita/index1.png"
                    alt
                    style="width: 50px; height: 50px; float: left;margin-right: 10px;"
                  />
                  <h5 style="color: black;">Andoots mengeluarkan grafik terbarunya</h5>
                </a>
              </li>
            </ul>

            <button style="margin-left: 10px;">See More</button>
          </div>

          <div class="row d-block" id="trendingtoday">
            <div class="col-1" style="width: 100%; margin-top: 10px; padding: 0px;">
              <div class="trendingtoday">
                <h1>Trending Today</h1>

                <ul style="list-style: none;display: inline-block; padding: 20px 0px;">
                  <li>
                    <span class="bs-stepper-circle" style="float: left;">1</span>
                    <a href="newsDetail.html">
                      <img
                        src="storage/gambar/berita/index.png"
                        alt
                        style="width: 50px; height: 50px; float: left;margin-right: 10px;"
                      />
                      <h5 style="color: black;">Andoots mengeluarkan grafik terbarunya</h5>
                    </a>
                  </li>
                  <li>
                    <span class="bs-stepper-circle" style="float: left;">2</span>
                    <a href="newsDetail.html">
                      <img
                        src="storage/gambar/berita/index1.png"
                        alt
                        style="width: 50px; height: 50px; float: left;margin-right: 10px;"
                      />
                      <h5 style="color: black;">Andoots mengeluarkan grafik terbarunya</h5>
                    </a>
                  </li>
                  <li>
                    <span class="bs-stepper-circle" style="float: left;">3</span>
                    <a href="newsDetail.html">
                      <img
                        src="storage/gambar/berita/index4.png"
                        alt
                        style="width: 50px; height: 50px; float: left;margin-right: 10px;"
                      />
                      <h5 style="color: black;">Andoots mengeluarkan grafik terbarunya</h5>
                    </a>
                  </li>
                  <li>
                    <span class="bs-stepper-circle" style="float: left;">4</span>
                    <a href="newsDetail.html">
                      <img
                        src="storage/gambar/berita/index5.png"
                        alt
                        style="width: 50px; height: 50px; float: left;margin-right: 10px;"
                      />
                      <h5 style="color: black;">Andoots mengeluarkan grafik terbarunya</h5>
                    </a>
                  </li>
                  <li>
                    <span class="bs-stepper-circle" style="float: left;">5</span>
                    <a href="newsDetail.html">
                      <img
                        src="storage/gambar/berita/index1.png"
                        alt
                        style="width: 50px; height: 50px; float: left;margin-right: 10px;"
                      />
                      <h5 style="color: black;">Andoots mengeluarkan grafik terbarunya</h5>
                    </a>
                  </li>
                </ul>

                <button style="margin-left: 10px;">See More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>