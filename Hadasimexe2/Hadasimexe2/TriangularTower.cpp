
#include "TriangularTower.h"
#include <iostream>
#include <math.h>  
using namespace std;
void TriangularTower::PrintRow(int spaceNum, int starNum)
{
	string row;
	row.append(spaceNum, ' ');
	row.append(starNum, '*');
	cout << row << endl;
}
void TriangularTower::Circumference()
{
	int a = pow(this->GetHeight(), 2) + pow(this->GetWidth(), 2);
	cout << "triangular tower circumference is:" << (2 * sqrt(a)) + (this->GetHeight()) << "." << endl;
}

void TriangularTower::PrintTower()
{
	int firstGroup, numOfRows, currentStar = 3, numOfGroups = -1, height = this->GetHeight(), width = this->GetWidth();
	if (width % 2 == 0 || width > height * 2)
	{
		cout << "This tower cannot be displayed.";
		return;
	}

	numOfGroups = (width / 2) - 1;
	if (numOfGroups < 1)
		numOfGroups = 1;
	numOfRows = (height - 2) / numOfGroups;
	firstGroup = height - 2 - (numOfRows * numOfGroups) + numOfRows;

	//print the first row
	this->PrintRow(width / 2, 1);

	for (int j = 0; j < numOfGroups; j++, currentStar += 2)
	{
		if (j == 0) {
			//print the first group
			for (int w = 0; w < firstGroup; w++)
				this->PrintRow((width - currentStar) / 2, currentStar);

		}
		else
		{
			//print the middle groups
			for (int w = 0; w < numOfRows; w++)
				this->PrintRow((width - currentStar) / 2, currentStar);
		}

	}

	//print last row
	this->PrintRow(0, width);
}


