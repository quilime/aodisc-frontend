import { NextApiRequest, NextApiResponse } from "next";
import { phraseResolver } from "../../../util/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { id } = req.query as { id: string };
    const artifactId = parseInt(id);

  try {

    if (!artifactId || typeof artifactId != "number")  {
        throw(new Error("ID for nonexistant artifact"));
    }

    const metadata = {
        name : "Artifact 1029",
        description: "Description of this artifact",
        date: new Date().toString()
    }

    res.json(metadata);

  } catch (e) {
    res.status(400).json({
        error: (e as Error).message
    });
  }
};