'use client';

import { useState } from 'react';
import axios from 'axios';

export default function WhatsApp() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSend = async () => {
    setStatus('Sending...');
    try {
      const res = await axios.post('/api/send-whatsapp', { message });
      if (res.data.success) {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Error occurred.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <div className="w-full max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold">Send WhatsApp Message</h1>

        <textarea
          className="w-full border p-3 rounded-lg"
          rows={4}
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={handleSend}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Send via Gupshup
        </button>

        <p className="text-sm text-gray-600">{status}</p>
      </div>
    </main>
  );
}
