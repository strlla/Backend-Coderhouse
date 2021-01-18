import Numbers from './numbers';

const operation = async (n1: number, n2: number, op: string): Promise<number | undefined> => {
    //cargar un modulo para realizar tal operacion
    try {
        switch (op.toUpperCase()) {
            case 'SUMA': return n1 + n2;
            case 'RESTA': return n1 - n2;
            default: break;
        }
    } catch (e) {
        console.log('Hubo un error: ' + e);
    }
}

const operations = (fun: Promise<number | undefined>) => fun;


const numbers = new Numbers(14, 6);

operations(operation(numbers.getNumbers()[0], numbers.getNumbers()[1], 'resta')).then(res => console.log(`El resultado es: ${res}`))