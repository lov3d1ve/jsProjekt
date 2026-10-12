//Program objektum
let program = {
  "16:30 - 17:30": {
    Szerda: "Lil 404",
    Csütörtök: "Fiúk",
    Péntek: "Kisbetűs Ünnepnapok",
    Szombat: "Metallicum",
  },
  "18:00 - 19:00": {
    Szerda: "Kolibri",
    Csütörtök: "Nagy Bogi",
    Péntek: "Dánielfy",
    Szombat: "Blahalousiana",
  },
  "19:30 - 20:30": {
    Szerda: "Honeybeast",
    Csütörtök: "Mehringer",
    Péntek: "Punnany Massif",
    Szombat: "L. L. Junior",
  },
  "21:00 - 22:00": {
    Szerda: "Bruno & Spacc",
    Csütörtök: "Quimby",
    Péntek: "Mirror Glimpse",
    Szombat: "T. Danny",
  },
};

//Az objektum kulcsai tömbben
let keysIdopontok = Object.keys(program);
let keysNapok = Object.keys(program[keysIdopontok[0]]);

function objectKiiras() {
  let table = "<table>";

  //Fejlécsor (napok)
  table += "<tr><th></th>";
  for (let i = 0; i < keysNapok.length; i++) {
    table += `<th>${keysNapok[i]}</th>`;
  }
  table += "</tr>";

  //Többi sor (időpontok és előadók)
  for (let i = 0; i < keysIdopontok.length; i++) {
    table += "<tr>";
    table += `<th>${keysIdopontok[i]}</th>`;
    for (let j = 0; j < keysNapok.length; j++) {
      table += `<td>${program[keysIdopontok[i]][keysNapok[j]]}</td>`;
    }
    table += "</tr>";
  }

  table += "</table>";

  document.getElementById("tabla").innerHTML = table;
}

function programModositas() {
  if (document.getElementById("radioTorol").checked) {
    program[keysIdopontok[document.getElementById("changeIdopont").value]][
      keysNapok[document.getElementById("changeNap").value]
    ] = "";
  } else {
    program[keysIdopontok[document.getElementById("changeIdopont").value]][
      keysNapok[document.getElementById("changeNap").value]
    ] = document.getElementById("textUjeloado").value;
  }

  document.getElementById("textUjeloado").value = "";
  objectKiiras();
}

function mezoLetiltas() {
  if (document.getElementById("radioTorol").checked) {
    document.getElementById("textUjeloado").disabled = true;
  } else {
    document.getElementById("textUjeloado").disabled = false;
  }
}

//---------------------------------Főprogram---------------------------------
objectKiiras();

document
  .getElementById("formSzerkesztes")
  .addEventListener("submit", programModositas);

document
  .getElementById("radioModosit")
  .addEventListener("change", mezoLetiltas);
document.getElementById("radioTorol").addEventListener("change", mezoLetiltas);
