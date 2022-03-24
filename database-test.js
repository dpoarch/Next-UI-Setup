const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');



async function openDb() {
  return sqlite.open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database,
  });
}


async function setup() {
    const db = await openDb();
    await db.migrate({migrationsPath: './migrations', force: 'last'});

    const people = await db.all('SELECT * FROM person');
    console.log('ALL USER', JSON.stringify(people, null, 2));

    const vehicles = await db.all('SELECT * FROM vehicle');
    console.log('ALL VEHICLES', JSON.stringify(vehicles, null, 2));
}

setup();