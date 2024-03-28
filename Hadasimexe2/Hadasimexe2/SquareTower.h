#pragma once
#include "Tower.h"
class SquareTower:Tower
{
private:
	void Area() override;
	void Circumference() override;
public:
	SquareTower(int height, int width) :Tower(height, width) {};
	void AreaOrCircumference();
};

