#include <iostream>

using namespace std;
class Complex
{
    float real;
    float img;
public:
    Complex()
    {
        real=0;
        img=0;
        cout<<"i'm created from a default constructor"<<endl;
    }
    Complex(float r)
    {
        cout<<"i'm created from constructor that has 1 parameter : float"<<endl;
        real=r;
        img=r;
    }
    Complex(float r, float i)
    {
        cout<<"i'm created from constructor that has 2 parameter : float,float"<<endl;
        real=r;
        img=i;
    }
    void setReal(float);
    void setImg(float);
    float getReal();
    float getImg();
    void print();
    Complex sum(Complex);
};
Complex add(Complex, Complex);
Complex add(Complex, float);
Complex add(float, Complex);
Complex add(Complex, Complex, Complex);
Complex subtract(Complex,Complex);
int main()
{
    cout<<"C1: " ;
    Complex c1; //test default constructor(default constructor set real=img=0)
    cout<<"C1 -  ";
    c1.print();
    cout<<"C2: " ;
    Complex c2(2);//using overloaded constructor
    cout<<"C2 -  ";
    c2.print();
    cout<<"C3: " ;
    Complex c3(5,4);//using overloaded constructor
    cout<<"C3 -  ";
    c3.print();
    //add c2 , c3
    cout<<"C4: " ;
    Complex c4 = add(c2,c3);
    cout<<"C4 -  ";
    c4.print();
    //add c2(c2 has real=img=2 from above) & a real number :1
    cout<<"C5: " ;
    Complex c5 = add(c2,1);
    cout<<"C5 -  ";
    c5.print();
    //add a real number :1 & c2(c2 has real=img=2 from above)
    cout<<"C6: " ;
    Complex c6 = add(1,c2);
    cout<<"C6 -  ";
    c6.print();
    //add 3 complex numbers , c1,c2,c3
    cout<<"C7: " ;
    Complex c7 = add(c1,c2,c3);
    cout<<"C7 -  ";
    c7.print();
    return 0;
}
void Complex::setReal(float r)
{
    real=r;
}
void Complex::setImg(float i)
{
    img=i;
}
float Complex::getImg()
{
    return img;
}
float Complex::getReal()
{
    return real;
}
void Complex::print()
{
    if(real >0 && img>0)
    {
        cout<<"Complex number is : "<<real<<" + "<<img<<"i"<<endl;
    }
    if(real==0 )
    {
        if(img!=0)
        {
            cout<<"Complex number is : "<<img<<"i"<<endl;
        }

    }
    if(img==0)
    {
        cout<<"Complex number is : "<<real<<endl;
    }
    if(img<0 && real!=0)
    {
        cout<<"Complex number is : "<<real<<""<<img<<"i"<<endl;
    }
    if(real <0 && img>0)
    {
        cout<<"Complex number is : "<<real<<" + "<<img<<"i"<<endl;
    }
}
Complex Complex:: sum(Complex c)
{
    Complex result;
    float newReal = getReal()+c.getReal();
    float newImg = getImg()+c.getImg();
    result.setReal(newReal);
    result.setImg(newImg);
    return result;
}
Complex subtract(Complex c1,Complex c2)
{
    Complex result;
    float newReal = c1.getReal()-c2.getReal();
    float newImg = c1.getImg()-c2.getImg();
    result.setReal(newReal);
    result.setImg(newImg);
    return result;
}
Complex add(Complex c1, Complex c2)
{
    float newReal = c1.getReal()+c2.getReal();
    float newImg = c1.getImg()+c2.getImg();
    Complex result(newReal,newImg);
    return result;
}
Complex add(Complex c1, float real)
{
    float newReal = c1.getReal()+real;
    Complex result(newReal,c1.getImg());
    return result;
}
Complex add(float real, Complex c1)
{
    Complex result;
    float newReal = c1.getReal()+real;
    result.setReal(newReal);
    result.setImg(c1.getImg());
    return result;
}
Complex add(Complex c1, Complex c2, Complex c3)
{
    Complex result;
    float newReal = c1.getReal()+c2.getReal()+c3.getReal();
    float newImg = c1.getImg()+c2.getImg()+c3.getImg();
    result.setReal(newReal);
    result.setImg(newImg);
    return result;
}
