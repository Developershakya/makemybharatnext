// lib/deviceDetect.ts
import { NextApiRequest } from 'next'

export const isMobileDevice = (req: NextApiRequest) => {
  const userAgent = req.headers['user-agent'] || ''
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
}