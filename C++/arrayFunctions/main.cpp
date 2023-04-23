#include <iostream>
#include <random>
#include <time.h>
#include <stdlib.h>

using namespace std;

int random(int,int);
void fillAray(int[], int);
void displayArray(int[], int);
void random_array(int[], int);
void bubble_sort(int[], int);
int getAverage(int[], int);
void addToArray(int[],int,int);
void arrayReverse(int[], int);
int arrayMin(int[], int);
int arrayMax(int[], int);

int main()
{
    cout<<"Enter the number of elements : ";
    int array_size;
    cin>> array_size;
    int numbers[array_size];
    cout<<"1- Fill Array\n2- Random Array\n\nChoice:-";
    int choice;
    cin>>choice;
    if(choice==1)
    {
        fillAray(numbers,array_size);
    }
    else
    {
        random_array(numbers,array_size);
    }
    displayArray(numbers,array_size);
    cout<<"\n\nWhat you want to do ?!"<<endl;
    cout<<"\n1- fill array(again)\n2- print array sorted \n3- add to array \n4- get avg of the array \n5- reverse array \n6- min \n7- max \n8- exit \nChoice:-";
    cin>>choice;
    while(choice != 8)
    {
        if(choice == 1)
        {
            fillAray(numbers,array_size);
            displayArray(numbers,array_size);
            cout<<"\n1- fill array(again)\n2- print array sorted \n3- add to array \n4- get avg of the array \n5- reverse array \n6- min \n7- max \n8- exit \nChoice:-";
            cin>>choice;
        }
        else if(choice ==2)
        {
            bubble_sort(numbers,array_size);
            displayArray(numbers,array_size);
            cout<<"\n1- fill array(again)\n2- print array sorted \n3- add to array \n4- get avg of the array \n5- reverse array \n6- min \n7- max \n8- exit \nChoice:-";
            cin>>choice;
        }
        else if(choice ==3)
        {
            cout<<"Enter the index(1 => size) : ";
            int index;
            cin>>index;
            cout<<"Enter the value : ";
            int value;
            cin>>value;
            addToArray(numbers,index,value);
            displayArray(numbers,array_size);
            cout<<"\n\n1- fill array(again)\n2- print array sorted \n3- add to array \n4- get avg of the array \n5- reverse array \n6- min \n7- max \n8- exit \nChoice:-";
            cin>>choice;
        }
        else if (choice ==4)
        {
            cout<<"\nthe averge to this array is : "<<getAverage(numbers,array_size)<<"\n";
            displayArray(numbers,array_size);
            cout<<"\n\n1- fill array(again)\n2- print array sorted \n3- add to array \n4- get avg of the array \n5- reverse array \n6- min \n7- max \n8- exit \nChoice:-";
            cin>>choice;
        }
        else if(choice ==5)
        {
            cout<<"\nthe reverse to this array is : "<<"\n";
            arrayReverse(numbers,array_size);
            displayArray(numbers,array_size);
            cout<<"\n\n1- fill array(again)\n2- print array sorted \n3- add to array \n4- get avg of the array \n5- reverse array \n6- min \n7- max \n8- exit \nChoice:-";
            cin>>choice;
        }
        else if(choice==6)
        {
            cout<<"\nthe minimum number in this array is: "<<arrayMin(numbers,array_size)<<"\n";
            cout<<"\n\n1- fill array(again)\n2- print array sorted \n3- add to array \n4- get avg of the array \n5- reverse array \n6- min \n7- max \n8- exit \nChoice:-";
            cin>>choice;
        }
        else if(choice==7)
        {
            cout<<"\nthe maximum number in this array is: "<<arrayMax(numbers,array_size)<<"\n";
            cout<<"\n\n1- fill array(again)\n2- print array sorted \n3- add to array \n4- get avg of the array \n5- reverse array \n6- min \n7- max \n8- exit \nChoice:-";
            cin>>choice;
        }
        else
        {
            cout<<"\n invalid options , please enter a number between (1=>8) \n";
            cout<<"\n\n1- fill array(again)\n2- print array sorted \n3- add to array \n4- get avg of the array \n5- reverse array \n6- min \n7- max \n8- exit \nChoice:-";
            cin>>choice;
        }
    }
    return 0;
}

void fillAray(int numbers[], int array_size )
{
    cout<<"\nEnter the numbers seperated by a space : ";
    for(int i = 0 ; i<array_size; i++)
    {
        cin>>numbers[i];
    }
}
void displayArray(int numbers[], int array_size)
{
    cout<<"\nYour array element is : "<<"[";
    for(int i = 0 ; i<array_size ; i++)
    {
        if(array_size - i ==1)
        {
            cout<<numbers[i];
        }
        else
        {
            cout<<numbers[i]<<" , ";
        }
    }
    cout<<"]";
}
void random_array(int numbers[], int array_size)
{
    for(int i = 0 ; i<array_size ; i++)
    {
        numbers[i]= random(1,50);
    }

}
int random(int min, int max) //range : [min, max]
{
    static bool first = true;
    if (first)
    {
        srand( time(NULL) ); //seeding for the first time only!
        first = false;
    }
    return min + rand() % (( max + 1 ) - min);
}
void bubble_sort(int array[], int size)
{
    for (int step = 0; step < (size-1); step++)
    {
        int swapped = 0;
        for (int i = 0; i < (size-step-1); i++)
        {
            if (array[i] > array[i + 1])
            {

                int temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;

                swapped = 1;
            }
        }

        if (swapped == 0)
            break;
    }
}

int getAverage(int numbers[], int array_size)
{
    int sum = 0;
    for(int i =0; i<array_size; i++)
    {
        sum += numbers[i];
    }
    float average = (float)sum/(float)array_size;
    return average;
}
void addToArray(int numbers[], int index, int value )
{
    numbers[index-1]=value;
}
void arrayReverse(int numbers[], int array_size)
{
    int arr_end = array_size-1;
    int arr_start = 0;
    int temp;
    while(arr_start != arr_end &&  arr_start < arr_end)
    {
        temp = numbers[arr_start];
        numbers[arr_start] = numbers[arr_end];
        numbers[arr_end] = temp;
        arr_start++;
        arr_end--;
    }
}
int arrayMin(int numbers[], int array_size)
{
    int minNumber = numbers[0];
    for(int i = 1 ; i<array_size; i++)
    {
        if(numbers[i]<minNumber)
        {
            minNumber = numbers[i];
        }
    }
    return minNumber;
}
int arrayMax(int numbers[], int array_size)
{
    int maxNumber = numbers[0];
    for(int i = 1 ; i<array_size; i++)
    {
        if(numbers[i]>maxNumber)
        {
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
}
