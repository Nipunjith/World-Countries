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