var operato = null;
var inputValueMemo = 0;

//Funcion que recoje los datos del button
function getContentClick(event){
    const value = event.target.innerHTML;
    filterAction(value);
}

//Funcion que filtra los metodos
const filterAction = value =>{
    value === "0" ? addNumberInput(0) : null;
    value === "1" ? addNumberInput(1) : null;
    value === "2" ? addNumberInput(2) : null;
    value === "3" ? addNumberInput(3) : null;
    value === "4" ? addNumberInput(4) : null;
    value === "5" ? addNumberInput(5) : null;
    value === "6" ? addNumberInput(6) : null;
    value === "7" ? addNumberInput(7) : null;
    value === "8" ? addNumberInput(8) : null;
    value === "9" ? addNumberInput(9) : null;
    value === "," ? addNumberInput(',') : null;

    value === "+" ? setOperation('+') : null;
    value === "-" ? setOperation('-') : null;
    value === "X" ? setOperation('*') : null;
    value === "/" ? setOperation('/') : null;
    value === "%" ? setOperation('%') : null;
    value === "+/-" ? setOperation('+/-') : null;

    value === "=" ? calculation() : null;
    value === "AC" ? resetCalculator() : null;
}

//Funcion que añadea los valores al input o pantalla de la calculadora
function addNumberInput(value){
    const inputScreen = document.getElementsByClassName('calculator__screen')[0];
    const inputValue = inputScreen.value;

    //este if lo que hace es validar que si ingresamos un numero borre el cero que esta.
    if(inputValue === "0" && inputValue.length === 1 && value !== ","){
        inputScreen.value = value;
        return;
    }

    //Concatenamos los valores que vamor ingresando
    inputScreen.value = inputValue + value;

    //El resultado al estar el placeholder añadir un valor debajo de 1 pero no cero
    if(inputScreen.value === "" && value === ","){
        inputScreen.value = 0 + value;
        return;
    }
}

//Funcion que recibe el operador y la guarda
function setOperation(operato){
    const inputScreenValue = document.getElementsByClassName("calculator__screen")[0].value;
    this.operato=operato;

    if(inputScreenValue != 0){
        calculation();
    }
}

//Funcion que guarda los calculas ya registrado
function calculation(){
    const inputScreen = document.getElementsByClassName("calculator__screen")[0];
    let valueOne = trasForm(this.inputValueMemo);
    let valueTwo = trasForm(inputScreen.value);
    let total = 0;

    if(this.operato === "+" && inputScreen.value !==""){
        total =valueOne+valueTwo;
    }

    if(this.operato === "-" && inputScreen.value !==""){
        if(valueOne !== 0){
            total = valueOne - valueTwo;
        }else{
            total= valueTwo;
        }
    }

    if(this.operato === "*" && inputScreen.value !==""){
        if(valueOne !== 0){
            total = valueOne * valueTwo;
        }else{
            total= valueTwo;
        }
    }

    if(this.operato === "/" && inputScreen.value !==""){
        if(valueOne !== 0){
            total = valueOne/valueTwo;
        }else{
            total= valueTwo;
        }
    }

    if(this.operato === "%" && inputScreen.value !==""){
        total = valueTwo/100;
    }

    if(this.operato === "+/-" && inputScreen.value !==""){
        if(valueTwo > 0){
            total = -valueTwo;
        }
    }

    total = trasFormInver(total);
    this.inputValueMemo = total;
    inputScreen.value = "";
    inputScreen.placeholder = total;
}

//Funcion que trasforma las comas en puntos para los datos tipo float
function trasForm(value){
    if(typeof value !== "number"){
        let resulTras = value.replace(',', '.');
        return parseFloat(resulTras)
    }
    return value;
}

//Funcion de trasformar los putos en coma
function trasFormInver(value){ 
    let resultInver = value.toString();
    resultInver = resultInver.replace('.',',');
    return resultInver;
}

//Funcion de resetiar pantalla con AC
const resetCalculator=()=>{
    const inputScreen = document.getElementsByClassName("calculator__screen")[0];
    inputScreen.value=0;
    this.inputValueMemo= 0;
    this.operato = null;
}