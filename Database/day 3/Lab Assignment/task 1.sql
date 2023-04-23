---------1------------
select D.Dnum , D.Dname ,D.MGRSSN , E.Fname + ' '+E.Lname as "name"
from Employee E inner join Departments D
on (E.SSN=D.MGRSSN);
---------1------------
---------2------------
select D.Dname , P.Pname AS "Project name"
from Departments D inner join Project P
on D.Dnum = P.Dnum
---------2------------
---------3------------
select D.* , E.Fname +' ' + E.Lname as "Employee"
from Dependent D inner join Employee E
on D.ESSN = E.SSN
---------3------------
---------4------------
select Pnumber, Pname, Plocation
from Project 
where City in ('cairo', 'alex')
---------4------------
---------5------------
select *
from Project
where Pname like 'A%'
---------5------------
---------6------------
select * 
from Employee 
where (dno = 30) and (Salary Between 1000 and 2000)
---------6------------
---------7------------
select Fname +' '+ Lname as "name"
from Employee , Project , Works_for
where (SSN = ESSn) and (Pnumber = Pno) and (Hours >= 10) and (Pname = 'Al Rabwah')
---------7------------
---------8------------
select E1.Fname +' '+ E1.Lname as "employee", E2.Fname+ ' '+ E2.Lname as "manager" 
from Employee E1, Employee E2
where E2.SSN = E1.Superssn and E2.Fname = 'Kamel'
---------8------------
---------9------------
select E.Fname +' '+E.Lname as 'employee' ,  P.Pname
from Employee E inner join Works_for W
on E.SSN = W.ESSn 
inner join Project P
on P.Pnumber = W.Pno
order by P.Pname
---------9------------
---------10------------
select P.Pnumber, D.Dname, E.Lname, E.Address, E.Bdate
from Project P, Departments D, Employee E
where D.Dnum = P.Dnum and P.City = 'cairo' and  E.SSN=D.MGRSSN 
---------10------------
---------11------------
select distinct E1.*
from Employee E1 inner join Employee E2
on E1.SSN = E2.Superssn
---------11------------
---------12------------
select * 
from Employee E left join Dependent D
on  E.SSN=D.ESSN
---------12------------
---------13-----------
insert into Employee
values ('Nader', 'Abd-alhamed', 102672, '1998-2-23', 'dummy', 'm', 3000, 112233,30)
---------13-----------
---------14-----------
insert into Employee (Fname, Lname, SSN, Bdate, Address, Sex,Dno)
values ('dummy', 'dummy', 102660, '1998-2-23', 'dummy', 'M',30 )
---------14-----------
---------15-----------
update Employee set Salary = Salary+(Salary * 20/100)
where Fname = 'Nader'
---------15-----------