import RouterProducts from './routes/products';
import * as handlebars from 'express-handlebars';
import * as express from 'express';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use('/api', RouterProducts);
app.use(express.json());

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', './views');


//handlebars
app.engine("hbs", handlebars({
     extname: ".hbs",
     defaultLayout: "index.hbs", 
     layoutsDir: __dirname + "/views/layouts"
}))


app.listen(3003, () => {
    try {
        console.log('Se levantó el servidor')
    } catch (error) {
        console.log(error)
    }
})