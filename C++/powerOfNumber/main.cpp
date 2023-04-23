#include <iostream>

using namespace std;

int power(int,int);

int main()
{
    cout<<"Enter a number : ";
    int number;
    cin>>number;
    cout<<"Enter a power : ";
    int times;
    cin>>times;
    cout<<"Power("<<number<<","<<times<<")"<<" = "<<power(number,times);
    return 0;
}

int power(int number, int times)
{
    if(times == 1)
    {
        return number;
    }
    if(times==0)
    {
        return 1;
    }
    return number * power(number,times-1);
}

