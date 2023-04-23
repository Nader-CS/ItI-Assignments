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
    cout << "Enter the number of employees : ";
    int n;
    cin>>n;
    employee employees[n];
    double salary[n];
    for(int i = 0 ; i<n; i++)
    {
        cout<<"------Enter the data for employee no "<<"["<<i+1<<"]"<<"---------"<<endl;
        cout<<"Enter the employee"<<"["<<i+1<<"]"<< " code : ";
        cin>>employees[i].code;
        cout<<"Enter the employee"<<"["<<i+1<<"]"<<" name : ";
        cin>>employees[i].name;
        cout<<"Enter the employee"<<"["<<i+1<<"]"<<" age : ";
        cin>>employees[i].age;
        cout<<"Enter the employee"<<"["<<i+1<<"]"<<" salary : ";
        cin>>employees[i].initial_salary;
        cout<<"Enter the employee"<<"["<<i+1<<"]"<<" bouns : ";
        cin>>employees[i].bonus;
        cout<<"Enter the employee"<<"["<<i+1<<"]"<<" tax : ";
        cin>>employees[i].tax;
        cout<<"Enter the employee"<<"["<<i+1<<"]"<<" city : ";
        cin>>employees[i].employeeAddress.city;
        cout<<"Enter the employee"<<"["<<i+1<<"]"<<" street number : ";
        cin>>employees[i].employeeAddress.streetNum;
        cout<<"Enter the employee"<<"["<<i+1<<"]"<<" building number : ";
        cin>>employees[i].employeeAddress.buildingNum;
        salary[i]=(employees[i].initial_salary + employees[i].bonus) - employees[i].tax;
    }

    for(int i = 0 ; i<n; i++)
    {
        cout<<"-------------- The employee "<<"["<<i+1<<"]"<<" data------------"<<endl;
        cout<<"employee code : "<<employees[i].code<<" , employee name : "<<employees[i].name <<" , employee salary : "<<salary[i]<<endl;

    }
    return 0;
}
