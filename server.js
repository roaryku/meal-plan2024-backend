const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors')

require('dotenv').config();
mongoose.set("strictQuery", false);


const PORT = 8000 || process.env.port

app.use(express.json());
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE ARE CONNECTED TO MANGO DB'))
.catch((err) => console.log(err))

app.use(routes)
app.listen(PORT, () => {
   console.log(`I'm listening at PORT ${PORT}`)
})


// DhtUnVeNg3tTpOKf - PASSWORD
// rodikaarykudev - USERNAME

// mongodb+srv://rodikaarykudev:DhtUnVeNg3tTpOKf@clusterrod.dxavu.mongodb.net/

//mongodb+srv://rodikaarykudev:<db_password>@clusterrod.dxavu.mongodb.net/?retryWrites=true&w=majority&appName=ClusterRod