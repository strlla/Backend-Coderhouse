const getWords = (text, fin, sec = 1000) => {
    const words = text.split(' ');
    let countWords = words.length;
    let i = 0;
    const interval = setInterval(()=>{
        if (i >= countWords) {
            fin(interval, countWords) ;
        } else {
            console.log(words[i]);
        }
        i++;  
    }, sec)
}
const fin = (interval, countWords) => {
    clearInterval(interval);
    console.log('Fin');
    console.log('Total palabras: '+ countWords);
}

getWords('Kame hame ha', fin, 4000);

getWords('Hoy hace mucho calor', fin, 3000);

getWords('Hola', fin);
