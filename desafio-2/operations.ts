const ops = {
    operation(n1: number, n2: number, op: string){
        switch (op.toUpperCase()) {
            case 'SUMA': return n1 + n2;
            case 'RESTA': return n1 - n2;
            default: break;
        }
    }
}

export default ops;