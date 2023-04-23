#include <iostream>
#define stackSize 10
using namespace std;
class staticStack
{
    int st[stackSize];
    int top;
public:
    staticStack()
    {
        top=0;
    }
    void push(int);
    int pop();
    void display();
    string isEmpty();
    string isFull();
};
int main()
{
    staticStack n;
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
    return 0;
}

void staticStack:: push(int num)
{
    if(top==10)
    {
        cout<<"Sorry Stack is full";
    }
    else
    {
        st[top]=num;
        top++;
    }
}
int staticStack:: pop()
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
void staticStack:: display(){
    if(top>0){
        for(int i=0;i<top;i++){
            cout<<st[i]<<" ";
        }
        cout<<"\n";
    }
    else{
        cout<<"Stack is empty";
    }
}
string staticStack:: isEmpty(){
    if(top>0){
        return "false";
    }
    return "true";
}
string staticStack:: isFull(){
    if(top==10)
    {
        return "true";
    }
    return "false";
}
