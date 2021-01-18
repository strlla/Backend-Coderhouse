const getWords = (text, fun, sec = 1000) => {
    const words = text.split(' ');
    let countWords = words.length;

    return new Promise((resolve, reject) => {
        let i = 0;
        words.forEach((w) => {
            setTimeout(()=>{
                fun(w)
            }, sec)
        })
    })
}

const show = (w) => console.log(w);

console.log(getWords('Hoy hace calor', show, 2000).then());
