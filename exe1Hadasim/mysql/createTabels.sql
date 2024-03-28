CREATE TABLE IF NOT EXISTS hmo.Vaccinations(
  VaccinationsId MEDIUMINT NOT NULL AUTO_INCREMENT,
  Manufacturer varchar(255),
  PRIMARY KEY (VaccinationsId));
  
CREATE TABLE IF NOT EXISTS hmo.Members(
    MemberId varchar(9) NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    City varchar(255),
	Street varchar(255),
	HouseNum varchar(255),
    DateOfBirth Date,
    MobileNum varchar(10),
	PhoneNum varchar(10),
    PRIMARY KEY (ID)
);

INSERT INTO hmo.Members
VALUES (215478959,'Safra','Miri','jlm','Zafririm',18,'2009-03-03',0556787008,025710931);
CREATE TABLE IF NOT EXISTS hmo.ReceivingVaccines (
	MemberId varchar(9) NOT NULL,
    VaccinationsId MEDIUMINT NOT NULL,
    VaccinationDate Date,
    FOREIGN KEY (MemberId) REFERENCES hmo.Members(MemberId),
    FOREIGN KEY (VaccinationsId) REFERENCES hmo.Vaccinations(VaccinationsId)
);
CREATE TABLE IF NOT EXISTS hmo.CoronaPatients (
	MemberId varchar(9) NOT NULL,
    StarDate Date,
    EndDate Date,
    FOREIGN KEY (MemberId) REFERENCES hmo.Members(MemberId)
);
select * from hmo.Vaccinations;



