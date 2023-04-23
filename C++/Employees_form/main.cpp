#include <iostream>
#include <windows.h>
using namespace std;

void gotoxy(int x, int y)
{
    COORD coord;
    coord.X = x;
    coord.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}
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
    cout<<"Enter the number of employees: ";
    int n;
    cin>>n;
    employee employees[n];
    double salary[n];
    int x_data =0, y_data=4;
    int x_info=0, y_info=3;
    int x_header = 30;
    int y_header = 2;
    for(int i = 0 ; i<n; i++)
    {
        gotoxy(x_header,y_header);
        cout<<"------Enter the data for employee no "<<"["<<i+1<<"]"<<"---------"<<endl;
        gotoxy(x_info,y_info);
        x_info +=10;
        cout<<"code :";
        gotoxy(x_data,y_data);
        x_data +=10;
        cin>>employees[i].code;
        gotoxy(x_info,y_info);
        x_info+=10;
        cout<<"name :";
        gotoxy(x_data,y_data);
        x_data +=10;
        cin>>employees[i].name;
        gotoxy(x_info,y_info);
        x_info+=10;
        cout<<"age :";
        gotoxy(x_data,y_data);
        x_data +=10;
        cin>>employees[i].age;
        gotoxy(x_info,y_info);
        x_info +=10;
        cout<<"salary :";
        gotoxy(x_data,y_data);
        x_data +=10;
        cin>>employees[i].initial_salary;
        gotoxy(x_info,y_info);
        x_info +=10;
        cout<<"bouns :";
        gotoxy(x_data,y_data);
        x_data +=10;
        cin>>employees[i].bonus;
        gotoxy(x_info,y_info);
        x_info +=10;
        cout<<"tax :";
        gotoxy(x_data,y_data);
        x_data +=10;
        cin>>employees[i].tax;
        gotoxy(x_info,y_info);
        x_info +=10;
        cout<<"city :";
        gotoxy(x_data,y_data);
        x_data +=10;
        cin>>employees[i].employeeAddress.city;
        gotoxy(x_info,y_info);
        x_info+=18;
        cout<<"street number:";
        gotoxy(x_data,y_data);
        x_data +=18;
        cin>>employees[i].employeeAddress.streetNum;
        gotoxy(x_info,y_info);
        cout<<"building number:";
        gotoxy(x_data,y_data);
        cin>>employees[i].employeeAddress.buildingNum;
        x_info = 0;
        y_info += 5;
        x_data = 0;
        y_data += 5;
        y_header += 5.5;
        salary[i]=(employees[i].initial_salary + employees[i].bonus) - employees[i].tax;
    }
    return 0;
}
