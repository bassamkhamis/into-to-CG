Implementation of Project 1 – Compositing Images from the University of Utah's CS 4600 Computer Graphics course.

Assignment: CS 4600 – Project 1

1. Project Overview

    The objective of this project is to implement an image-compositing function that combines a foreground image with a background image.

    The implementation must consider:

    Position: Place the foreground image at a specified location relative to the background.

    Opacity: Control how visible the foreground image is.

    Transparency: Account for the alpha channel of both images.

    Image boundaries: Process only pixels that overlap between the two images.

    The project provides an HTML interface for uploading images, changing their opacity, moving image layers, and previewing the final composite.

![Result](<result.png>)

2. Implementation

    The implementation follows these steps:

    Calculate the overlapping region.

    Return if the images do not overlap.

    Iterate over the overlapping pixels.

    Map each background pixel to its corresponding foreground pixel.

    Calculate the effective foreground alpha.

    Calculate the output alpha.

    Calculate the resulting RGB channels.

    Update the background pixel's RGBA values.

3. Mathematical Background
    outColor = ( fgAlpha * fgColor + bgAlpha * bgColor * (1 - fgAlpha) )/ outAlpha
    outAlpha = fgAlpha + bgAlpha * (1 - fgAlpha)

4. Benefit 
    Run in a browser; no need for npm install or similar things; just click on project1.html to open it in your browser 