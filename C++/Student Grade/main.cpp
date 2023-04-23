#include <iostream>



using namespace std;

int main()
{
    int num;
    cout<<"Please enter The Degree: ";
    cin>>num;
    if(num>100 || num<0)
    {
        cout<<"Sorry , Enter valid number";
    }
    else if(num<=100 && num>=85)
    {
        cout<<"Your grade is : A";
    }
    else if(num<=84 && num>=75)
    {
        cout<<"Your grade is : B";
    }
    else if(num<=74 && num>=65)
    {
        cout<<"Your grade is : C";
    }
    else if(num<=64 && num>=60)
    {
        cout<<"Your grade is : D";
    }
    else
    {
        cout<<"Your grade is : F";
    }
}
