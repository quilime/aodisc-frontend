import { NextApiRequest, NextApiResponse } from "next";
import { phraseResolver } from "../../../util/api";

const Collection = async (req: NextApiRequest, res: NextApiResponse) => {

    const { id } = req.query as { id: string };

  try {
    res.json({ collection: "collection" });
  } catch (e) {
    res.status(400).json({
        error: (e as Error).message
    });
  }
};
export default Collection;