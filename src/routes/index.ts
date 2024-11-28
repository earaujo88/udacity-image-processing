import express from 'express';  
import { error } from 'console';
import fs from 'fs';
import path from 'path';
import envs from '../uitl/envs';
import sharp from 'sharp';
const routes = express.Router();

routes.get('/resize',  (req: express.Request, res: express.Response) => {

    const width: number =  parseInt(req.query.width as string);
    const height: number = parseInt(req.query.height as string);
    const fileName: string = req.query.filename as string;
    const imageDirectory: string = envs.imageDirectory as string;
    const imageOutputDirectory: string = envs.imageOutputDirectory as string;
    const availableFiles = fs.readdirSync(imageDirectory);
    
    const fileNameWithExtension: string = `${fileName}.jpg`;

    if(!height || !width || !fileName){
        
        res.status(400).json({error: 'Invalid parameters. Valid parameters are width, height and filename'});
        return;
        
    }

    if(!availableFiles.includes(fileNameWithExtension)){
        res.status(400).json({error: `File not available for resizing. Available files are ${availableFiles}`});
        return;
    }


    const fileToProcess: string = path.join(imageDirectory, fileNameWithExtension);
    const fileNameOutput: string = `${fileName}_${width}X${height}.jpg`;
    const outputFilePath: string = path.join(imageOutputDirectory, fileNameOutput);

    
    if (fs.existsSync(outputFilePath)) {
        res.status(200).sendFile(outputFilePath);
        return;
    }

    sharp(fileToProcess)
    .resize(width, height)
    .toFile(outputFilePath, function (err) {
        if (err) {
            res.status(500).json({error: `Internal server error ${err}`});
            console.log(err);
        }
        res.status(200).sendFile(outputFilePath);
    })    
    
});


export default routes;