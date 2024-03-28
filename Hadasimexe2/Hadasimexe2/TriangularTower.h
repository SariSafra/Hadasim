#pragma once
#include "Tower.h"
class TriangularTower:Tower
{
private:
	void PrintRow(int spaceNum, int starNum);
public:
	TriangularTower(int height, int width) :Tower(height, width) {};
	virtual void Circumference() override;
	virtual void PrintTower() override;
};

