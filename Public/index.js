



const items = document.getElementById("items");
const btn_show = document.getElementById("btn-show");
const rigin = document.getElementById("rigin");

items.style.display = "none";

btn_show.addEventListener("click", () => {
  if (items.style.display == "none") {
    items.style.display = "block";
  } else {
    items.style.display = "none";
  }
});

const footer = document.getElementById("footer").innerHTML = `

<h1 class=" ">Jaol-systems</h1>
      <div>
          <a href="" class="mx-2">Facebook</a>
          <a href="">Twitter</a>
      </div>

`

const my_items = [
    {
      title: "Registro",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, perspiciatis!",
      link: "",
    },
    {
      title: "Almacenamiento",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, perspiciatis!",
      link: "",
    },
    {
      title: "Contabilizacion",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, perspiciatis!",
      link: "",
    },
  ];
  

my_items.map((e) => {
  return (rigin.innerHTML += `
    
                <div class="bg-gray-50 shadow-lg w-56 p-5 rounded-sm ">
                <h1 class="text-center font-bold  text-2xl">${e.title}</h1>
                <p class="my-5">${e.text}</p>
                <button class="bg-red-500 px-4 py-2  mx-auto rounded-md font-semibold text-white"><a href="${e.link}">Saber mas!</a></button>
            </div>
            
            `);
});
