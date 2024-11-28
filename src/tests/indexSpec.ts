import supertest from 'supertest';
import app from '../app';

const request = supertest(app);

describe('Testing bad request response due missing parameters', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/api/v1/imageOperations/resize');
        expect(response.status).toBe(400);
    }
)});

describe('Testing bad request response due missing parameters with typos', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/api/v1/imageOperations/resize?height=400&width=400&FILENAME=file.jpg');
        expect(response.status).toBe(400);
    }
)});

describe('Testing bad request response due not available image', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/api/v1/imageOperations/resize?height=400&width=400&filename=file.jpg');
        expect(response.status).toBe(400);
    }
)});

describe('Testing bad request response due not available image', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/api/v1/imageOperations/resize?height=400&width=400&filename=encenadaport');
        expect(response.status).toBe(200);
    }
)});