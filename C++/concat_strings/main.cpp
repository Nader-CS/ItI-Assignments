#include <iostream>
#include <cstring>

using namespace std;

int main()
{
    cout<<"Enter the number of Students : ";
    int n;
    cin>>n;
    string firstName,lastName;
    string fullName[n];
    for(int i = 0; i<n; i++)
    {
        cout<<"Enter the first name for the student no "<<"["<<i+1<<"]"<<" : ";
        cin>>firstName;
        cout<<"Enter the last name for the student no "<<"["<<i+1<<"]"<<" : ";
        cin>>lastName;
        fullName[i]= firstName+ " " +lastName;
    }
    for(int i=0; i<n; i++)
    {
        cout<<"The Full Name of the student no "<<"["<<i+1<<"]"<<" is : " << fullName[i]<<endl;
    }
    int maxLength=fullName[0].length()-1;
    int max_index=0;
    for(int i=1; i<n; i++)
    {
        if(fullName[i].length()>maxLength)
        {
            maxLength = fullName[i].length()-1;
            max_index=i;
        }
    }
    cout<<"The max full name is : "<<fullName[max_index]<<" with length : "<<maxLength<<endl;

    return 0;
}
