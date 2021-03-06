INSERT INTO role_type (name) VALUES ('HR');
INSERT INTO role_type (name) VALUES ('Staff');

INSERT INTO leave_type (name) VALUES ('Annual Leave');
INSERT INTO leave_type (name) VALUES ('Medical Leave');

INSERT INTO leave_status (name) VALUES ('Pending Approval');
INSERT INTO leave_status (name) VALUES ('Approved');
INSERT INTO leave_status (name) VALUES ('Rejected');
INSERT INTO leave_status (name) VALUES ('Cancel');

INSERT INTO employees (name, dept, join_since, role_type_id, username, password) VALUES ('Michelle', 'Manpower', '2010-01-04', 1, 'michellelim', 'mlpwd');
INSERT INTO employees (name, dept, join_since, role_type_id, username, password) VALUES ('Siew Ling', 'IT', '2019-09-16', 2, 'sltan', 'slpwd');
INSERT INTO employees (name, dept, join_since, role_type_id, username, password) VALUES ('Elaine', 'PM', '2019-05-02', 2, 'neoel', 'elpwd');

INSERT INTO leave_application (employee_id, leave_type_id, start_date, end_date, leave_status_id) VALUES (2, 1, '2019-12-09', '2019-12-31', 1);