import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import path from 'path';

const METADATA_DIR = path.join(process.cwd(), "public", "metadata");

const Artifacts = async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        // const filename:string = `${METADATA_DIR}/${artifactId}.json`;
        // fs.accessSync(filename, fs.constants.F_OK);
        // const rawdata = fs.readFileSync(filename);
        // const metadata = JSON.parse(rawdata.toString());

        // // add date as palceholder
        // metadata.date = new Date().toString(),
        const metadataArr = []
        const files = fs.readdirSync(METADATA_DIR);
        for (let i = 0; i < files.length; i++) {
            let file = path.join(METADATA_DIR, files[i]);
            if (path.extname(file) == ".json") {
                fs.accessSync(file, fs.constants.F_OK);
                const rawdata = fs.readFileSync(file);
                const metadata = JSON.parse(rawdata.toString());
                metadata.tokenId = files[i].split('.')[0];
                metadataArr.push(metadata);
            }
        }

        res.status(200).json(metadataArr);

        } catch (e) {
            const error = (e as Error).message;
            console.error(error);
            res.status(400).json({ error: error });
        }
};

export default Artifacts;
