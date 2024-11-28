import * as dotenv from 'dotenv';
dotenv.config();

export default {
    imageDirectory: process.env.IMAGE_DIRECTORY,
    imageOutputDirectory: process.env.IMAGE_OUTPUT_DIRECTORY,
}
