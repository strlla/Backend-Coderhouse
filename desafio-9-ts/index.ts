import * as express from 'express';
import RouterProducts from './routes/products';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', RouterProducts);

app.listen(3002, () => {
    try {
        console.log('Se levantó el servidor')
    } catch (error) {
        console.log(error)
    }
})