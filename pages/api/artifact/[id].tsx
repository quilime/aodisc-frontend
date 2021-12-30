import { NextApiRequest, NextApiResponse } from "next";
import { phraseResolver } from "../../../util/api";

const Artifact = async (req: NextApiRequest, res: NextApiResponse) => {

    const { id } = req.query as { id: string };
    const artifactId = parseInt(id);

  try {

    if (!artifactId || typeof artifactId != "number")  {
        throw(new Error("ID for nonexistant artifact"));
    }

    const metadata = {
        name : "Artifact 1029",
        description: "Description of this artifact",
        date: new Date().toString(),
        image: "https://picsum.photos/id/1024/600/600"
    }

    res.json(metadata);

  } catch (e) {
    res.status(400).json({
        error: (e as Error).message
    });
  }
};

export default Artifact;