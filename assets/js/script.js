const pet = [];
const dogBreed = ["Fox Dog", "Russell Terriers", "Australian Cattle Dog"];
const catBreed = ["Persian", "Siamese", "Abyssinian"];
const bunnyBreed = ["Mini Rex", "Holland Lop", "Mini Lop"];

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  sameOwner(pet) {
    if (this.ownerName === pet.ownerName) return true;
    else return false;
  }
}

const addPet = event => {
  event.preventDefault();
  const petName = event.target.querySelector("#petName").value;
  const ownerName = event.target.querySelector("#ownerName").value;
  const species = event.target.querySelector("#species").value;
  const breed = event.target.querySelector("#breed").value;
  const newPet = new Pet(petName, ownerName, species, breed);
  pet.forEach(element => {
    if (newPet.sameOwner(element))
      console.log(newPet.petName, " & ", element.petName, " has the same owner: ", newPet.ownerName);
  });
  pet.push(newPet);
  //   document.querySelector("#list").innerHTML += `<li class="list-group-item">
  //     ${newPet.petName}, ${newPet.ownerName}, ${newPet.species}, ${newPet.breed}
  //     </li>`;

  const row = document.createElement("tr");
  const rowName = document.createElement("td");
  rowName.setAttribute("scope", "col");
  rowName.innerText = newPet.petName;
  const rowOwner = document.createElement("td");
  rowOwner.setAttribute("scope", "col");
  rowOwner.innerText = newPet.ownerName;
  const rowSpecies = document.createElement("td");
  rowSpecies.setAttribute("scope", "col");
  rowSpecies.innerText = newPet.species;
  const rowBreed = document.createElement("td");
  rowBreed.setAttribute("scope", "col");
  rowBreed.innerText = newPet.breed;
  row.appendChild(rowName);
  row.appendChild(rowOwner);
  row.appendChild(rowSpecies);
  row.appendChild(rowBreed);

  document.querySelector("#table").appendChild(row);
};

const selectBreed = event => {
  const species = event.target.value;
  const select = document.querySelector("#breed");
  //   select.innerHTML = "";
  select.innerHTML = `<option value="">select a breed</option>`;
  select.removeAttribute("disabled");
  switch (species) {
    case "dog":
      dogBreed.forEach(element => {
        select.innerHTML += `<option value="${element}">${element}</option>`;
      });
      break;
    case "cat":
      catBreed.forEach(element => {
        select.innerHTML += `<option value="${element}">${element}</option>`;
      });
      break;
    case "bunny":
      bunnyBreed.forEach(element => {
        select.innerHTML += `<option value="${element}">${element}</option>`;
      });
      break;
    default:
      select.setAttribute("disabled", "");
  }
};

document.querySelector("#species").addEventListener("change", selectBreed);
