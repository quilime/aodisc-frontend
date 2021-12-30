import { NextApiRequest, NextApiResponse } from "next";
import { phraseResolver } from "../../util/api";

const Index = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.body as { query: string };
  try {
    const phrase = await phraseResolver(query);
    res.json({ phrase });
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
};

export default Index;