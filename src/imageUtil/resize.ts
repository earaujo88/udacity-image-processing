import sharp from 'sharp';

function resizeImage(
  width: number,
  height: number,
  filePath: string,
  outputFilePath: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    sharp(filePath)
      .resize(width, height)
      .toFile(outputFilePath, (err) => {
        if (err) {
          reject(err); // Reject the promise with the error
        } else {
          resolve('Success'); // Resolve the promise with a success message
        }
      });
  });
}

export default {
  resizeImage
};
