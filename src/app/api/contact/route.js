import fs from 'fs';
import path from 'path';

export async function POST(request) {
  const data = await request.json();

  const dataDir = path.join(process.cwd(), 'data');
  const filePath = path.join(dataDir, 'contacts.json');

  // Ensure 'data' directory exists
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Read existing data or initialize
  const fileData = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, 'utf8'))
    : [];

  // Add new entry with timestamp
  fileData.push({
    ...data,
    timestamp: new Date().toISOString(),
  });

  // Write updated data to file
  fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));

  return new Response(JSON.stringify({ message: 'Message sent successfully☺️!' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
