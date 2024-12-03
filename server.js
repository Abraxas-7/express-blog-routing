const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Server del mio blog");
});



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
