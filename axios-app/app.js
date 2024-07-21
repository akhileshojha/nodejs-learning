const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");

const getData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log("Data:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error appropriately (e.g., send an error response)
    }
}

app.get("/", async (req, res) => {
    const data = await getData();
    res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
