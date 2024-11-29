import express from 'express';
import fs from 'fs';
import path from 'path';
import envs from '../uitl/envs';
import resize from '../imageUtil/resize';
import utilities from '../uitl/utilities';
const routes = express.Router();

routes.get('/resize', (req: express.Request, res: express.Response) => {

  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);
  const fileName: string = req.query.filename as string;
  const imageDirectory: string = envs.imageDirectory;
  const imageOutputDirectory: string = envs.imageOutputDirectory;
  const availableFiles = fs.readdirSync(imageDirectory);

  const fileNameWithExtension: string = `${fileName}.jpg`;

  if (!height || !width || !fileName) {
    res.status(400).json({
      error:
        'Invalid parameters. Valid parameters are width, height and filename'
    });
    return;
  }

  if (height <= 0 || width <= 0 || !utilities.hasDigits(req.query.width as string) || !utilities.hasDigits(req.query.width as string)) {
    res.status(400).json({
      error:
        'Invalid parameters. Width and height should be positive number greater than zero'
    });
    return;
  }

  if (!availableFiles.includes(fileNameWithExtension)) {
    res.status(400).json({
      error: `File not available for resizing. Available files are ${availableFiles}`
    });
    return;
  }

  const fileToProcess: string = path.join(
    imageDirectory,
    fileNameWithExtension
  );
  const fileNameOutput: string = `${fileName}_${width}X${height}.jpg`;
  const outputFilePath: string = path.join(
    imageOutputDirectory,
    fileNameOutput
  );

  if (fs.existsSync(outputFilePath)) {
    res.status(200).sendFile(outputFilePath);
    return;
  }

  const resizeImage = async () => {
    try {
      const result = await resize.resizeImage(
        width,
        height,
        fileToProcess,
        outputFilePath
      );
      console.log(result); // "Success"
      res.status(200).sendFile(outputFilePath);
    } catch (error) {
      console.error('Error resizing image:', error);
    }
  };

  resizeImage();
});

export default routes;
