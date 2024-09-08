
const links = ["features", "help", "about-us", "Blog"];
const contain = links.filter((e) => {
  if (window.location.pathname.includes(e)) {
    return e;
  }
});

const nav = document.getElementById("nav");

if (contain[0]) {
  nav.innerHTML = `

    <nav
      class="w-full bg-red-500 py-3 text-white flex items-center justify-around absolute" 
    >
      <div class="ml-5">
        <h1 class="font-bold text-xl">JAOL SYSTEMS</h1>
      </div>

      <div class="md:w-96">
        <div class="hidden sm:flex font-semibold justify-around" id="nav-links">
        ${contain[0] ? `<a href="../../Public/index.html" class="">Home</a>` : ""}
          ${
            contain[0] == "features"
              ? ""
              : `<a href="../features/index.html" class="">Features</a>`
          }
             ${
               contain[0] == "help" ? "" : `<a href="../help/index.html" class="">Help</a>`
             }
              ${
                contain[0] == "Blog"
                  ? ""
                  : `<a href="../Blog/index.html" class="">Blog</a>`
              }
               ${
                 contain[0] == "about-us"
                   ? ""
                   : `<a href="../about-us/index.html" class="">About us</a>`
               }
            
            
            
        </div>
      </div>
      <div class="md:hidden" id="nav-links-bar">
        <button class="bg-white px-2" id="btn-show">a</button>
        <div class="absolute bg-red-500 border-white border font-medium transition-all rounded-sm shadow-lg right-20 z-30 p-8" id="items">
        ${
          contain[0]
            ? `<p class="my-2"><a href="../../Public/index.html" class="">Home</a></p>`
            : ""
        }
          ${
            contain[0] == "features"
              ? ""
              : `<p class="my-2"><a href="../features/index.html" class="">Features</a></p>`
          }
             ${
               contain[0] == "help"
                 ? ""
                 : `<p class="my-2"><a href="../help/index.html" class="">Help</a></p>`
             }
              ${
                contain[0] == "Blog"
                  ? ""
                  : `<p class="my-2"><a href="../Blog/index.html" class="">Blog</a></p>`
              }
               ${
                 contain[0] == "about-us"
                   ? ""
                   : `<p class="my-2"><a href="../about-us/index.html" class="">About us</a></p>`
               }
            
            
            
        </div>
      </div>
    </nav>

`;
}


if(contain[0] === "about-us"){
  const changer = document.getElementById("changer")
  console.log(changer)
  let delay = 0
  const texts = [
    "Almacenamiento",
    "Durabilidad",
    "Seguridad",
    "Sencillez",
    "Eficaz"
  ]
  texts.forEach((text, index) => {
    setTimeout(() => {
      changer.innerHTML = text;
    }, delay);
  
    delay += 1200; // Incrementa el retraso para el siguiente texto
  });

}