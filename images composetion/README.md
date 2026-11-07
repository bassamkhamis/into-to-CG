### Implementation of Project 1 – Compositing Images from the University of Utah's CS 4600 Computer Graphics course.

Assignment: CS 4600 – Project 1

1. Project Overview

    The objective of this project is to implement an image-compositing function that combines a foreground image with a background image.

    The implementation must consider:
    1. Position: Place the foreground image at a specified location relative to the background.
    2. Opacity: Control how visible the foreground image is.
    3. Transparency: Account for the alpha channel of both images.
    4. Image boundaries: Process only pixels that overlap between the two images.
    5. The project provides an HTML interface for uploading images, changing their opacity, moving image layers, and previewing the final composite.

![Result](<result.png>)

2. Implementation

    The implementation follows these steps:
    1. Calculate the overlapping region.
    2. Return if the images do not overlap.
    3. Iterate over the overlapping pixels.
    4. Map each background pixel to its corresponding foreground pixel.
    5. Calculate the effective foreground alpha.
    6. Calculate the output alpha.
    7. Calculate the resulting RGB channels.
    8. Update the background pixel's RGBA values.

3. Mathematical Background
    1. outColor = ( fgAlpha * fgColor + bgAlpha * bgColor * (1 - fgAlpha) )/ outAlpha
    2. outAlpha = fgAlpha + bgAlpha * (1 - fgAlpha)

4. Benefit 
    Run in a browser; no need for npm install or similar things; just click on project1.html to open it in your browser 