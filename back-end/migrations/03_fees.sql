CREATE TABLE parentFees(
	fee_id SERIAL PRIMARY KEY,
    feesClass varchar,
    feesCost NUMERIC(5,2),
    feesPeriod varchar

);

CREATE TABLE adminFees(
    adminFee NUMERIC(5,2) NOT NULL,
    materialsFee NUMERIC(5,2) NOT NULL,
    casinoCheque NUMERIC(5,2) NOT NULL,

)

insert into fees(feesClass, feesCost, feesPeriod) VALUES('Preschool', 150.00, 2);
insert into fees(feesClass, feesCost, feesPeriod) VALUES('Preschool', 225.00, 3);
insert into fees(feesClass, feesCost, feesPeriod) VALUES('Kindergarden', 0.00, 0);
insert into fees(feesClass, feesCost, feesPeriod) VALUES('JrKindergarden', 300.00, 4);
insert into fees(feesClass, feesCost, feesPeriod) VALUES('JrKindergarden', 375.00, 4);
ALTER TABLE fees RENAME COLUMN FeesPeriod TO feesPeriod;