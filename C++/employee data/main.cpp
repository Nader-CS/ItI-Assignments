#include <iostream>

using namespace std;
struct adress
{
    string city;
    int streetNum, buildingNum;
};
struct employee
{
    int code,age;
    double initial_salary,bonus,tax;
    string name;
    adress employeeAddress;
};

int main()
{
    employee emp;
    cout<<"Enter the employee code : ";
    cin>>emp.code;
    cout<<"Enter the employee name : ";
    cin>>emp.name;
    cout<<"Enter the employee age : ";
    cin>>emp.age;
    cout<<"Enter the employee salary : ";
    cin>>emp.initial_salary;
    cout<<"Enter the employee bouns : ";
    cin>>emp.bonus;
    cout<<"Enter the employee tax : ";
    cin>>emp.tax;
    cout<<"Enter the employee city : ";
    cin>>emp.employeeAddress.city;
    cout<<"Enter the employee street number : ";
    cin>>emp.employeeAddress.streetNum;
    cout<<"Enter the employee building number : ";
    cin>>emp.employeeAddress.buildingNum;
    double netSalary = (emp.initial_salary + emp.bonus) - emp.tax;
    cout<<"------------------ Info about Employee : ---------------"<<endl;
    cout<<" the employee code : "<<emp.code<<endl;
    cout<<" the employee name : "<<emp.name<<endl;
    cout<<" the employee age : "<<emp.age<<endl;
    cout<<" the employee initial salary : "<<emp.initial_salary<<endl;
    cout<<" the employee bouns : "<<emp.bonus<<endl;
    cout<<" the employee tax : " <<emp.tax<<endl;
    cout<<" the employee city : "<<emp.employeeAddress.city<<endl;
    cout<<" the employee street number : "<<emp.employeeAddress.streetNum<<endl;
    cout<<"Enter the employee building number : "<<emp.employeeAddress.buildingNum<<endl;
    cout<<"The total salary is : "<<netSalary<<endl;


    return 0;
}
