

const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: 'Darwin Quispe',
    total: 1000,
};

invoice.client.name = 'Pepe';
invoice.total = 5000;
console.log(invoice);

