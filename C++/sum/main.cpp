#include <iostream>

using namespace std;

int main()
{
    int sum = 0, num;

    do
    {
        cout<<"Enter a Number :";

        cin>>num;
        sum=sum+num;
    }
    while(num!=0 && sum<100);
    cout<<"The Sum is : "<<sum;


    return 0;
}
