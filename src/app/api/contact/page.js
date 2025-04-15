import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    console.log('-----');
  if (req.method === 'POST') {
    const data = req.body;

    const filePath = path.join(process.cwd(), 'data', 'contacts.json');
    const fileData = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf8'))
      : [];

    fileData.push({
      ...data,
      timestamp: new Date().toISOString(),
    });

    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));

    res.status(200).json({ message: 'Message saved successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
