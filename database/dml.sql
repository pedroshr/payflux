/* Populating the database with examples */
INSERT INTO transactions (name_trade, type_trade, amount, tag, date_trade) VALUES 
    ('Salary', 'in', 3000.00, 'Income', '2024-03-01'),
    ('Rent', 'out', 1200.00, 'Housing', '2024-03-05'),
    ('Groceries', 'out', 200.00, 'Food', '2024-03-10'),
    ('Freelance Work', 'in', 500.00, 'Income', '2024-03-15');

INSERT INTO TotalMoney (total_amount) VALUES (2440);