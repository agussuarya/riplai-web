'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { RiplaiLogo } from '@/components/logo/RiplaiLogo';

type Message =
  | { type: 'timestamp'; text: string }
  | { type: 'customer'; text: string; time: string }
  | { type: 'bot'; text: string; time: string }
  | { type: 'typing' };

const INITIAL_MESSAGES: Message[] = [
  { type: 'timestamp', text: 'Sabtu, 23:05' },
  { type: 'customer', text: 'Halo, mau tanya kamar untuk besok. 2 orang dewasa', time: '23:05' },
  {
    type: 'bot',
    text: 'Halo, selamat malam! Pilihan kamar untuk besok:\n🛏 Deluxe — Rp 750.000/malam\n   Balkon · view kebun · sarapan 2 orang\n🛁 Suite — Rp 1.200.000/malam\n   Bathtub · view sawah · sarapan 2 orang\n\nKamar mana yang diminati?',
    time: '23:05',
  },
];

function getReply(text: string): string {
  const lower = text.toLowerCase();
  if (/kamar|room|harga|price|tarif|berapa/.test(lower)) {
    return 'Pilihan kamar kami:\n🛏 Deluxe — Rp 750.000/malam (Balkon, sarapan 2 orang)\n🛁 Suite — Rp 1.200.000/malam (Bathtub, view sawah, sarapan 2 orang)\n\nKamar mana yang diminati?';
  }
  if (/booking|pesan|reservasi|book/.test(lower)) {
    return 'Untuk reservasi, kami perlu: nama tamu, tanggal check-in & check-out, dan tipe kamar. Silakan kirimkan detailnya.';
  }
  if (/tersedia|available|ada|kosong|cek|check/.test(lower)) {
    return 'Ketersediaan kamar untuk tanggal yang Anda inginkan bisa kami cek segera. Mohon kirimkan tanggal check-in dan check-out.';
  }
  if (/sarapan|breakfast|fasilitas|wifi|kolam/.test(lower)) {
    return 'Semua kamar sudah termasuk sarapan untuk 2 orang. Fasilitas lengkap: WiFi gratis, kolam renang, parkir. Ada yang ingin ditanyakan lagi?';
  }
  return 'Terima kasih pesannya! Tim kami akan segera membalas lebih lanjut. Ada yang bisa dibantu sekarang?';
}

interface DemoChatProps {
  maxHeight?: string;
}

export function DemoChat({ maxHeight = '220px' }: DemoChatProps) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  function send() {
    const text = input.trim();
    if (!text) return;

    const now = new Date();
    const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    setMessages((prev) => [...prev, { type: 'customer', text, time }]);
    setInput('');

    setMessages((prev) => [...prev, { type: 'typing' }]);

    setTimeout(() => {
      setMessages((prev) => {
        const withoutTyping = prev.filter((m) => m.type !== 'typing');
        return [...withoutTyping, { type: 'bot', text: getReply(text), time }];
      });
    }, 600);
  }

  function handleKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') send();
  }

  return (
    <div className="border border-gray-200 rounded-[22px] overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-brand-500 px-4 py-3 flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <RiplaiLogo size={18} variant="white" />
        </div>
        <div>
          <p className="text-sm font-bold text-white">Villa Ubud Jiwa</p>
          <p className="text-[11px] text-[#A7F3D0]">Penjawab 24 jam aktif</p>
        </div>
      </div>

      {/* Chat area */}
      <div
        ref={chatRef}
        className="bg-[#F0F4F0] p-3.5 flex flex-col gap-2.5 overflow-y-auto"
        style={{ maxHeight }}
      >
        {messages.map((msg, i) => {
          if (msg.type === 'timestamp') {
            return (
              <p key={i} className="text-[10px] text-gray-400 text-center">
                {msg.text}
              </p>
            );
          }
          if (msg.type === 'customer') {
            return (
              <div key={i} className="flex justify-end">
                <div>
                  <div className="bg-[#E0E7FF] rounded-[8px_8px_2px_8px] p-2 max-w-[220px]">
                    <p className="text-sm text-gray-800">{msg.text}</p>
                  </div>
                  <p className="text-[10px] text-gray-400 text-right mt-1">{msg.time}</p>
                </div>
              </div>
            );
          }
          if (msg.type === 'bot') {
            return (
              <div key={i} className="flex justify-start">
                <div>
                  <div className="bg-white rounded-[8px_8px_8px_2px] p-2 max-w-[240px]">
                    <p className="text-sm text-gray-800 whitespace-pre-line">{msg.text}</p>
                  </div>
                  <p className="text-[10px] text-accent-500 font-semibold text-right mt-1">
                    Admin Otomatis · {msg.time}
                  </p>
                </div>
              </div>
            );
          }
          if (msg.type === 'typing') {
            return (
              <div key={i} className="flex justify-start">
                <div className="bg-white rounded-[8px_8px_8px_2px] p-2.5 flex gap-1 items-center">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: '0ms' }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: '150ms' }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: '300ms' }}
                  />
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Input bar */}
      <div className="bg-gray-50 border-t border-gray-200 px-3 py-2.5 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Tanya apa saja..."
          className="flex-1 text-sm text-gray-700 bg-transparent outline-none"
        />
        <button
          onClick={send}
          className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors"
        >
          <PaperAirplaneIcon className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}
