let IS_PROD = true;
const server = IS_PROD ?
    "https://streamsync-backend-kbff.onrender.com" :

    "http://localhost:8000"


export default server;