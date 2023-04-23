#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
    cout<<"enter the number of students: ";
    int numOfStud;
    cin>>numOfStud;
    cout<<"Enter the number of subjects: ";
    int numOfSubj;
    cin>>numOfSubj;
    double degrees[numOfStud][numOfSubj];
    double totals[numOfStud];
    for(int i = 0; i<numOfStud; i++)
    {
        cout<<"Enter the degree of each subject for student no "<<i+1<<": ";
        for(int j = 0; j<numOfSubj; j++)
        {
            cin>>degrees[i][j];
            totals[i] += degrees[i][j];
        }

    }
    cout<<"The Total degrees of each student in all subjects :"<<endl;
    for(int i =0; i<numOfStud; i++)
    {
        cout<<"Student no "<<"["<<i+1<<"]"<<" degrees is "<<totals[i]<<endl;
    }
    int max_degree =totals[0];
    int index;
    for(index = 1; index<numOfStud; index++)
    {
        if(totals[index]>max_degree)
        {
            max_degree=totals[index];
        }
    }
    cout<<"The highest degree is student no "<<"["<<index<<"]"<<" with : " <<max_degree<<" degree"<<endl;

    for(int i = 0; i<numOfSubj; i++)
    {
        int subject_total=0;
        double avg;
        for(int j = 0; j<numOfStud; j++)
        {
            subject_total +=degrees[j][i];
        }
        avg = (float)(subject_total)/numOfStud;
        cout<<"The Average of subject "<<"["<<i+1<<"]"<<" is :"<<avg<<endl;
    }
    return 0;
}
