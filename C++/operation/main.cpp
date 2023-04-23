#include <iostream>
#include<algorithm>
using namespace std;

int main()
{
    cout <<"Please Enter n: ";
    int n;
    cin>>n;
    int arr[n];
    cout<<"please Enter the numbers :";
    for(int i =0; i<n; i++)
    {
        cin>>arr[i];
    }
    cout<<"Please enter the operation you want to perform."<<endl;
    cout<<"S=>sum , M=>multiplay ,q=>Sort  : ";
    char ch ;
    int result;
    cin>>ch;
    switch(ch)
    {
    case 's':
    case 'S':
    {
        int sum=0;
        for(int i = 0 ; i<n; i++)
        {
            sum +=arr[i];
        }
        result=sum;
        cout<<"Result : "<<result;
    }

    break;
    case 'm':
    case 'M':
    {
        int multiplication=1;
        for(int i = 0 ; i<n; i++)
        {
            multiplication *=arr[i];
        }
        result=multiplication;
        cout<<"Result : "<<result;
    }

    break;
    case 'q':
    case 'Q':{
        sort(arr, arr + n);
        cout<<"The sorted array is : ";
        for(int i = 0 ; i<n; i++)
        {
            cout<<arr[i]<<" ";
        }
    }
    break;
    }
    return 0;
}

