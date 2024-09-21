const express = require('express');
const app = express();


app.get('/api/2015-12-25', (req, res) => {
    const targetDate = new Date(Date.UTC(2015, 11, 25, 0, 0, 0)); 


    const unixTimestamp = targetDate.getTime();

    
    const utcTimestamp = targetDate.toUTCString();

    res.json({
        unix: unixTimestamp,
        utc: utcTimestamp
    });
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server is running on port 5000");
});