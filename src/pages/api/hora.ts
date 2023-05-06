import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).send(`
        <html>
          <head>
            <style>
              html {
                font-size: 5rem;
                background-color: #333;
                color: #eee;
              }
            </style>
          </head>
          <body>
            <b>Hora certa:</b>
            ${new Date().toLocaleTimeString('pt-BR')}
          </body>
        </html>
    `)
}