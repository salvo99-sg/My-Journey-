import "./index.css";
import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { ArtGiappone } from "./ArtGiappone";
import { Walkthrough } from "./Walkthrough";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Walkthrough"
        component={Walkthrough}
        durationInFrames={480}
        fps={30}
        width={1080}
        height={2160}
      />
      <Composition
        id="GiapponeArt"
        component={ArtGiappone}
        durationInFrames={180}
        fps={30}
        width={1080}
        height={600}
      />
      <Composition
        id="GiapponeFuji"
        component={MyComposition}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={600}
      />
    </>
  );
};
