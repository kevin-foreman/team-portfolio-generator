// use template literals for the Employee generator functions
// each employee class will have individual sections so the app is scalable


    // create the Employee sections
    // Manager class generator
    // Only one manager is required for the team
    const generateManager = function (manager) {
    return `
    <div class ="col-md-4 col-sm-6 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// Engineer class generator
const generateEngineer = function (engineer) {
    return `
    <! -- <div class ="col-md-4 col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

const generateIntern = function (intern) {
    return `
    <div class ="col-md-4 col-4 mb-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div> -->
    `;
}

generateHTML = (data) => {

    // empty array for the captured objects to populate
    pageArray = [];

    // Loop through the data to gather all the objects
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        // Manager piece
        if (role === 'Manager') {

            const managerObject = generateManager(employee);
            pageArray.push(managerObject);
        }

        // Engineer piece
        if (role === 'Engineer') {

            const engineerObject = generateEngineer(employee);
            pageArray.push(engineerObject);
        }

        // Intern piece
        if (role === 'Intern') {

            const internObject = generateIntern(employee);
            pageArray.push(internObject);
        }
    }
    const employeeSections = pageArray.join('')

    const generatePortfolio = generateTeamPortfolio(employeeSections)
    return generatePortfolio;

}
// Final piece using a template literal to set the base template for the html file

const generateTeamPortfolio = function (employeeSections) {
    // using open source images and fonts from google
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Public+Sans&family=Staatliches&display=swap">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class ="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Portfolio</span>
            </nav>
        </header>
        <main>
            <div class="row justify-content-center" id="team-objects">

                <!-- Team Member Objects -->
                ${employeeSections}

            </div>
        </main>

    </body>
        
        
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.6.0/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
</html>
`;
};

module.exports = generateHTML;