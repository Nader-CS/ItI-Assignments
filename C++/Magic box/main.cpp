#include <iostream>
#include "windows.h"


using namespace std;

void gotoxy(int x, int y)
{
    COORD coord;
    coord.X = x;
    coord.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}

int main()
{
    int matrix_size,col,row,number,equation_result;
    cout<<"Please Enter the size of Matrix(size: should be odd && >1) : ";
    cin>>matrix_size;
    while(matrix_size <=1 || matrix_size%2==0)
    {
        cout<<"Please Enter valid size of matrix(size: should be odd && >1) : ";
        cin>>matrix_size;
    }
    row=1;
    col=(matrix_size+1)/2;
    number=1;
    gotoxy(col*4,row*4);
    cout<<number;
    number++;
    while(number<=matrix_size*matrix_size)
    {
        equation_result = (number-1) % matrix_size;
        if(equation_result !=0)
        {
            row--;
            col--;
            if(row<1)
            {
                row=matrix_size;
            }
            if(col<1)
            {
                col=matrix_size;
            }
            gotoxy(col*4,row*4);
            cout<<number;
        }

        else
        {
            row++;
            if(row>matrix_size)
            {
                row=1;
            }
            gotoxy(col*4,row*4);
            cout<<number;
        }

        number++;

    }
    return 0;

}
