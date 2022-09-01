let mobiles = {
  Iphone: {
    IphoneX: {
      Name: "Iphone",
      Model: "Iphone X",
      Ram: "3 GB",
      Rom: "64 GB",
      Price: "$218",
    },
    Iphone12: {
      Name: "Iphone",
      Model: "Iphone 12",
      Ram: "4 GB",
      Rom: "128 GB",
      Price: "$799",
    },
    Iphone13: {
      Name: "Iphone",
      Model: "Iphone 13",
      Ram: "4 GB",
      Rom: "128 GB",
      Price: "$1699",
    },
  },
  Samsung: {
    Note5: {
      Name: "Samsung",
      Model: "Galaxy Note 5",
      Ram: "4 GB",
      Rom: "32 GB",
      Price: "$101",
    },
    Note8: {
      Name: "Samsung",
      Model: "Galaxy Note 8",
      Ram: "6 GB",
      Rom: "64 GB",
      Price: "$419",
    },
    S22: {
      Name: "Samsung",
      Model: "Galaxy Note 5",
      Ram: "8 GB",
      Rom: "128 GB",
      Price: "$799",
    },
  },
  Oppo: {
    Reno8: {
      Name: "Oppo",
      Model: "Reno 8",
      Ram: "8 GB",
      Rom: "128 GB",
      Price: "$399",
    },
    A36: {
      Name: "Oppo",
      Model: "A36",
      Ram: "8 GB",
      Rom: "256 GB",
      Price: "$353",
    },
    K10: {
      Name: "Oppo",
      Model: "K10",
      Ram: "6 GB",
      Rom: "128 GB",
      Price: "$220",
    },
  },
  Google: {
    Pixel6: {
      Name: "Google",
      Model: "Pixel 6",
      Ram: "8 GB",
      Rom: "128 GB",
      Price: "$599",
    },
    Pixel7: {
      Name: "Google",
      Model: "Galaxy Note 5",
      Ram: "8 GB",
      Rom: "128 GB",
      Price: "$400",
    },
    Pixel8: {
      Name: "Google",
      Model: "Galaxy Note 5",
      Ram: "8 GB",
      Rom: "256 GB",
      Price: "$600",
    },
  },
  Infinix: {
    Smart6: {
      Name: "Infinix",
      Model: "Smart 6",
      Ram: "2 GB",
      Rom: "32 GB",
      Price: "$102",
    },
    Hot11: {
      Name: "Infinix",
      Model: "Hot 11",
      Ram: "4 GB",
      Rom: "64 GB",
      Price: "$128",
    },
    Note11: {
      Name: "Infinix",
      Model: "Note 11",
      Ram: "6 GB",
      Rom: "128 GB",
      Price: "$229",
    },
  },
  Xiaomi: {
    Redmi10: {
      Name: "Xiaomi",
      Model: "Redmi 10",
      Ram: "4 GB",
      Rom: "64 GB",
      Price: "$173",
    },
    RedmiNote10: {
      Name: "Xiaomi",
      Model: "Redmi Note 10",
      Ram: "4 GB",
      Rom: "128 GB",
      Price: "$182",
    },
    RedmiK50: {
      Name: "Xiaomi",
      Model: "Redmi K50",
      Ram: "8 GB",
      Rom: "128 GB",
      Price: "$368",
    },
  },
};

let phoneName = document.getElementById("phoneParent");
let phoneModel = document.getElementById("modelParent");

function fillPhones() {
  let phones = Object.keys(mobiles);
  phoneName.innerHTML = "";
  for (var i = 0; i < phones.length; i++) {
    phoneName.innerHTML += `
    <option class = 'fs-5' value = '${phones[i]}'>${phones[i]}</option>
    `;
  }
}

fillPhones();

function fillModel() {
  phoneModel.disabled = false;
  phoneModel.className += " bg-dark text-white";
  let models = Object.keys(mobiles[phoneName.value]);
  console.log(models);
  phoneModel.innerHTML = "";
  for (var i = 0; i < models.length; i++) {
    phoneModel.innerHTML += `
    <option class = 'fs-5' value = '${models[i]}'>${models[i]}</option>
    `;
  }
}

function showSpecs() {
  let specsParent = document.getElementById("specsParent");
  let specs = mobiles[phoneName.value][phoneModel.value];
  let headings = Object.keys(specs);
  let values = Object.values(specs);
  console.log(specs);
  specsParent.innerHTML = "";
  for (var i = 0; i < headings.length; i++) {
    specsParent.innerHTML += `
      <li class = 'list-group-item fs-4'><span class = text-primary>${headings[i]} </span> : ${values[i]}</li>
      `;
  }
}
