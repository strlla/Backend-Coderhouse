import * as express from 'express';
import RouterProducts from './routes/products';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', RouterProducts);

app.set('views', './views');
app.set('view engine', 'ntl');
app.use(express.static('public'));

//handlebars
// app.engine("hbs", handlebars({
//     extname: ".hbs",
//     defaultLayout: "index.hbs", 
//     layoutDir: __dirname + "/views/layouts",
    
// }))


app.listen(3000, () => {
    try {
        console.log('Se levantó el servidor')
    } catch (error) {
        console.log(error)
    }
})