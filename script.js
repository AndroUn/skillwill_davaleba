// დავალება 1

function calculate(a, b){
    if ( a === b){
        console.log("a ტოლია b");
    }
    else {
        console.log("a არ არის ტოლი b")
    }
}

calculate(5, 5);
calculate(5, "5");

// დავალება 2

function fahrenheitToCelsius(f){
    if (typeof(f) === "number") {
        let c = ((f - 32)/1.8)
        console.log(`${f} გრადუსი ფარენჰეიტში ტოლია ${c.toFixed(2)} გრადუსს ცელსიუსში`);
    }
    else{
        console.log("შეცდომა");
    }
}

fahrenheitToCelsius(105);
fahrenheitToCelsius("a");


// დავალება 3

function calculate2(a, b, operation){
    if(typeof(a) !== "number" || typeof(b) !== "number"){
        console.log("შეცდომა");
    }
    else if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/"){
        console.log("შეცდომა");
    }
    else if (operation == "+"){
        console.log(`a+b=${a+b}`);
    }
    else if (operation == "-"){
        console.log(`a-b=${a-b}`);
    }
    else if (operation == "*"){
        console.log(`a*b=${a*b}`);
    }
    else if (operation == "/"){
        console.log(`a/b=${a/b}`);
    }
}


calculate2(11, 5, "-");
calculate2(11, "5", "-");
calculate2(11, 5, "true");


