#include <iostream>

using namespace std;
class Complex
{
    float real;
    float img;
public:
    void setReal(float);
    void setImg(float);
    float getReal();
    float getImg();
    void print();
    Complex sum(Complex);
};
Complex subtract(Complex,Complex);
int main()
{
    Complex c1,c2,c3,c4;
    cout<<"Enter a real number for c1 : ";
    float c1Real;
    cin>>c1Real;
    cout<<"Enter a imginary number for c1 : ";
    float c1Imignary;
    cin>>c1Imignary;
    cout<<"Enter a real number for c2 : ";
    float c2Real;
    cin>>c2Real;
    cout<<"Enter a imginary number for c2 : ";
    float c2Imignary;
    cin>>c2Imignary;
    c1.setReal(c1Real);
    c1.setImg(c1Imignary);
    c2.setReal(c2Real);
    c2.setImg(c2Imignary);
    c3=c1.sum(c2);
    cout<<"the sum of ";
    c3.print();
    c4=subtract(c1,c2);
    cout<<"the subtraction of ";
    c4.print();
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

