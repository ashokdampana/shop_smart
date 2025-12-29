import app from './app.js';
import connectDB from './config/db.js';

const port = process.env.PORT || 5003;

// connect DB before listening
connectDB().then(() => {
  app.listen(port, () => {
    console.log('Server running at', port);
  });
}).catch(e => {
  console.error(e);
  process.exit(1);
});

