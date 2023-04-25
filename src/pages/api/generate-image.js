import webshot from 'node-webshot';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await webshot(
        `<div>${req.body.text}</div>`,
        'public/hello_world.png',
        { siteType: 'html', quality: 100 }
      );
      console.log('Screenshot saved successfully');
      res.status(200).json({ message: 'Screenshot saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error saving screenshot' });
    }
  } else {
    res.status(400).json({ message: 'Invalid request method' });
  }
}
