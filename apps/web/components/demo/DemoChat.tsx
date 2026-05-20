'use client';

import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef, KeyboardEvent } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

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
    text: 'Halo, selamat malam! Pilihan kamar untuk besok:\n🛏 **Deluxe** — Rp 750.000/malam\n   Balkon · view kebun · sarapan 2 orang\n🛁 **Suite** — Rp 1.200.000/malam\n   Bathtub · view sawah · sarapan 2 orang\n\nKamar mana yang diminati?',
    time: '23:05',
  },
];

function renderBotText(text: string): React.ReactNode {
  return text.split('\n').map((line, i, arr) => {
    const parts = line.split(/\*\*(.+?)\*\*/g);
    return (
      <span key={i}>
        {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
        {i < arr.length - 1 && <br />}
      </span>
    );
  });
}

function getReply(text: string): string {
  const lower = text.toLowerCase();
  if (/kamar|room|harga|price|tarif|berapa/.test(lower)) {
    return 'Pilihan kamar kami:\n🛏 **Deluxe** — Rp 750.000/malam (Balkon, sarapan 2 orang)\n🛁 **Suite** — Rp 1.200.000/malam (Bathtub, view sawah, sarapan 2 orang)\n\nKamar mana yang diminati?';
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

export interface DemoChatHandle {
  sendSuggestion: (text: string) => void;
}

interface DemoChatProps {
  minHeight?: string;
}

export const DemoChat = forwardRef<DemoChatHandle, DemoChatProps>(function DemoChat({ minHeight = '175px' }, ref) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    sendSuggestion: (text: string) => send(text),
  }));

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  function send(text?: string) {
    const msg = (text ?? input).trim();
    if (!msg) return;

    const now = new Date();
    const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    setMessages((prev) => [...prev, { type: 'customer', text: msg, time }]);
    setInput('');

    setMessages((prev) => [...prev, { type: 'typing' }]);

    setTimeout(() => {
      setMessages((prev) => {
        const withoutTyping = prev.filter((m) => m.type !== 'typing');
        return [...withoutTyping, { type: 'bot', text: getReply(msg), time }];
      });
    }, 600);
  }

  function handleKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') send();
  }

  return (
    <div className="border border-[var(--border)] rounded-[22px] overflow-hidden bg-[var(--bg-surface)]" >
      {/* Header */}
      <div className="bg-brand-500 px-4 py-3 flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <svg width="20" height="23" viewBox="0 0 40 46" fill="none">
            <path d="M10,2 H30 Q38,2 38,10 V28 Q38,36 30,36 H16 L6,46 L6,36 Q2,36 2,28 V10 Q2,2 10,2 Z" fill="white" opacity=".93" />
            <circle cx="12" cy="19" r="3" fill="#059669" />
            <path d="M12,13 A6,6 0 0,1 12,25" stroke="#059669" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M12,8 A11,11 0 0,1 12,30" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity=".6" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-bold text-white">Villa Ubud Jiwa</p>
          <p className="text-[11px] text-[#A7F3D0]">Penjawab 24 jam aktif</p>
        </div>
      </div>

      {/* Chat area */}
      <div
        ref={chatRef}
        className="demo-chat-area p-3.5 flex flex-col gap-2.5 overflow-y-auto"
        style={{ minHeight }}
      >
        {messages.map((msg, i) => {
          if (msg.type === 'timestamp') {
            return (
              <p key={i} className="text-[10px] text-[var(--text-3)] text-center">
                {msg.text}
              </p>
            );
          }
          if (msg.type === 'customer') {
            return (
              <div key={i} className="flex justify-end">
                <div>
                  <div
                    className="bg-[#E0E7FF] rounded-[8px_8px_2px_8px] px-[11px] py-2 max-w-[240px]"
                    style={{ boxShadow: '0 1px 2px rgba(0,0,0,.08)' }}
                  >
                    <p className="text-[13px] text-gray-800">{msg.text}</p>
                  </div>
                  <p className="text-[10px] text-[var(--text-3)] text-right mt-1">{msg.time}</p>
                </div>
              </div>
            );
          }
          if (msg.type === 'bot') {
            return (
              <div key={i} className="flex justify-start">
                <div>
                  <div
                    className="bg-[var(--bg-surface)] rounded-[8px_8px_8px_2px] px-[11px] py-2 max-w-[220px]"
                    style={{ boxShadow: '0 1px 2px rgba(0,0,0,.08)' }}
                  >
                    <p className="text-[13px] text-[var(--text-1)]">{renderBotText(msg.text)}</p>
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
                <div
                  className="bg-[var(--bg-surface)] rounded-[8px_8px_8px_2px] p-2.5 flex gap-1 items-center"
                  style={{ boxShadow: '0 1px 2px rgba(0,0,0,.08)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Input bar */}
      <div className="bg-[var(--bg-subtle)] border-t border-[var(--border)] px-3 py-[10px] flex gap-2 items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Tanya apa saja..."
          className="flex-1 bg-[var(--bg-surface)] border border-[var(--border)] rounded-full px-[13px] py-[7px] text-[12.5px] text-[var(--text-1)] outline-none font-[inherit]"
        />
        <button
          onClick={() => send()}
          className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer flex-shrink-0"
        >
          <PaperAirplaneIcon className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
});
