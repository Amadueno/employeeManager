const require = require('inquirer')
const mysql = reuire('mysql2')

const db = mysql.createConnection('mysql://root:rootroot')

const mainMenu = () => {
    prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'choose an action:',
            choices: [
                {
                    name: 'View Employees', 
                    value: 'viewEmployess'
                },
                {
                    name: 'Add an Employee',
                    value: 'addEmployee'
                },
                {
                    name: 'View Departments',
                    value: 'viewDepartments'
                },
                {
                    name: 'View Roles',
                    value: 'viewRoles'
                },
                {
                    name: 'Add a Role',
                    value: 'addRole'
                }
            ]

        }
    ])

}

const viewEmployees = ( ) => {
    db.query(`
     SELECT employee.id, employee.first_name, employee.last_name, 
      role.title, role.salary, department.name AS department, 
      CONCAT(manager.first_name, ' ', manager.last_name) AS manager
     FROM employee
     LEFT JOIN role
     ON employee.role_id = role.id
     LEFT JOIN department
     ON role.department_id = department.id
     LEFT JOIN employee manager
     ON manager.id = employee.manager_id
    `, (err,data) => {
        if(err) {console.log(err)}
        console.table(data)
    })
}