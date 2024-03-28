#include "SquareTower.h"
#include <iostream>
using namespace std;
void SquareTower::Area()
{
	cout << "square tower area is:" << this->GetHeight() * this->GetWidth() << "." << endl;
}

void SquareTower::Circumference()
{
	cout << "square tower circumference is:" << (2 * this->GetHeight()) + (2 * this->GetWidth()) << "." << endl;
}

void SquareTower::AreaOrCircumference()
{
	int height = this->GetHeight(), width = this->GetWidth();

	if (height == width || height - width > 5 || width - height > 5)
	{
		this->Area();
	}
	else
	{
		this->Circumference();
	}
}


