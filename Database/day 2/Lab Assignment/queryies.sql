---------------1-------
select * from Employee;
---------------1-------
---------------2-------
select Fname , Lname , Salary , Dno from Employee;
---------------2-------
---------------3-------
select Pname ,Plocation ,Dname 
from Project,Departments
where Departments.Dnum = Project.Dnum
---------------3-------
---------------3-------
---------------4-------
select ssn ,Fname + ' ' +Lname as [name]
from Employee
where Salary >1000;
---------------4-------
---------------5-------
select ssn ,Fname + ' ' +Lname as [name]
from Employee
where Salary*12 >10000;
---------------5-------
---------------6-------
select Salary ,Fname + ' ' +Lname as [name]
from Employee
where Sex='F';
---------------6-------
---------------7-------
select Dnum, Dname 
from Departments
where MGRSSN = 968574
---------------7-------
