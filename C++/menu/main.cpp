#include <iostream>

using namespace std;

int main()
{
    char ch;
    cout<<"welcome in our resturant"<<endl;
    cout<<"This is our menu :)\n"<<endl;
    cout<<"a- chicken\n"
        <<"b- meat\n"
        <<"c- sea food\n"
        <<"d- burger\n"
        <<"e- exit\n";
    cout<<"your choice : ";
    cin>>ch;
    while(ch != 'e')
    {
        switch(ch)
        {
        case 'a':
        case 'b':
            cout<<"The price is : 250 LE"<<endl;
            break;
        case 'c':
        case 'd':
            cout<<"The price is : 300 LE"<<endl;
            break;

        }
        cout<<"your choice : ";
        cin>>ch;

    }
    cout<<"Thank you ...."<<endl;
}
