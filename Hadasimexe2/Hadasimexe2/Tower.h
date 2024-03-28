#pragma once
class Tower
{
private:
	int height;
	int width;
public:
	Tower(int m_height, int m_width) { height = m_height; width = m_width; };
	virtual void Area() {};
	virtual void Circumference() = 0;
	virtual void PrintTower() {};
	void SetHeight(int height) { this->height = height; };
	void SetWidth(int width) { this->width = width; };
	int GetHeight() { return this->height; };
	int GetWidth() { return this->width; };
};

