class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
    
    DisplayColors = () =>{
        
        //let myCountry = country;
        document.querySelector("#CountryName").innerText = this.name;
        document.querySelector("#OfficialLanguage").innerText = this.lang;
        document.querySelector("#HelloWorld").innerText = this.greeting;
        
        document.querySelector("#Color1").style.backgroundColor = this.colors[0];
        document.querySelector("#Color2").style.backgroundColor = this.colors[1];
        document.querySelector("#Color3").style.backgroundColor = this.colors[2];
        
    }
}

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["https://www.reddit.com/r/reactiongifs/", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])


function SwitchCountry() {
    selectElement = document.querySelector("#CountryList");
    let input = selectElement.value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        // DisplayColors(country)
    }
    else if (input === "Mexico") {
        country = mexico;
    //    DisplayColors(country)
    }
    else if (input === "Algeria") {
        country = algeria;
        // DisplayColors(country)
    }
    country.DisplayColors();
}

// DisplayColors = (country) =>{
//     console.log(country)
//     //let myCountry = country;
//     document.querySelector("#CountryName").innerText = country.name;
//     document.querySelector("#OfficialLanguage").innerText = country.lang;
//     document.querySelector("#HelloWorld").innerText = country.greeting;
    
//     document.querySelector("#Color1").style.backgroundColor = country.colors[0];
//     document.querySelector("#Color2").style.backgroundColor = country.colors[1];
//     document.querySelector("#Color3").style.backgroundColor = country.colors[2];
    
// }
