const form = document.getElementById("myForm");
let finalHtml = "";
// const BuildBookmarck = () => {

// }
// const buildPhoto = () =>{

// }
// const BuildEmail = ()=>{

// }
const buildElement = (data) => {
  // buildPhoto()
  // BuildBookmarck()
  // BuildEmail()
  console.log(data);
  data.items.map((item) => {
    finalHtml +=
      `<img class="img-thumbnail"  src="${item.owner.avatar_url}"/> 
    ${item.full_name} 
    `
    document.getElementById("result").innerHTML = finalHtml;
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
