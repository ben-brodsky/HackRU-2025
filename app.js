import { printData } from './test_database.js';
import { addUsername } from './test_database.js';
import { getJobListings } from './test_database.js';
import { addPassword } from './test_database.js';


async function main() {
    console.log(await printData());
    console.log(await addUsername("newlyMadeAccount")); // should add a new user to database
    console.log(await getJobListings("newlyMadeAccount")); // should show job title of user 
    console.log(await addPassword("newlyMadeAccount", "test_password")); // should add a password to the user) SUPER NOT SECURE
    console.log(await printData());
}

main();