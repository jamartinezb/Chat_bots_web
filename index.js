window.onload = iniciar;



function iniciar(){
    const brain = require("brain.js").brain;
    const redNeuronal = new brain.NeuralNetwork();

    const datos = [
        {
            "input": "hola",
            "output": {"hola": 1}
        },
        {
            "input": "buenas",
            "output": {"hola": 1}
        },
        {
            "input": "buenas tardes",
            "output": {"hola": 1}
        },
        {
            "input": "adios",
            "output": {"chao": 1}
        },
        {
            "input": "bye",
            "output": {"adios": 1}
        }

    ];
    redNeuronal.train(datos);

    let resultados = brain.likely("hola", redNeuronal);
    console.log(resultados);
}