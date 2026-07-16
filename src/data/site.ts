// Centralised demo content for Aurelia Dental.
// Replace fictional NAP data before launch.

import heroImg from "@/assets/hero.jpg";
import interiorImg from "@/assets/interior.jpg";
import consultationImg from "@/assets/consultation.jpg";
import technologyImg from "@/assets/technology.jpg";
import invisalignImg from "@/assets/treatment-invisalign.jpg";
import bondingImg from "@/assets/treatment-bonding.jpg";
import implantsImg from "@/assets/treatment-implants.jpg";
import cosmeticImg from "@/assets/treatment-cosmetic.jpg";
import ameliaImg from "@/assets/dentist-amelia.jpg";
import danielImg from "@/assets/dentist-daniel.jpg";

export const images = {
  hero: heroImg,
  interior: interiorImg,
  consultation: consultationImg,
  technology: technologyImg,
  invisalign: invisalignImg,
  bonding: bondingImg,
  implants: implantsImg,
  cosmetic: cosmeticImg,
  amelia: ameliaImg,
  daniel: danielImg,
};

export const clinic = {
  name: "Aurelia Dental",
  tagline: "Dentistry, thoughtfully redefined.",
  address: {
    line1: "18 Pembroke Lane",
    line2: "Dublin 4, D04 A1B2",
    country: "Ireland",
  },
  // NOTE: fictional demo contact details — replace before launch.
  phone: "01 555 0184",
  phoneHref: "tel:+35315550184",
  email: "hello@aureliadental.ie",
  hours: [
    { day: "Monday", time: "8:00 – 18:00" },
    { day: "Tuesday", time: "8:00 – 18:00" },
    { day: "Wednesday", time: "8:00 – 20:00" },
    { day: "Thursday", time: "8:00 – 20:00" },
    { day: "Friday", time: "8:00 – 17:00" },
    { day: "Saturday", time: "9:00 – 14:00" },
    { day: "Sunday", time: "Closed" },
  ],
  rating: { score: 4.9, count: 350 },
};

export type Treatment = {
  slug: string;
  name: string;
  short: string;
  category: "enhance" | "restore" | "maintain" | "urgent";
  image?: string;
  duration?: string;
  from?: string;
};

export const treatments: Treatment[] = [
  { slug: "invisalign", name: "Invisalign", short: "Discreet clear aligners designed around adult lifestyles.", category: "enhance", image: images.invisalign, duration: "6–18 months", from: "From €3,600" },
  { slug: "composite-bonding", name: "Composite Bonding", short: "Refined reshaping using tooth-coloured composite for a natural finish.", category: "enhance", image: images.bonding, duration: "1–2 visits", from: "From €280 per tooth" },
  { slug: "teeth-whitening", name: "Teeth Whitening", short: "Professional whitening tailored to your enamel, at home or in-clinic.", category: "enhance", from: "From €450" },
  { slug: "veneers", name: "Porcelain Veneers", short: "Hand-crafted ceramic veneers for a considered, durable transformation.", category: "enhance", from: "From €950 per tooth" },
  { slug: "smile-makeovers", name: "Smile Makeovers", short: "A combined plan bringing together the treatments that suit you best.", category: "enhance", from: "Consultation-based" },

  { slug: "dental-implants", name: "Dental Implants", short: "Digitally planned tooth replacement built to feel and function naturally.", category: "restore", image: images.implants, duration: "3–6 months", from: "From €2,800" },
  { slug: "crowns", name: "Crowns", short: "Precision ceramic crowns that protect and rebuild compromised teeth.", category: "restore", from: "From €890" },
  { slug: "bridges", name: "Bridges", short: "A refined solution to replace one or more missing teeth.", category: "restore", from: "From €1,650" },
  { slug: "restorative-dentistry", name: "Restorative Dentistry", short: "Rebuilding worn or damaged smiles with a considered, long-term plan.", category: "restore", from: "Consultation-based" },

  { slug: "general-dentistry", name: "General Dentistry", short: "Careful check-ups, tooth-coloured fillings and everyday preventive care.", category: "maintain", from: "From €95" },
  { slug: "dental-hygiene", name: "Dental Hygiene", short: "Extended hygienist appointments that leave you noticeably fresher.", category: "maintain", from: "From €110" },
  { slug: "gum-care", name: "Gum Care", short: "Targeted periodontal treatment for healthier, more stable gums.", category: "maintain", from: "From €180" },
  { slug: "oral-health-examinations", name: "Oral Health Examinations", short: "In-depth assessments including digital imaging and screening.", category: "maintain", from: "From €95" },

  { slug: "emergency-dentistry", name: "Emergency Dentistry", short: "Same-day care when something feels wrong. Call us first.", category: "urgent" },
  { slug: "broken-teeth", name: "Broken Teeth", short: "Prompt, calm repair to protect the tooth and relieve discomfort.", category: "urgent" },
  { slug: "dental-pain", name: "Dental Pain", short: "A thorough assessment to understand and settle the underlying cause.", category: "urgent" },
  { slug: "lost-fillings-or-crowns", name: "Lost Fillings or Crowns", short: "Fast, careful re-cementation or replacement.", category: "urgent" },
];

export const categoryMeta = {
  enhance: { title: "Enhance your smile", eyebrow: "01 · Aesthetic" },
  restore: { title: "Restore your smile", eyebrow: "02 · Restorative" },
  maintain: { title: "Maintain your health", eyebrow: "03 · Preventive" },
  urgent: { title: "When you need help quickly", eyebrow: "04 · Urgent care" },
} as const;

export type Dentist = {
  slug: string;
  name: string;
  title: string;
  image: string;
  intro: string;
  bio: string;
  interests: string[];
  qualifications: string;
  registration: string;
  treatments: string[];
};

export const dentists: Dentist[] = [
  {
    slug: "amelia-byrne",
    name: "Dr Amelia Byrne",
    title: "Principal Dentist · Cosmetic Dentistry",
    image: images.amelia,
    intro:
      "Amelia founded Aurelia Dental with a simple belief — that thoughtful, unhurried dentistry produces the most natural results.",
    bio:
      "With over fifteen years in private practice across Dublin and London, Amelia is known for a considered, minimally invasive approach to cosmetic dentistry. She spends time understanding what patients would like to feel, not only what they'd like to change.",
    interests: ["Composite bonding", "Porcelain veneers", "Invisalign", "Smile design"],
    qualifications: "BDS (NUI) · MFD RCSI · Diploma in Aesthetic Dentistry — demo",
    registration: "Dental Council of Ireland Reg. No. — demo placeholder",
    treatments: ["invisalign", "composite-bonding", "veneers", "teeth-whitening", "smile-makeovers"],
  },
  {
    slug: "daniel-walsh",
    name: "Dr Daniel Walsh",
    title: "Implant & Restorative Dentist",
    image: images.daniel,
    intro:
      "Daniel leads Aurelia's implant and restorative work with a calm, meticulous style that patients consistently comment on.",
    bio:
      "Daniel's practice focuses on rebuilding function and confidence — from single implants to full-mouth rehabilitation. He plans every case digitally, so patients understand exactly what to expect at each stage.",
    interests: ["Dental implants", "Full-mouth rehabilitation", "Complex crown & bridge", "Digital planning"],
    qualifications: "BDS · MSc Implant Dentistry — demo",
    registration: "Dental Council of Ireland Reg. No. — demo placeholder",
    treatments: ["dental-implants", "crowns", "bridges", "restorative-dentistry"],
  },
];

export type Review = {
  name: string;
  treatment?: string;
  quote: string;
};

export const reviews: Review[] = [
  {
    name: "Sarah M.",
    treatment: "New patient exam",
    quote:
      "I've avoided the dentist for years. From the first phone call I felt looked-after. Nothing rushed, nothing pushed — just a calm, honest conversation about what my options were.",
  },
  {
    name: "James O.",
    treatment: "Invisalign",
    quote:
      "The communication throughout my Invisalign treatment was exceptional. I always knew where I was in the plan and the final result looks like my own teeth, only better.",
  },
  {
    name: "Niamh R.",
    treatment: "Implant restoration",
    quote:
      "Dr Walsh explained every stage of my implant so clearly. It's the most professional dental experience I've had, and the result is genuinely undetectable.",
  },
  {
    name: "Conor D.",
    treatment: "Composite bonding",
    quote: "Subtle, natural work. My friends noticed something was different but nobody could put their finger on it — which is exactly what I wanted.",
  },
  {
    name: "Aoife L.",
    treatment: "Hygiene",
    quote: "The hygiene appointment felt like a proper reset. Thorough, gentle, and I left with a clear routine to follow at home.",
  },
  {
    name: "Ruairí B.",
    treatment: "Emergency care",
    quote: "Broke a tooth on a Friday evening and was seen the next morning. Reassuring, no drama, sorted quickly.",
  },
];

export type Case = {
  id: string;
  treatment: string;
  slug: string;
  duration: string;
  note: string;
  before: string;
  after: string;
};

// For demo before/after we reuse editorial imagery. Replace with real
// clinical before/after photography before launch.
export const cases: Case[] = [
  { id: "c1", treatment: "Invisalign & whitening", slug: "invisalign", duration: "11 months", note: "Discreet aligner treatment followed by professional whitening.", before: images.cosmetic, after: images.cosmetic },
  { id: "c2", treatment: "Composite bonding", slug: "composite-bonding", duration: "2 visits", note: "Reshaping of six upper teeth using layered composite.", before: images.bonding, after: images.bonding },
  { id: "c3", treatment: "Implant restoration", slug: "dental-implants", duration: "5 months", note: "Single implant to replace an upper premolar.", before: images.implants, after: images.implants },
];
