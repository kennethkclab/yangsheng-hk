"use client";

import { FormEvent, useState } from "react";
import { siteData } from "@/data/siteContent";

const topicsZh = ["課程查詢", "活動報名", "科研健腦御智功", "道家內功", "其他"];
const topicsEn = ["Course enquiry", "Event booking", "Jiannao Yuzhi Gong", "Daoist Neigong", "Other"];

export default function ContactForm({ locale = "zh" }: { locale?: "zh" | "en" }) {
  const isEn = locale === "en";
  const topics = isEn ? topicsEn : topicsZh;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = isEn
      ? `Hello, I would like to enquire about ${topic}.\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`
      : `你好，我想查詢「${topic}」。\n姓名：${name}\n電話：${phone}\n內容：${message}`;
    window.open(`https://wa.me/852${siteData.contact.whatsapp}?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full rounded-md border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none ring-brand-600 transition focus:bg-white focus:ring-2";

  return (
    <form onSubmit={onSubmit} className="rounded-md border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="mb-2 text-xl font-bold text-stone-900">{isEn ? "Send an enquiry" : "留言查詢"}</h2>
      <p className="mb-6 text-stone-600">{isEn ? "Submit to continue in WhatsApp with your details filled in." : "填寫後按提交，會帶著你的資料打開 WhatsApp。"}</p>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm text-stone-600">{isEn ? "Name" : "姓名"}</span>
          <input required value={name} onChange={(e) => setName(e.target.value)} className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-stone-600">{isEn ? "Phone" : "電話"}</span>
          <input required value={phone} onChange={(e) => setPhone(e.target.value)} className={field} inputMode="tel" />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm text-stone-600">{isEn ? "Topic" : "查詢項目"}</span>
        <select value={topic} onChange={(e) => setTopic(e.target.value)} className={field}>
          {topics.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm text-stone-600">{isEn ? "Message" : "詳情"}</span>
        <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className={`${field} resize-y`} />
      </label>
      <button type="submit" className="mt-6 w-full rounded-md bg-brand-700 px-6 py-3.5 font-semibold text-white hover:bg-brand-800 md:w-auto">
        {isEn ? "Send via WhatsApp" : "經 WhatsApp 送出"}
      </button>
    </form>
  );
}
