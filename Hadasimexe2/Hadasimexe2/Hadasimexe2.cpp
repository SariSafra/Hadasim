

#include <iostream>
#include <cstdio>
#include <vector> 
#include "SquareTower.h"
#include "TriangularTower.h"
using namespace std;
void SquareTowerService()
{
	int height, width;
	cout << "Enter the height of the tower" << endl;
	cin >> height;
	cout << "Enter the width of the tower" << endl;
	cin >> width;
	if (height < 2 || width < 2)
		throw("Height and width must be greater than 2 ");
	SquareTower* square = new SquareTower(height, width);
	square->AreaOrCircumference();
	if (square)
		delete square;
}
void TriangularTowerService() {
	int height, width, x;
	cout << "Enter the height of the tower" << endl;
	cin >> height;
	cout << "Enter the width of the tower" << endl;
	cin >> width;
	if (height < 2 || width < 2)
		throw("Height and width must be greater than 2 ");
	TriangularTower* triangular = new TriangularTower(height, width);
	cout << "for the tower view enter 1 for the tower circumference enter 2." << endl;
	cin >> x;
	if (x != 1 && x != 2)
		throw("You entered an invalid choice.");
	if (x == 1)
	{
		triangular->PrintTower();
	}
	else
	{
		triangular->Circumference();
	}
	if (triangular)
		delete triangular;
}

int main()
{
	try {
		int x;

		do {
			cout << "For square tower enter 1, for triangle tower enter 2, for exit enter 3." << endl;
			cin >> x;
			try {
				if (x < 1 || x>3)
					throw("Enter 1, 2 or 3 only");
				if (x == 1)
				{
					SquareTowerService();
				}
				if (x == 2)
				{
					TriangularTowerService();
				}
			}
			catch (string err)
			{
				cout << err;
			}
		} while (x != 3);
		exit(0);
	}
	catch (string err)
	{
		cout << err;
	}
}




