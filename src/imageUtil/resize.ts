import sharp from "sharp";



async function resizeImage(width: number, height: number, filePath: string, outputFilePath: string): Promise<void>{

   await sharp(filePath)
        .resize(width, height)
        .toFile(outputFilePath, function (err) {
            if (err) {
                console.log(err);
            }
        });
    
}

export default {
    resizeImage
};

