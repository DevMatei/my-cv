import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { passwordStrengthRouter } from './routes/passwordStrength';
import { base64Router } from './routes/base64Routes';

const app = express();
const port = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: ['https://devmatei.is-a.dev', 'http://localhost:5173'],
  methods: ['GET', 'POST'],
  credentials: true
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', passwordStrengthRouter);
app.use('/api', base64Router);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error'
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 