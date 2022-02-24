const genManagerCard = function (manager) {
    return `
    <div class='col-4 mt-4'>
    <div class='card h-100'>
    <div class='card-header'>
        <h2>${manager.name}</h2>
        <h3>Manager</h3>
    </div>
    <div class='card-body'>
        <p class='manID'>ID: ${manager.id}</p>
        <p class='manEmail'>Email: <a href='mailto:${manager.email}'>${manager.email}</a></p>
        <p class='manOffice'>Office Number: ${manager.officeNumber}</p>
    </div>
    </div>
    </div>
    `;
}
const genEngiCard = function (engineer) {
    return `
    <div class='col-4 mt-4'>
    <div class='card h-100'>
    <div class='card-header'>
        <h2>${engineer.name}</h2>
        <h3>Engineer</h3>
    </div>
    <div class='card-body'>
        <p class='engiID'>ID: ${engineer.id}</p>
        <p class='engiEmail'>Email: <a href='mailto:${engineer.email}'>${engineer.email}</a></p>
        <p class='engiGithub'>Github: <a href='https://github.com/${engineer.github}'>${engineer.github}</a></p>
    </div>
    </div>
    </div>
    `
}
const genInternCard = function (intern) {
    return `
    <div class='col-4 mt-4'>
    <div class='card h-100'>
    <div class='card-header'>
        <h2>${intern.name}</h2>
        <h3>Intern</h3>
    </div>
    <div class='card-body'>
        <p class='internID'>ID: ${intern.id}</p>
        <p class='internEmail'>Email: <a href='mailto:${intern.email}'>${intern.email}</a></p>
        <p class='internSchool'>School: ${intern.school}</p>
    </div>
    </div>
    </div>
    `
};

generateHTML = (data) => {
    cardArray = [];

    for(let i = 0; i < data.length ; i++){

        const emp = data[i];
        const role = emp.getRole();

        if(role === 'Manager'){
            const managerCard = genManagerCard(emp);
            cardArray.push(managerCard);
        }
        
        if(role === 'Engineer'){
            const engiCard = genEngiCard(emp);
            cardArray.push(engiCard);
        }
        
        if(role === 'Intern'){
            const internCard = genInternCard(emp);
            cardArray.push(internCard);
        }
    }


    const empCards = cardArray.join('');

    const genTeam = genTeamPage(empCards);

    return genTeam;
}

const genTeamPage = function (empCards) {
    return `
    <!DOCTYPE html>
    <html lang='EN'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Generated Software Team Profile</title>
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'>
        </head>
    <body>
        <header>
        <nav class='navbar' id='navbar'>
            <span class='navbar-brand mb-0 h1 w-100 text-center' id='navbar-text'>Software Team Profiles</span>
        </nav>
        </header>
        <main>
        <div class='container'>
            <div class='row justify-content-center' id='team-cards'>
                ${empCards}
            </div>
        </div>
        </main>
    </body>
    </html>
  `;
  }
  
  module.exports = generateHTML; 