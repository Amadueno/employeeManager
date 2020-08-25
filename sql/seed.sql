USE employee_db;

INSERT INTO department (name)
VALUES ('Sales'), ('Development');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Rep', 125000, 1),
  ('Sales Manager', 150000, 1),
  ('Jr Developer', 125000, 2),
  ('Sr Developer', 150000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kobe', 'Bryant', 2, NULL),
  ('John', 'Stockton', 1, 1),
  ('Jerry', 'Sloan', 4, NULL),
  ('Pau', 'Gasol', 3, 3);