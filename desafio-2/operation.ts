import Numbers from './numbers';
const ops = './operations.ts';

const operation = async (n1: number, n2: number, op: string): Promise<number | undefined> => {
    //cargar un modulo para realizar tal operacion
    try {
        const module = await import(ops);
        return await module.default.operation(n1, n2, op);
    } catch (e) {
        console.log('Hubo un error: ' + e);
    }
}

const operations = (fun: Promise<number | undefined>) => fun;


const numbers = new Numbers(14, 6);

operations(operation(numbers.getNumbers()[0], numbers.getNumbers()[1], 'resta')).then(res => console.log(`El resultado es: ${res}`))