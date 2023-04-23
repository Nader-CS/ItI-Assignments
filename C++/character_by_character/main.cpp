#include <iostream>
#include <conio.h>
using namespace std;

int main()
{
    cout<<"Enter the number of character in a sentence that you should't exceed it  : ";
    int chars_size;
    cin>>chars_size;
    cout<<"Enter a word that does not exceed "<< chars_size<< " characters : ";

    char chars[chars_size];
    int index=0;
    do{
        chars[index]=getche();
        if(chars[index]=='\r'){
            break;
        }
        index++;
    }while(index<chars_size);
    cout<<"\n"<<chars;
    return 0;
}
