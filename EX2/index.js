const form = document.getElementById("myForm");
const buttonBookmarck = document.createElement("button");

// const BuildBookmarck = () => {

// }
// const buildPhoto = () =>{

// }
// const BuildEmail = ()=>{

// }
const buildElement = (data) =>{
  // buildPhoto()
  // BuildBookmarck()
  // BuildEmail()
  console.log(data);
  data.items.map((item) => {
    newDiv = document.getElementById("result").innerHTML = 
    `<img class="img-thumbnail"  src="${item.owner.avatar_url}"/> 
    ${item.full_name} 
    
    `
    newButton= document.getElementById("bookmark").innerHTML =
    buttonBookmarck.innerHTML="click";
    document.body.appendChild(btn);
  

  });
}

const getRepo = async (e) => {
  
  e.preventDefault();
  const search = document.getElementById("search").value;
  const nameSearch = search.split(" ").join("");

  try {
    const response = await fetch("https://api.github.com/search/repositories?q=" + nameSearch);
    buildElement(await response.json())
  } catch (err) {
    console.log(err);
  }
};

form.addEventListener("submit", getRepo);
