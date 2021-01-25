const getWords = (text, fin, sec = 1000) => {
    const words = text.split(' ');
    let countWords = words.length;
    let i = 0;
    const interval = setInterval(()=>{
        if (i >= countWords) {
            clearInterval(interval);
            console.log('Fin');
            console.log('Total palabras: '+ countWords);
            fin();
        } else {
            console.log(words[i]);
        }
        i++;  
    }, sec)
}

const fin1 = () => getWords('Hoy hace mucho calor', fin2, 3000);


const fin2 = () => getWords('Hola', ()=>{});



getWords('Kame hame ha', fin1, 2000);

