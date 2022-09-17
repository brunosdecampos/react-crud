import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from '@lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const email = String(req.query.email)

  const person = await prisma.person.findFirst({
    select: {
      email: true
    },
    where: {
      email: email
    }
  })

  res.status(200).json(person)
}