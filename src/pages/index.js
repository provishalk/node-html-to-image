import { Inter } from "next/font/google";
import axios from "axios";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [text, setText] = useState("");
  const [isImageCreated, setIsImageCreated] = useState(false);
  const handleGenerateImage = () => {
    setIsImageCreated(false);
    axios.post("/api/generate-image/", { text }).then((res) => {
      console.log(res.data);
      setIsImageCreated(true);
    });
  };
  const handleInputChange = ({ target }) => {
    setText(target.value);
  };
  return (
    <>
      <input type="text" onChange={handleInputChange} value={text} />
      <button onClick={handleGenerateImage}>Generate Image</button>
      {isImageCreated && (
        <>
          <h2>{"Image Available At ->"}</h2>
          <a href="/hello_world.png">Link</a>
        </>
      )}
    </>
  );
}
