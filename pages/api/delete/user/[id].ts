import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from '@lib/prisma'

// DELETE /api/delete/user/:id
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = String(req.query.id)

  if (req.method === 'DELETE') {
    const user = await prisma.user.delete({
      where: { userId: userId }
    })
    res.status(200).json(user)
  } else {
    res.status(400).json({ message: 'The request could not be completed' })
  }
}