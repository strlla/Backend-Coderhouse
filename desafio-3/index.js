const getWords = (text, fun, sec = 1000) => {
    const words = text.split(' ');
    let countWords = words.length;
    let i = 0;
    const interval = setInterval(()=>{
        if (i > countWords){
            clearInterval(interval);
        } else {
            fun(words[i])
        }
        i++;  
    }, sec)      
}

const show = (w) => console.log(w);

console.log(getWords('Kame hame ha', show, 4000));
