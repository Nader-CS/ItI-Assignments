#include <iostream>
using namespace std;
class dynamicStack
{
    int *st;
    int top;
    int stackSize;
    static int counter;
public:
    dynamicStack(int s = 10)
    {
        stackSize=s;
        st = new int[stackSize];
        top=0;
        counter++;
    }
    void push(int);
    int pop();
    void display();
    string isEmpty();
    string isFull();
    static int getCounter()
    {
        return counter;
    }
    ~dynamicStack()
    {
        delete []st;
        counter--;
    }
};
int dynamicStack::counter=0;
int main()
{
    cout<<"Enetr the size of that array : ";
    int arr_size;
    cin>>arr_size;
    dynamicStack n(arr_size);
    /* to test if the stack is full
    n.push(1);
    n.push(2);
    n.push(3);
    n.push(4);
    n.push(5);
    n.push(6);
    n.push(7);
    n.push(8);
    n.push(9);
    n.push(10);
    n.push(11);
    */
    n.push(1);
    n.push(2);
    n.push(3);
    cout<<"The content of the stack : ";
    n.display();
    n.pop();
    cout<<"after poping one element : ";
    n.display();
    n.pop();
    n.pop();
    cout<<"after poping all element : isEmpty() ? - ";
    cout<<n.isEmpty();
    n.push(1);
    cout<<"\nafter pushing one element : isfull() ? - "<<n.isFull();
    dynamicStack n2(30);
    cout<<"\nNumber of stack objects : "<<dynamicStack::getCounter();
    return 0;
}

void dynamicStack:: push(int num)
{
    if(top==stackSize)
    {
        cout<<"Sorry Stack is full";
    }
    else
    {
        st[top]=num;
        top++;
    }
}
int dynamicStack:: pop()
{
    int returnValue;
    if(top ==0)
    {
        cout<<"Stack is empty"<<endl;
    }
    else
    {
        top--;
        returnValue = st[top];
    }
    return returnValue;

}
void dynamicStack:: display()
{
    if(top>0)
    {
        for(int i=0; i<top; i++)
        {
            cout<<st[i]<<" ";
        }
        cout<<"\n";
    }
    else
    {
        cout<<"Stack is empty";
    }
}
string dynamicStack:: isEmpty()
{
    if(top>0)
    {
        return "false";
    }
    return "true";
}
string dynamicStack:: isFull()
{
    if(top==stackSize)
    {
        return "true";
    }
    return "false";
}
