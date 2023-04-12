function showCountries() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://randomuser.me/api", true);

  xhr.onload = function () {
    if (xhr.status == 200) {
      console.log(xhr.response);
      let persons = JSON.parse(this.response);
      console.log(persons);
      persons.forEach((person)=>{
        const personCard = document.createElement("div");
        personCard.innerHTML = person.results;
        document.getElementById("feed").appendChild(personCard);
      });
    }
  };
  xhr.send();
}
