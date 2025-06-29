# My CV & Portfolio

A modern, open-source personal website built with React, TypeScript, Vite, and Tailwind CSS. It features a portfolio, CV, project gallery, and several developer tools, including a Base64 encode/decode API with a hidden admin key challenge!

## Features

- **Personal Portfolio**: Showcases my projects, skills, and achievements.
- **Project Gallery**: Highlights various web, desktop, and open-source projects.
- **Base64 API**: Simple API for encoding/decoding Base64, with rate limiting and a hidden admin key for unlimited access.
- **Netlify Functions**: Serverless backend for API endpoints.

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/devmatei/my-cv.git
   cd my-cv
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Environment Variables:**
   - Copy `.env.example` to `.env` and fill in your own secrets (if needed).
   - The Base64 API uses `ADMIN_API_KEY` for unlimited access. If not set, a default is used.

4. **Run locally:**
   ```sh
   npm run dev
   ```

5. **Build for production:**
   ```sh
   npm run build
   npm run preview
   ```

## API: Base64 Encode/Decode

See the [API documentation](https://docs.devmatei.is-a.dev).

- **Endpoint:** `/api/base64`
- **Methods:** `GET`
- **Query Parameters:**
  - `text` (string, required): The text to encode or decode
  - `action` (string, required): `encode` or `decode`
- **Headers:**
  - `x-api-key` (optional): Use the secret admin key for unlimited requests

**Rate Limiting:**
- 10 requests per day per IP (unless you have the admin key)

### Example Usage

```sh
curl "https://devmatei.is-a.dev/api/base64?action=encode&text=hello"
```

## The not-so-hidden key challenge!

There is a secret API key hidden somewhere in this repository. If you can find it, you can use it as the `x-api-key` header for unlimited access to the Base64 API. Happy hunting!

Totally not an excuse for me to not do extra work :))

## Deployment

- **Netlify:**
  - Uses `netlify.toml` for build, redirects, and headers
  - Functions are in `netlify/functions/`
- **Vercel/Other:**
  - Adapt build and API setup as needed

## Tech Stack

- React, TypeScript, Vite
- Tailwind CSS
- Express (for local API)
- Netlify Functions (for serverless API)

## License

This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](LICENSE). Commercial use is **not** permitted.

---

Made with ❤️ by DevMatei.
