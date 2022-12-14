import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from '../../lib/withSession'
import { prisma } from "../../lib/prisma";

export default withSessionRoute(deleteReview)


export async function deleteReview(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body
    const user = req.session.user;
    if (!user) {
        res.json({ Message: "Bad Request. You are not allowed to do this"})
    }
    try {
        await prisma.review.delete({
            where: {
                id: id
            }
        })
        res.json({ Message: "Review deleted"})
    } catch(error) {
        res.json({ Message: error })
    }
    
}