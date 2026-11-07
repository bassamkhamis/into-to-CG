// bgImg is the background image to be modified.
// fgImg is the foreground image.
// fgOpac is the opacity of the foreground image.
// fgPos is the position of the foreground image in pixels. It can be negative and (0,0) means the top-left pixels of the foreground and background are aligned.
function composite(bgImg, fgImg, fgOpac, fgPos)
{
    // Calculate the overlapping region between the two images.
    const xStart = Math.max(0, fgPos.x);
    const yStart = Math.max(0, fgPos.y);

    const xEnd = Math.min(
        bgImg.width,
        fgPos.x + fgImg.width
    );

    const yEnd = Math.min(
        bgImg.height,
        fgPos.y + fgImg.height
    );

    // Nothing to composite if the images don't overlap.
    if (xStart >= xEnd || yStart >= yEnd)
        return;

    // Clamp foreground opacity to [0, 1].
    fgOpac = Math.max(0, Math.min(1, fgOpac));

    // Iterate over the overlapping region.
    for (let y = yStart; y < yEnd; y++) {
        for (let x = xStart; x < xEnd; x++) {

            // Corresponding foreground coordinates.
            const fgX = x - fgPos.x;
            const fgY = y - fgPos.y;

            // Calculate the pixel indices. 4 => RGBA
            // index = 4 * (y * width + x)
            const bgIndex = 4 * (y * bgImg.width + x);
            const fgIndex = 4 * (fgY * fgImg.width + fgX);

            // Get the effective foreground and background alpha.
            const fgAlpha =
                (fgImg.data[fgIndex + 3] / 255) * fgOpac;

            const bgAlpha =
                bgImg.data[bgIndex + 3] / 255;

            // Calculate the resulting alpha.
            const outAlpha =
                fgAlpha + bgAlpha * (1 - fgAlpha);

            // Calculate the resulting RGB values.
            if (outAlpha > 0) {
                for (let c = 0; c < 3; c++) {

                    const fgColor = fgImg.data[fgIndex + c];
                    const bgColor = bgImg.data[bgIndex + c];

                    // outColor = ( fgAlpha * fgC + bgAlpha * bgC * (1 - fgAlpha) )/ outAlpha

                    bgImg.data[bgIndex + c] =
                        (
                            fgColor * fgAlpha +
                            bgColor * bgAlpha * (1 - fgAlpha)
                        ) / outAlpha;
                }
            }

            // Update the resulting alpha channel.
            bgImg.data[bgIndex + 3] = outAlpha * 255;
        }
    }
}

