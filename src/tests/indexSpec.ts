import supertest from 'supertest';
import app from '../app';
import resize from '../imageUtil/resize';
import envs from '../uitl/envs';

const request = supertest(app);
const imageDirectory: string = envs.imageDirectory;
const imageOutputDirectory: string = envs.imageOutputDirectory;
const inputFile: string = `${imageDirectory}/encenadaport.jpg`;
const outputFile: string = `${imageOutputDirectory}/encenadaport_test_500X500.jpg`;
const width: number = 500;
const height: number = 500;

describe('Testing image resize generation', () => {
    it('executes the function',  () => {
      expect(async () => {
        await resize.resizeImage(width, height, inputFile, outputFile);
    }).not.toThrow();
    });
  });


describe('Testing bad request response due missing parameters', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api/v1/imageOperations/resize');
    expect(response.status).toBe(400);
  });
});

describe('Testing bad request response due missing parameters with typos', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get(
      '/api/v1/imageOperations/resize?height=400&width=400&FILENAME=file.jpg'
    );
    expect(response.status).toBe(400);
  });
});

describe('Testing bad request response due not available image', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get(
      '/api/v1/imageOperations/resize?height=400&width=400&filename=file.jpg'
    );
    expect(response.status).toBe(400);
  });
});

describe('Testing sucessfull image generation', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get(
      '/api/v1/imageOperations/resize?height=400&width=400&filename=encenadaport'
    );
    expect(response.status).toBe(200);
  });
});
