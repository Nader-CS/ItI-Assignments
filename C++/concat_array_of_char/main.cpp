#include <iostream>
#include <cstring>

using namespace std;

int main()
{
    cout<<"Enter the number of Students : ";
    int n;
    cin>>n;
    char firstName[n][15], lastName[n][15], fullName[n][30];
    cout<<"Warning : names should not exceed 10 characters"<<endl;
    for(int i = 0; i<n; i++)
    {
        cout<<"Enter the first name for the student no "<<"["<<i+1<<"]"<<" : ";
        cin>>firstName[i];
        cout<<"Enter the last name for the student no "<<"["<<i+1<<"]"<<" : ";
        cin>>lastName[i];

        strcpy(fullName[i],firstName[i]);
        strcat(fullName[i], " ");
        strcat(fullName[i],lastName[i]);
    }
    for(int i=0; i<n; i++)
    {
        cout<<"The Full Name of the student no "<<"["<<i+1<<"]"<<" is : " << fullName[i]<<endl;
    }
    int maxLength=strlen(fullName[0])-1;
    int max_index=0;
    for(int i=1; i<n; i++)
    {
        if((strlen(fullName[i])-1)>maxLength)
        {
            maxLength = strlen(fullName[i])-1;
            max_index=i;
        }
    }
    cout<<"The max full name is : "<<fullName[max_index]<<" with length : "<<maxLength;

    return 0;
}
