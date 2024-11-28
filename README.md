# Udacity Image Processing API Project
Repo for the project related to the back end with nodejs course on udacity

### Installation

1. Install node
2. Clone the repository
3. Run *npm install* on the root folder

### Available npm scripts
**test**: execute a suite of testes
**build**: compiles the project
**dev**: nodemon to watch changes on the project
**jasmine**: execute jasmine suite of tests

## Endpoints

### GET /resize
Resizes a given image

#### Request
- **Method**: `GET`
- **URL**: `/api/v1/imageOperations/resize`

#### Query Parameters
| Name    | Type  | Required | Description              |
|---------|-------|----------|--------------------------|
| `width`  | `int` | Yes       | New width     |
| `height` | `int` | Yes       | New height |
| `filename` | `string` | Yes       |File name without extension |

#### Responses
- **Status Code**: `200 OK`
- **Status Code**: `400 Bad Request`
- **Status Code**: `500 Internal Server Error`


