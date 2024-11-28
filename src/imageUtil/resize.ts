import sharp from "sharp";



function resizeImage(width: number, height: number, filePath: string, outputFilePath: string): string{

    sharp(filePath)
    .resize(width, height)
    .toFile(outputFilePath, function (err) {
        if (err) {
            return err;
        }
    })
    return `sucess`;

    
}

export default {
    resizeImage
};

