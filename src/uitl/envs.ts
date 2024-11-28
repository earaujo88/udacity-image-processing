import path from 'path';

const maindDir: string = path.join(__dirname, `/..`);
const appDir: string = path.join(maindDir, `/..`);
const imageDirectory: string = path.join(appDir, `assets/images`);
const imageOutputDirectory: string = path.join(appDir, `assets/output`);

export default {
  imageDirectory,
  imageOutputDirectory
};
