let tblCountries = document.getElementById("tblCountries");

let tableBody= `    <tr>
      <th><h1>Country Name</h1></th>
      <th><h1>Flag</h1></th>
    </tr>`


fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then(data=>{
  
  data.forEach(element =>{

    tableBody+=`    <tr>
      <td><h1>${element.name.common}</h1> <h4>
      <br> ${element.name.official} 
      <br> Population : ${element.population} </h4>
      <br> <a href=${element.maps.googleMaps}><button type="button" class="btn btn-primary">Go to Map</button></a>
      </td>
      <td><img src="${element.flags.png}">  <br></td>
    </tr>`

  });

  tblCountries.innerHTML=tableBody;

})

//----------Search Part -----------------

function searchCountry(){
  let userInput = document.getElementById("txtInput").value;

  let flagImg = document.getElementById("flagImg");
  let name = document.getElementById("name");
  let officialName = document.getElementById("officialName");
  let population = document.getElementById("population");

fetch(`https://restcountries.com/v3.1/name/${userInput}`)
.then(res=>res.json())
.then(data=>{
  data.forEach(obj=>{
    flagImg.src=obj.flags.png
    name.innerText=obj.name.common
    officialName.innerText=obj.name.official
    population.innerText=obj.population

  })
})



}
//----------------------------------Sirs------------------

// function searchCountry(){
//   console.log("button clicked")
//   let userInput = document.getElementById("txtInput").value;

//   let flagImg = document.getElementById("flagImg");
//   let name = document.getElementById("name");
//   let officialName = document.getElementById("officialName");
//   let region = document.getElementById("region");
//   let population = document.getElementById("population");

//   fetch(`https://restcountries.com/v3.1/name/${userInput}`)
//   .then(res=>res.json())
//   .then(data=>{
//       data.forEach(obj=>{
//           console.log(obj);
//           flagImg.src=obj.flags.png
//           name.innerText=obj.name.common
//           officialName.innerText=obj.name.official
//           region.innerText=obj.region;
//           population.innerText=obj.population
//       })
//   })
// }