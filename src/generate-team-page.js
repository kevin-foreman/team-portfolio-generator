// use template literals for the Employee generator functions
// each employee class will have individual sections so the app is scalable


    // create the Employee sections
    // Manager class generator
    // Only one manager is required for the team
    const generateManager = function (manager) {
    return `
<div class="row">                
    <div class="" id="border">
        <div class="">
            <div class="card" style="margin: 20px;">
                <div class="" style="max-width: 18rem;">        
                    <div class="mt-5" style="margin: 5px;">
                        <h3 class="heading">${manager.name}</h3>
                        <h4>Role: ${manager.role}</h4><i class="material-icons">content_paste</i>
                        <div class="">
                            <div class="mt-3"> <span class="text1">Employee ID: ${manager.id}</span></div>
                            <span class="text2">Office #: ${manager.officeNumber}</span>
                            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

// Engineer class generator
const generateEngineer = function (engineer) {
    return `
<div class="container mt-5 mb-3" id="border">
    <div class="row">
        <div class="card" style="margin: 20px;">
            <div class="p-3 mb-3" style="max-width: 18rem;">
                <div class="mt-5" style="margin: 5px;">
                    <h3 class="heading">${engineer.name}</h3>
                    <h4>Role: ${engineer.role}</h4><i class="material-icons">logo_dev</i>
                    <div class="mt-5">
                        <div class="mt-3"> <span class="text1">Employee ID: ${engineer.id}</span></div>
                        <span class="text2">Github: <a href='https://github.com/${engineer.github}' target="_blank">${engineer.github}</a></span>
                        <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
}

const generateIntern = function (intern) {
    return `
<div class="container mt-5 mb-3" id="border">
    <div class="row">
        <div class="card" style="margin: 20px;">
            <div class="p-3 mb-3" style="max-width: 18rem;">
                <div class="mt-5" style="margin: 5px;">
                    <h3 class="heading">${intern.name}</h3>
                    <h4>Role: ${intern.role}</h4><i class="material-icons">supervised_user_circle</i>
                    <div class="mt-5">
                        <div class="mt-3"> <span class="text1">Employee ID: ${intern.id}</span></div>
                        <span class="text2">School: ${intern.currentSchool}</span>
                        <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
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
        <link rel="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.1/css/bootstrap-grid.css" rel="stylesheet">
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
        
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></scripts>        
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
</html>
`;
}

module.exports = generateHTML