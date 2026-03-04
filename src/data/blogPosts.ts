export interface BlogExample {
  arabic: string;
  transliteration: string;
  english: string;
  turkish: string;
}

export interface BlogQuestion {
  type: "mcq" | "match" | "fill";
  question: { en: string; tr: string };
  options?: string[];
  correctIndex?: number;
  answer?: string;
  pairs?: { left: string; right: string }[];
}

export interface BlogSection {
  id: string;
  heading: { en: string; tr: string };
  content: { en: string; tr: string };
  examples?: BlogExample[];
}

export interface BlogPost {
  slug: string;
  title: { en: string; tr: string };
  excerpt: { en: string; tr: string };
  category: { en: string; tr: string };
  author: string;
  date: string;
  image: string;
  sections: BlogSection[];
  questions: BlogQuestion[];
}

import blogGreetingsImg from "@/assets/blog-greetings.jpg";
import blogAlphabetImg from "@/assets/blog-alphabet.jpg";
import blogFoodImg from "@/assets/blog-food.jpg";
import { blogPostsBatch2 } from "./blogPostsBatch2";
import { blogPostsBatch3 } from "./blogPostsBatch3";

const originalPosts: BlogPost[] = [
  {
    slug: "ways-to-say-ok-in-arabic",
    title: {
      en: "Ways to Say OK in Arabic: Everyday Expressions",
      tr: "Arapça'da Tamam Demenin Yolları: Günlük İfadeler",
    },
    excerpt: {
      en: "Discover the many ways Arabs express agreement in daily conversations, from formal to casual.",
      tr: "Arapların günlük konuşmalarda onaylarını ifade etmenin birçok yolunu keşfedin.",
    },
    category: { en: "Everyday Arabic", tr: "Günlük Arapça" },
    author: "Youssef Al-Masri",
    date: "2026-02-28",
    image: blogGreetingsImg,
    sections: [
      {
        id: "intro",
        heading: { en: "Introduction", tr: "Giriş" },
        content: {
          en: "In Arabic, there are many ways to say 'OK' or express agreement. Just like in English, the word you choose depends on the context — whether you're speaking formally, casually, or somewhere in between. Let's explore the most common expressions used across the Arab world.",
          tr: "Arapça'da 'tamam' demenin veya onay ifade etmenin birçok yolu vardır. Tıpkı Türkçe'de olduğu gibi, seçtiğiniz kelime bağlama bağlıdır — resmi, gündelik veya ikisinin arasında. Arap dünyasında en çok kullanılan ifadeleri keşfedelim.",
        },
      },
      {
        id: "tayeb",
        heading: { en: "Tayeb (طيب) — The Classic OK", tr: "Tayeb (طيب) — Klasik Tamam" },
        content: {
          en: "'Tayeb' is one of the most widely used words for 'OK' in Arabic. It literally means 'good' or 'fine' and is used in everyday conversations across the Middle East. You can use it to acknowledge something, agree to a plan, or simply respond to a statement.",
          tr: "'Tayeb', Arapça'da 'tamam' için en yaygın kullanılan kelimelerden biridir. Kelime anlamı 'iyi' veya 'güzel'dir ve Ortadoğu genelinde günlük konuşmalarda kullanılır.",
        },
        examples: [
          { arabic: "طيب، خلاص", transliteration: "Tayeb, khalas", english: "OK, done", turkish: "Tamam, bitti" },
          { arabic: "طيب، ماشي", transliteration: "Tayeb, mashi", english: "OK, alright", turkish: "Tamam, olur" },
        ],
      },
      {
        id: "mashi",
        heading: { en: "Mashi (ماشي) — Sure, No Problem", tr: "Mashi (ماشي) — Tabii, Sorun Yok" },
        content: {
          en: "'Mashi' literally means 'walking' but is used colloquially to mean 'OK', 'sure', or 'no problem'. It's very casual and commonly heard in Egyptian and Levantine Arabic.",
          tr: "'Mashi' kelime anlamı 'yürüyen' demektir ama günlük konuşmada 'tamam', 'tabii' veya 'sorun yok' anlamında kullanılır. Çok gündelik bir ifadedir.",
        },
        examples: [
          { arabic: "ماشي الحال", transliteration: "Mashi el-hal", english: "Everything is fine", turkish: "Her şey yolunda" },
        ],
      },
      {
        id: "inshallah",
        heading: { en: "In Sha Allah (إن شاء الله) — God Willing", tr: "İnşallah (إن شاء الله) — Allah İsterse" },
        content: {
          en: "While 'In Sha Allah' literally means 'God willing', it is commonly used as a soft 'OK' or 'hopefully'. When someone asks if you can do something, replying with 'In Sha Allah' shows agreement with a hopeful tone.",
          tr: "'İnşallah' kelime anlamı 'Allah isterse' demektir, ancak yumuşak bir 'tamam' veya 'inşallah' olarak yaygın şekilde kullanılır.",
        },
        examples: [
          { arabic: "إن شاء الله بكرة", transliteration: "In sha Allah bukra", english: "God willing, tomorrow", turkish: "İnşallah yarın" },
        ],
      },
    ],
    questions: [
      {
        type: "mcq",
        question: { en: "Which word literally means 'walking' but is used to say 'OK'?", tr: "Hangi kelime 'yürüyen' anlamına gelir ama 'tamam' demek için kullanılır?" },
        options: ["طيب", "ماشي", "إن شاء الله", "خلاص"],
        correctIndex: 1,
      },
      {
        type: "fill",
        question: { en: "Complete: طيب، ___ (OK, done)", tr: "Tamamlayın: طيب، ___ (Tamam, bitti)" },
        answer: "خلاص",
      },
      {
        type: "mcq",
        question: { en: "What does 'إن شاء الله' literally mean?", tr: "'إن شاء الله' kelime anlamı nedir?" },
        options: ["No problem", "God willing", "Of course", "Let's go"],
        correctIndex: 1,
      },
    ],
  },
  {
    slug: "learn-arabic-alphabet-letter-yaa",
    title: {
      en: "Learn the Arabic Alphabet: Letter Yaa (ي)",
      tr: "Arap Alfabesini Öğrenin: Yaa Harfi (ي)",
    },
    excerpt: {
      en: "Master the letter Yaa — its forms, pronunciation, and how it appears in common Arabic words.",
      tr: "Yaa harfini öğrenin — biçimleri, telaffuzu ve yaygın Arapça kelimelerde nasıl göründüğünü keşfedin.",
    },
    category: { en: "Arabic Basics", tr: "Arapça Temeller" },
    author: "Fatima Khalil",
    date: "2026-02-20",
    image: blogAlphabetImg,
    sections: [
      {
        id: "intro",
        heading: { en: "Introduction to Yaa", tr: "Yaa Harfine Giriş" },
        content: {
          en: "Yaa (ي) is the 28th and last letter of the Arabic alphabet. It is one of the most versatile letters, serving as both a consonant (like the English 'Y') and a long vowel (like 'ee' in 'see'). Understanding Yaa is essential for reading and writing Arabic fluently.",
          tr: "Yaa (ي) Arap alfabesinin 28. ve son harfidir. Hem ünsüz (Türkçe'deki 'Y' gibi) hem de uzun ünlü ('i' sesi gibi) olarak kullanılan en çok yönlü harflerden biridir.",
        },
      },
      {
        id: "forms",
        heading: { en: "Forms of Yaa", tr: "Yaa'nın Biçimleri" },
        content: {
          en: "Like most Arabic letters, Yaa changes shape depending on its position in a word. In the initial position it looks like (يـ), in the medial position (ـيـ), in the final connected form (ـي), and in the isolated form (ي). Practice recognizing each form to improve your reading speed.",
          tr: "Çoğu Arap harfi gibi, Yaa da kelimedeki konumuna göre şekil değiştirir. Başta (يـ), ortada (ـيـ), sonda bağlı (ـي) ve tek başına (ي) olarak yazılır.",
        },
        examples: [
          { arabic: "يد", transliteration: "Yad", english: "Hand", turkish: "El" },
          { arabic: "يوم", transliteration: "Yawm", english: "Day", turkish: "Gün" },
        ],
      },
      {
        id: "words",
        heading: { en: "Common Words with Yaa", tr: "Yaa İçeren Yaygın Kelimeler" },
        content: {
          en: "Yaa appears in many everyday Arabic words. Here are some common examples to practice with. Try reading each word aloud and listening to the pronunciation.",
          tr: "Yaa birçok günlük Arapça kelimede bulunur. İşte pratik yapabileceğiniz bazı yaygın örnekler.",
        },
        examples: [
          { arabic: "بيت", transliteration: "Bayt", english: "House", turkish: "Ev" },
          { arabic: "كبير", transliteration: "Kabeer", english: "Big", turkish: "Büyük" },
          { arabic: "جميل", transliteration: "Jameel", english: "Beautiful", turkish: "Güzel" },
        ],
      },
      {
        id: "practice",
        heading: { en: "Practice Tips", tr: "Pratik İpuçları" },
        content: {
          en: "To master Yaa, try writing it in all four forms several times. Then practice reading short words that contain Yaa. Pay attention to whether Yaa is used as a consonant (at the beginning of a word) or as a vowel (usually in the middle or end).",
          tr: "Yaa'yı öğrenmek için dört biçimini birçok kez yazmayı deneyin. Sonra Yaa içeren kısa kelimeleri okuma pratiği yapın.",
        },
      },
    ],
    questions: [
      {
        type: "mcq",
        question: { en: "What position is Yaa the last letter in the Arabic alphabet?", tr: "Yaa Arap alfabesinin kaçıncı harfidir?" },
        options: ["26th", "27th", "28th", "29th"],
        correctIndex: 2,
      },
      {
        type: "mcq",
        question: { en: "What does 'بيت' mean?", tr: "'بيت' ne anlama gelir?" },
        options: ["Day", "Hand", "House", "Beautiful"],
        correctIndex: 2,
      },
      {
        type: "fill",
        question: { en: "The word 'يوم' means ___ in English.", tr: "'يوم' kelimesi Türkçe'de ___ demektir." },
        answer: "Day",
      },
    ],
  },
  {
    slug: "famous-arabic-foods",
    title: {
      en: "Famous Arabic Foods and How to Say Them",
      tr: "Ünlü Arap Yemekleri ve Nasıl Söylenir",
    },
    excerpt: {
      en: "Explore delicious Arabic cuisine and learn the names of popular dishes with correct pronunciation.",
      tr: "Lezzetli Arap mutfağını keşfedin ve popüler yemeklerin isimlerini doğru telaffuzla öğrenin.",
    },
    category: { en: "Arabic Culture", tr: "Arap Kültürü" },
    author: "Layla Hassan",
    date: "2026-02-15",
    image: blogFoodImg,
    sections: [
      {
        id: "intro",
        heading: { en: "A Taste of Arabic Culture", tr: "Arap Kültüründen Bir Tat" },
        content: {
          en: "Food is a huge part of Arabic culture. Sharing meals is a way of showing hospitality and building relationships. Learning the names of popular Arabic dishes is a fun and practical way to expand your vocabulary. Let's explore some of the most beloved dishes across the Arab world!",
          tr: "Yemek, Arap kültürünün büyük bir parçasıdır. Yemek paylaşmak, misafirperverlik göstermenin ve ilişkiler kurmanın bir yoludur. Popüler Arap yemeklerinin isimlerini öğrenmek, kelime dağarcığınızı genişletmenin eğlenceli ve pratik bir yoludur!",
        },
      },
      {
        id: "hummus",
        heading: { en: "Hummus (حُمُّص)", tr: "Humus (حُمُّص)" },
        content: {
          en: "Hummus is perhaps the most internationally recognized Arabic dish. Made from blended chickpeas, tahini, lemon juice, and garlic, it's a staple across the Middle East. The word 'hummus' actually means 'chickpeas' in Arabic.",
          tr: "Humus belki de uluslararası alanda en çok tanınan Arap yemeğidir. Nohut, tahin, limon suyu ve sarımsaktan yapılır. 'Humus' kelimesi Arapça'da aslında 'nohut' anlamına gelir.",
        },
        examples: [
          { arabic: "أنا أحب الحُمُّص", transliteration: "Ana uhibb al-hummus", english: "I love hummus", turkish: "Humusu seviyorum" },
        ],
      },
      {
        id: "falafel",
        heading: { en: "Falafel (فلافل)", tr: "Falafel (فلافل)" },
        content: {
          en: "Falafel are deep-fried balls made from ground chickpeas or fava beans, mixed with herbs and spices. They're commonly served in pita bread with vegetables and tahini sauce. Falafel is a popular street food throughout the Arab world.",
          tr: "Falafel, öğütülmüş nohut veya bakla, otlar ve baharatlarla karıştırılarak yapılan kızartılmış toplardır. Genellikle pide ekmeğinde sebzeler ve tahin sosuyla servis edilir.",
        },
        examples: [
          { arabic: "فلافل مع خبز", transliteration: "Falafel ma'a khubz", english: "Falafel with bread", turkish: "Ekmekle falafel" },
        ],
      },
      {
        id: "shawarma",
        heading: { en: "Shawarma (شاورما)", tr: "Şavarma (شاورما)" },
        content: {
          en: "Shawarma is one of the most popular street foods in the Arab world. It consists of meat (usually chicken or lamb) that is stacked on a vertical spit, slowly roasted, and then shaved off and served in a wrap or on a plate with garlic sauce.",
          tr: "Şavarma Arap dünyasının en popüler sokak yiyeceklerinden biridir. Dikey bir şişe dizilen et (genellikle tavuk veya kuzu), yavaşça kızartılır ve sarılarak veya tabakta sarımsak sosuyla servis edilir.",
        },
        examples: [
          { arabic: "شاورما دجاج", transliteration: "Shawarma dajaj", english: "Chicken shawarma", turkish: "Tavuk şavarma" },
          { arabic: "من فضلك، شاورما واحدة", transliteration: "Min fadlak, shawarma wahida", english: "One shawarma, please", turkish: "Bir şavarma lütfen" },
        ],
      },
    ],
    questions: [
      {
        type: "mcq",
        question: { en: "What does the word 'حُمُّص' literally mean in Arabic?", tr: "'حُمُّص' kelimesi Arapça'da ne anlama gelir?" },
        options: ["Bread", "Chickpeas", "Garlic", "Oil"],
        correctIndex: 1,
      },
      {
        type: "mcq",
        question: { en: "Which dish is made from ground chickpeas and deep-fried?", tr: "Hangi yemek öğütülmüş nohuttan yapılıp kızartılır?" },
        options: ["Hummus", "Shawarma", "Falafel", "Tabbouleh"],
        correctIndex: 2,
      },
      {
        type: "fill",
        question: { en: "شاورما ___ means 'Chicken shawarma'.", tr: "شاورما ___ 'Tavuk şavarma' demektir." },
        answer: "دجاج",
      },
    ],
  },
];

export const blogPosts: BlogPost[] = [
  ...originalPosts,
  ...blogPostsBatch2,
  ...blogPostsBatch3,
];
