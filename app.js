import { printData } from './test_database.js';

async function main() {
    console.log(await printData());
}

main();