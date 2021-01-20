const getWords = (text, fun, sec = 1000) => {
    const words = text.split(' ');
    let countWords = words.length;
    let i = 0;
    
        words.forEach((w) => {
            const interval = setInterval(()=>{
                fun(w)
                if( i >= countWords ){
                    clearInterval(interval);
                }
                i++;  
            }, sec)    
  
        })
}

const show = (w) => console.log(w);

console.log(getWords('Kame hame ha', show, 4000));
