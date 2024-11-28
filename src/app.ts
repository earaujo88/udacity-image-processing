import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;
const apiBaseURI = '/api/v1/imageOperations';

app.use(apiBaseURI, routes);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
