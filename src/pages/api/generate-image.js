import webshot from "node-webshot";

export default function handler(req, res) {
  if (req.method === "POST") {
    // handle POST request
    // webshot(
    //   `<div>${req.body.text}</div>`,
    //   "public/hello_world.png",
    //   { siteType: "html", quality: 100 },
    //   function (err) {
    //     // screenshot now saved to hello_world.png
    //     console.log(err);
    //   }
    // );
    res.status(200).json({ message: "POST request received" });
  } else {
    // handle other request methods
    res.status(400).json({ message: "Invalid request method" });
  }
}
