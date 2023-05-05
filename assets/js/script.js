let parrafo = document.querySelector("p").innerHTML; //EL texto del parrafo
let data = [
    {
        hexa: "#FF5500",
        word: 'sed',
        wordToReplace: "UNO",
        regex: /sed/ig,
        count: 6
    },
    {
        hexa: "#FF99B2",
        word: 'vehicula',
        wordToReplace: "DOS",
        regex: /vehicula/ig,
        count: 4
    },
    {
        hexa: "#FF99F5",
        word: 'vivamus',
        wordToReplace: "TRES",
        regex: /vivamus/ig,
        count: 3
    },
    {
        hexa: "#BB99FF",
        word: 'nam',
        wordToReplace: "CUATRO",
        regex: /nam/ig,
        count: 3
    },
    {
        hexa: "#99C5FE",
        word: 'eros',
        wordToReplace: "CINCO",
        regex: /eros/ig,
        count: 2
    },
    {
        hexa: "#00CEFF",
        word: 'vestibulum',
        wordToReplace: "SEIS",
        regex: /vestibulum/ig,
        count: 2
    },
    {
        hexa: "#01FFFE",
        word: 'quam',
        wordToReplace: "SIETE",
        regex: /quam/ig,
        count: 2
    },
    {
        hexa: "#00FF9F",
        word: 'sollicitudin',
        wordToReplace: "OCHO",
        regex: /sollicitudin/ig,
        count: 2
    },
    {
        hexa: "#B6FF01",
        word: 'finibus',
        wordToReplace: "NUEVE",
        regex: /finibus/ig,
        count: 2
    },
    {
        hexa: "#FFFF00",
        word: 'dictum',
        wordToReplace: "DIEZ",
        regex: /dictum/ig,
        count: 2
    },
    {
        hexa: "#FFB600",
        word: 'morbi',
        wordToReplace: "ONCE",
        regex: /morbi/ig,
        count: 2
    }
]



data.forEach(element => {

    let count = (parrafo.match(element.regex) || []).length

    console.log(`%c ${element.word} : ${count}`, `color: ${element.hexa}`)
    parrafo = parrafo.replaceAll(element.regex, element.wordToReplace)

    count ||= (count == element.count) // count = count || (count==elemet.count)
    //console.log(count);
})

document.querySelector("p").innerHTML = parrafo;