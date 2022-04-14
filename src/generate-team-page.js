// use template literals for the Employee generator functions
// each employee class will have individual sections so the app is scalable


    // create the Employee sections
    // Manager class generator
    // Only one manager is required for the team
    const generateManager = function (manager) {
    return `
<div class="container mt-5 mb-3" id="border">
    <div class="row">
        <div class="card col-md-4">
            <div class="p-3 mb-3" style="max-width: 18rem;">
                    <div class="d-flex flex-row align-items-center">
                        <div class="ms-2 c-details">
                        </div>
                            </div>
                <div class="mt-5">
                    <h3 class="heading">${manager.name}</h3>
                    <h4>Manager</h4><i class="material-icons">content_paste</i>
                    <div class="mt-5">
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
        <div class="card col-md-4">
            <div class="p-3 mb-3" style="max-width: 18rem;">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="ms-2 c-details">
                        </div>
                            </div>
                                </div>
                <div class="mt-5">
                    <h3 class="heading">${engineer.name}</h3>
                    <h4>Engineer</h4><i class="material-icons">logo_dev</i>
                    <div class="mt-5">
                        <div class="mt-3"> <span class="text1">Employee ID: ${engineer.id}</span></div>
                        <span class="text2">Github: <a href='https://github.com/${engineer.github}' ${engineer.github} target="_blank"></a></span>
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
        <div class="card col-md-4">
            <div class="p-3 mb-3" style="max-width: 18rem;">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="ms-2 c-details">
                        </div>
                            </div>
                                </div>
                <div class="mt-5">
                    <h3 class="heading">${intern.name}</h3>
                    <h4>Intern</h4><i class="material-icons">supervised_user_circle</i>
                    <div class="mt-5">
                        <div class="mt-3"> <span class="text1">Employee ID: ${intern.id}</span></div>
                        <span class="text2">School: ${intern.school}</span>
                        <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.6.0/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
</html>
`;
};

module.exports = generateHTML;

// Old styling
// Saving here to refer back to as the styling is changed


{/* <div class ="col-md-4 col-sm-6 mt-4">
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
</div> */}

// <! -- <div class ="col-md-4 col-4 mt-4">
//         <div class="card h-100">
//             <div class="card-header">
//                 <h3>${engineer.name}</h3>
//                 <h4>Engineer</h4><i class="material-icons">content_paste</i>
//             </div>
//             <div class="card-body">
//                 <p class="id">ID: ${engineer.id}</p>
//                 <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
//                 <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
//             </div>
//         </div>
//     </div>

{/* <div class ="col-md-4 col-4 mb-4">
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
    </div> --> */}