const Ravenswift = require('./dist/index');

const client = new Ravenswift('http://127.0.0.1:3000', 'M2wAqNa', 'tetsinmg');


addSubscriber();

async function addSubscriber() {
    try {
        const response = await client.addSubscriber("Miguel Puerta", "migtarx@gmail.com");
        //console.log(response);
    } catch (error) {
        console.error(error);
    }
}


