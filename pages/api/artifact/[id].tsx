import { NextApiRequest, NextApiResponse } from "next";
import { phraseResolver } from "../../../util/api";
import fs from 'fs';
import path from 'path';
import sizeOf from "image-size";


const PUBLIC_DIR = path.join(process.cwd(), "public");
const METADATA_DIR = path.join(PUBLIC_DIR, "metadata");

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

    // add image size info
    metadata.imageInfo = await sizeOf(path.join(PUBLIC_DIR, metadata.image));

    res.status(200).json(metadata);

    } catch (e) {
        const error = (e as Error).message;
        console.error(error);
        res.status(400).json({ error: error });
    }
};

export default Artifact;