import path from "path"

const maindDir = path.join(__dirname, `/..`);
const appDir = path.join(maindDir, `/..`, );
const imageDirectory = path.join(appDir, `assets/images`);
const imageOutputDirectory = path.join(appDir, `assets/output`);

export default {
    imageDirectory,
    imageOutputDirectory
}
