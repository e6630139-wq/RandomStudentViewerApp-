const students = [
  let students = [
 { name: "Aishwarya J", reg: "953424104001" },
 { name: "Anantha Suruthika P", reg: "953424104002" },
 { name: "Andrews Y", reg: "953424104003" },
 { name: "Anisha B", reg: "953424104004" },
 { name: "Antony Brainlee J", reg: "953424104005" },
 { name: "Arihara Sudhan J", reg: "953424104006" },
 { name: "Ariyanayagi K", reg: "953424104007" },
 { name: "Arshath Ameerkhan I", reg: "953424104008" },
 { name: "Aswin M L", reg: "953424104009" },
 { name: "Bellshya S", reg: "953424104010" },
 { name: "Bhavana V", reg: "953424104011" },
 { name: "Bibin Brayan Paul A J", reg: "953424104012" },
 { name: "Chandru V", reg: "953424104013" },
 { name: "Christopher C", reg: "953424104014" },
 { name: "Deepa Dharshini R", reg: "953424104015"},
 { name: "Epsi Princy A", reg: "953424104017" },
 { name: "Evangelin Rabiksha F", reg: "953424104019" },
 { name: "Fancy Jebamalar J", reg: "953424104020" },
 { name: "Harish L", reg: "953424104021" },
 { name: "Idavathi V", reg: "953424104022" },
 { name: "Janani R", reg: "953424104023" },
 { name: "Jebaraj A", reg: "953424104025" },
 { name: "Jebasobisha P", reg: "953424104026" },
 { name: "Jebin M", reg: "953424104027" },
 { name: "Jenifer Evangelin E", reg: "953424104028" },
 { name: "Jenista Smilin D", reg: "953424104029" },
 { name: "Jeyadharshan K", reg: "953424104030" },
 { name: "Jeya Dharsini S", reg: "953424104031" },
 { name: "Jeyaseeli K", reg: "953424104032" },
 { name: "Jini Victoriya A", reg: "953424104033" },
 { name: "Kajasri Muthumani V", reg: "953424104034" },
 { name: "Kajendiran P", reg: "953424104035" },
 { name: "Kanish Ragul S", reg: "953424104036" },
 { name: "Kannan D", reg: "953424104037" },
 { name: "Karan B", reg: "953424104038" },
 { name: "Keerthana Chellam S", reg: "953424104039" },
 { name: "Keerthika S", reg: "953424104040" },
 { name: "Kiruthika R", reg: "953424104041" },
 { name: "Lakshmi Menaka J", reg: "953424104042" },
 { name: "Lakshmi Venkadeshwari", reg: "953424104043" },
 { name: "Madhavan R", reg: "953424104044" },
 { name: "Maha Swetha I", reg: "953424104045" },
 { name: "Megalingam V", reg: "953424104046" }
];
];

function showStudent() {
  const random = Math.floor(Math.random() * students.length);
  document.getElementById("output").innerHTML =
    "Register Number: " + students[random].reg + "<br>Name: " + students[random].name;
}
