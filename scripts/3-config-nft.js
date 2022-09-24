import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x530FA44938Fd524E7aca3fa0373c3Daddc8b3f2C");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Pixel man",
        description: "This man grants you access to NFTDAO",
        image: readFileSync("scripts/assets/15.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();