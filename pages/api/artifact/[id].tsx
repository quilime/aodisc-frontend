import { NextApiRequest, NextApiResponse } from "next";
import { phraseResolver } from "../../../util/api";
import fs from 'fs';
import path from 'path';

const METADATA_DIR = path.join(process.cwd(), "public", "metadata");

const Artifact = async (req: NextApiRequest, res: NextApiResponse) => {

    const { id } = req.query as { id: string };
    const artifactId = parseInt(id);

  try {

    if (!artifactId || typeof artifactId != "number")  {
        throw(new Error("ID for nonexistant artifact"));
    }

    const filename:string = `${METADATA_DIR}/${artifactId}.json`;
    fs.accessSync(filename, fs.constants.F_OK);
    const rawdata = fs.readFileSync(filename);
    const metadata = JSON.parse(rawdata.toString());

    // add date as palceholder
    metadata.date = new Date().toString(),

    res.status(200).json(metadata);

    } catch (e) {
        const error = (e as Error).message;
        console.error(error);
        res.status(400).json({ error: error });
    }
};

export default Artifact;