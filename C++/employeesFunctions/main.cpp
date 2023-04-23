#include <iostream>

using namespace std;

void displayEmployee(struct employee[],int);
void addEmployee(struct employee[],int,int,int,string);
void displayAllEmployee(struct employee[],int);


struct employee
{
    string name;
    int age;
    int salary;
};

int main()
{
    employee emps[3];
    emps[0].name="nader";
    emps[0].age=21;
    emps[0].salary=1000;
    emps[1].name="mohamed";
    emps[1].age=22;
    emps[1].salary=2000;
    emps[2].name="ahmed";
    emps[2].age=23;
    emps[2].salary=3000;
    cout<<"\t\t\t\t\t\tinitial employees array : "<<endl;

    for(int i =0; i<3; i++)
    {
        cout<<"############### employee ["<<i+1<<"]"<<"###############"<<endl;
        cout<<"Employee name: "<< emps[i].name<<endl;
        cout<<"Employee age: "<< emps[i].age<<endl;
        cout<<"Employee salary: "<< emps[i].salary<<endl;
    }
    cout<<"#############################################"<<endl;

    cout<<"\n1- Display an employee by index\n2- Add employee by index(1=>3)\n3- Display all employees\n4- exit"<<endl;
    cout<<"Your choice : ";
    int choose;
    cin>>choose;
    while(choose != 4)
    {
        if(choose == 1)
        {
            cout<<"Enter index : ";
            int index;
            cin>>index;
            displayEmployee(emps,index);
            cout<<"\n1- Display an employee by index\n2- Add employee by index(1=>3)\n3- Display all employees\n4- exit"<<endl;
            cout<<"Your choice : ";
            cin>>choose;
        }
        else if(choose==2)
        {
            cout<<"Enter an index : ";
            int index;
            cin>>index;
            string name;
            int age;
            int salary;
            cout<<"Enter a name : ";
            cin>>name;
            cout<<"Enter an age : ";
            cin>>age;
            cout<<"Enter a salary :";
            cin>>salary;
            addEmployee(emps,index,age,salary,name);
            cout<<"\n1- Display an employee by index\n2- Add employee by index(1=>3)\n3- Display all employees\n4- exit"<<endl;
            cout<<"Your choice : ";
            cin>>choose;
        }
        else if(choose==3)
        {
            displayAllEmployee(emps,3);
            cout<<"\n1- Display an employee by index\n2- Add employee by index(1=>3)\n3- Display all employees\n4- exit"<<endl;
            cout<<"Your choice : ";
            cin>>choose;
        }
    }

    return 0;
}

void displayEmployee(struct employee emp[],int index)
{
    cout<<"############### employee ["<<index<<"]"<<"###############"<<endl;
    cout<<"Employee name: "<< emp[index-1].name<<endl;
    cout<<"Employee age: "<< emp[index-1].age<<endl;
    cout<<"Employee salary: "<< emp[index-1].salary<<endl;
}
void addEmployee(struct employee emp[],int index,int age,int salary,string name)
{
    emp[index-1].name = name;
    emp[index-1].age=age;
    emp[index-1].salary=salary;
}
void displayAllEmployee(struct employee emp[],int arr_size)
{
    for(int i =0; i<arr_size; i++)
    {
        cout<<"############### employee ["<<i+1<<"]"<<"###############"<<endl;
        cout<<"Employee name: "<< emp[i].name<<endl;
        cout<<"Employee age: "<< emp[i].age<<endl;
        cout<<"Employee salary: "<< emp[i].salary<<endl;
    }
}


