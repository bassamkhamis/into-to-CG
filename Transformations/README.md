# Project 2 – Transformations

## Overview

This project implements 2D affine transformations in JavaScript for a simple UAV (drone) simulation. The goal is to correctly position and orient the UAV body and its four propellers using transformation matrices.

implement two functions:

1. **`GetTransform(positionX, positionY, rotation, scale)`**  
   Builds a single 3×3 transformation matrix from the given parameters.

2. **`ApplyTransform(trans1, trans2)`**  
   Combines two existing transformation matrices.

## Transformation Order

The required order for `GetTransform` is:

1. **Scale**
2. **Rotation**
3. **Translation**

from right-to-left 


![Result](<result.png>)