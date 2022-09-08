let mobiles = [
        {                    
          companyName: "Iphone",
          Model: "Iphone X",
          Ram: "3 GB",
          Rom: "64 GB",
          Price: "$218",
        },
        {
          companyName: "Iphone",
          Model: "Iphone 12",
          Ram: "4 GB",
          Rom: "128 GB",
          Price: "$799",
        },
        {
          companyName: "Iphone",
          Model: "Iphone 13",
          Ram: "4 GB",
          Rom: "128 GB",
          Price: "$1699",
        },
        {
          companyName: "Samsung",
          Model: "Galaxy Note 5",
          Ram: "4 GB",
          Rom: "32 GB",
          Price: "$101",
        },
        {
          companyName: "Samsung",
          Model: "Galaxy Note 8",
          Ram: "6 GB",
          Rom: "64 GB",
          Price: "$419",
        },
        {
          companyName: "Samsung",
          Model: "Galaxy S22",
          Ram: "8 GB",
          Rom: "128 GB",
          Price: "$799",
        },
        {
          companyName: "Oppo",
          Model: "Reno 8",
          Ram: "8 GB",
          Rom: "128 GB",
          Price: "$399",
        },
        {
          companyName: "Oppo",
          Model: "A36",
          Ram: "8 GB",
          Rom: "256 GB",
          Price: "$353",
        },
        {
          companyName: "Oppo",
          Model: "K10",
          Ram: "6 GB",
          Rom: "128 GB",
          Price: "$220",
        },
        {
          companyName: "Google",
          Model: "Pixel 6",
          Ram: "8 GB",
          Rom: "128 GB",
          Price: "$599",
        },
        {
          companyName: "Google",
          Model: "Pixel 7",
          Ram: "8 GB",
          Rom: "128 GB",
          Price: "$400",
        },
        {
          companyName: "Google",
          Model: "Pixel 8",
          Ram: "8 GB",
          Rom: "256 GB",
          Price: "$600",
        },
        {
          companyName: "Infinix",
          Model: "Smart 6",
          Ram: "2 GB",
          Rom: "32 GB",
          Price: "$102",
        },
        {
          companyName: "Infinix",
          Model: "Hot 11",
          Ram: "4 GB",
          Rom: "64 GB",
          Price: "$128",
        },
        {
          companyName: "Infinix",
          Model: "Note 11",
          Ram: "6 GB",
          Rom: "128 GB",
          Price: "$229",
        },
        {
          companyName: "Xiaomi",
          Model: "Redmi 10",
          Ram: "4 GB",
          Rom: "64 GB",
          Price: "$173",
        },
        {
          companyName: "Xiaomi",
          Model: "Redmi Note 10",
          Ram: "4 GB",
          Rom: "128 GB",
          Price: "$182",
        },
        {
          companyName: "Xiaomi",
          Model: "Redmi K50",
          Ram: "8 GB",
          Rom: "128 GB",
          Price: "$368",
        },
]

let phoneName = document.getElementById("phoneParent");
let phoneModel = document.getElementById("modelParent");

let phones = mobiles.map(
  (values) => {
    return values.companyName
  }
)

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

let companies = phones.filter(
  onlyUnique
)


function fillPhones() {
  phoneName.innerHTML = "";
  for (var i = 0; i < companies.length; i++) {
    phoneName.innerHTML += `
    <option class = 'fs-5' value = '${companies[i]}'>${companies[i]}</option>
    `;
  }
}

fillPhones();


function fillModel() {
  phoneModel.disabled = false;
  phoneModel.className += " bg-dark text-white";
  let models = mobiles.filter((values)=>{
    if(values.companyName == phoneName.value){
      return values.Model
    }
  });
  console.log(models);
  phoneModel.innerHTML = "";
  for (var i = 0; i < models.length; i++) {
    phoneModel.innerHTML += `
    <option class = 'fs-5' value = '${models[i].Model}'>${models[i].Model}</option>
    `;
  }
}

function showSpecs() {
  let specsParent = document.getElementById("specsParent");
  // let specs = mobiles[phoneName.value][phoneModel.value];
  // let headings = Object.keys(specs);
  // let values = Object.values(specs);
  let headings = mobiles.filter((headings)=>{
    if(headings.Model == phoneModel.value){
      return(headings)
    }
  })
  // console.log(Object.keys(headings[0]));
  let headingValues = Object.keys(headings[0]);
  headingValues.shift();
  let data = Object.values(headings[0]);
  data.shift();
  specsParent.innerHTML = "";
  for (var i = 0; i < headingValues.length; i++) {
    specsParent.innerHTML += `
      <li class = 'list-group-item fs-4'><span class = text-primary>${headingValues[i]} </span> : ${data[i]}</li>
      `;
  }
}
