# AI Trading Agent

An intelligent trading agent that uses AI models to make automated trading decisions on the Lighter Protocol. The system includes a backend API, trading-agent dashboard, and AI-powered trading logic.

![](https://github.com/abhishekthakur7/ai-trading-agent/blob/main/Demo.gif)

## Prerequisites

- [Bun](https://bun.com) runtime
- PostgreSQL database
- OpenRouter API account
- Lighter Protocol API keys

## Setup Instructions

### 1. Install Dependencies

```bash
# Install backend dependencies
bun install

# Install trading-agent dependencies
cd trading-agent
npm install
cd ..
```

### 2. Environment Variables

Create or update the `.env` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/ai_trading_agent"

# OpenRouter API Key (Required)
OPENROUTER_API_KEY="your_openrouter_api_key_here"
```

### 3. Required API Keys

#### OpenRouter API Key
1. Sign up at [OpenRouter](https://openrouter.ai/)
2. Generate an API key from your dashboard
3. Replace `your_openrouter_api_key_here` in the `.env` file

#### Database Setup
1. Install and start PostgreSQL
2. Create a database named `ai_trading_agent`
3. Update the `DATABASE_URL` with your actual database credentials
4. Run Prisma migrations:
   ```bash
   bunx prisma migrate dev
   bunx prisma generate
   ```

#### Lighter Protocol API Keys
1. Visit [Lighter Protocol API Keys](https://app.lighter.xyz/apikeys)
2. Create API keys for your trading accounts
3. Note the API key index (typically starts from 0, 1, 2, etc.)
4. Store these keys in the database through the Models table (see Database Configuration below)

### 4. Database Configuration

The trading agents are configured through the `Models` table in the database. Each model requires:

- `name`: Unique identifier for the trading agent
- `openRoutermodelName`: The AI model name from OpenRouter (e.g., "anthropic/claude-3.5-sonnet")
- `lighterApiKey`: Your Lighter Protocol private API key
- `accountIndex`: Your Lighter Protocol account index
- `invocationCount`: Number of times the agent has been invoked (starts at 0)

Example database entry:
```sql
INSERT INTO "Models" (id, name, "openRoutermodelName", "lighterApiKey", "accountIndex", "invocationCount")
VALUES (
  gen_random_uuid(),
  'claude-trader-1',
  'anthropic/claude-3.5-sonnet',
  'your_lighter_private_key_here',
  '0',
  0
);
```

### 5. Configuration Files

#### Trading Configuration
Update `config/trading.config.ts` if needed:
- `API_KEY_INDEX`: Set to match your Lighter Protocol API key index (default: 2)
- `BASE_URL`: Lighter Protocol API endpoint (default: mainnet)

#### Market Configuration
The `config/markets.config.ts` contains supported trading pairs and market information.

## Running the Application

### Start the Backend API Server
```bash
bun run api/server.ts
```
The API server will start on `http://localhost:3000`

### Start the trading-agent Dashboard
```bash
cd trading-agent
npm run dev
```
The trading-agent will start on `http://localhost:5173`

### Run the Trading Agent
```bash
bun run index.ts
```
This starts the AI trading agent that will execute trades based on the configured models.

## API Endpoints

- `GET /performance` - Get portfolio performance data
- `GET /invocations` - Get recent AI model invocations and trading decisions

## Project Structure

```
├── api/                 # Backend API server
├── config/             # Configuration files
├── trading-agent/           # React trading-agent dashboard
├── services/           # Trading and market data services
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── prisma/             # Database schema and migrations
└── lighter-sdk-ts/     # Lighter Protocol SDK
```

## Security Notes

- Never commit API keys to version control
- Store sensitive keys in environment variables or secure key management
- Use different API keys for development and production
- Regularly rotate your API keys
- Monitor your trading activity and set appropriate limits

## Troubleshooting

### Common Issues

1. **Database Connection Error**: Verify your PostgreSQL is running and `DATABASE_URL` is correct
2. **OpenRouter API Error**: Check your API key and account credits
3. **Lighter Protocol Error**: Verify your API keys and account permissions
4. **Import Path Errors**: Run `bunx prisma generate` to regenerate the Prisma client

### Logs and Monitoring

- Check the console output for trading decisions and API calls
- Monitor the trading-agent dashboard for performance metrics
- Review database logs for any data inconsistencies

## Development

This project was created using `bun init` and uses [Bun](https://bun.com) as the JavaScript runtime for optimal performance.
