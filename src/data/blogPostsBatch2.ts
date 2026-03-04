import type { BlogPost } from "./blogPosts";

import blogPrepositionsImg from "@/assets/blog-prepositions.jpg";
import blogColorsImg from "@/assets/blog-colors.jpg";
import blogNumbersImg from "@/assets/blog-numbers.jpg";
import blogTravelImg from "@/assets/blog-travel.jpg";
import blogFamilyImg from "@/assets/blog-family.jpg";
import blogWeatherImg from "@/assets/blog-weather.jpg";
import blogRamadanImg from "@/assets/blog-ramadan.jpg";
import blogAnimalsImg from "@/assets/blog-animals.jpg";
import blogShoppingImg from "@/assets/blog-shopping.jpg";
import blogProverbsImg from "@/assets/blog-proverbs.jpg";

export const blogPostsBatch2: BlogPost[] = [
  // 1. Arabic Prepositions
  {
    slug: "arabic-prepositions-common-words",
    title: { en: "Arabic Prepositions: Common Words and Usage", tr: "Arapça Edatlar: Yaygın Kelimeler ve Kullanımları" },
    excerpt: { en: "Master the most essential Arabic prepositions and learn how to use them in everyday sentences.", tr: "En temel Arapça edatları öğrenin ve günlük cümlelerde nasıl kullanacağınızı keşfedin." },
    category: { en: "Arabic Basics", tr: "Arapça Temeller" },
    author: "Youssef Al-Masri",
    date: "2026-02-10",
    image: blogPrepositionsImg,
    sections: [
      { id: "intro", heading: { en: "Why Prepositions Matter", tr: "Edatlar Neden Önemlidir" }, content: { en: "Prepositions are the glue of any language. In Arabic, prepositions (حروف الجر) connect nouns and pronouns to the rest of the sentence, giving context about location, direction, time, and more. Without them, sentences would feel incomplete.", tr: "Edatlar her dilin yapıştırıcısıdır. Arapça'da edatlar (حروف الجر) isimleri ve zamirleri cümlenin geri kalanına bağlayarak konum, yön, zaman ve daha fazlası hakkında bağlam sağlar." } },
      { id: "fi", heading: { en: "في (Fi) — In / At", tr: "في (Fi) — İçinde / -de" }, content: { en: "'Fi' is one of the most commonly used Arabic prepositions. It indicates being inside something or at a location. You'll hear it constantly in daily conversations.", tr: "'Fi' en yaygın kullanılan Arapça edatlardan biridir. Bir şeyin içinde olmayı veya bir konumda bulunmayı ifade eder." }, examples: [
        { arabic: "أنا في البيت", transliteration: "Ana fi al-bayt", english: "I am at home", turkish: "Evdeyim" },
        { arabic: "الكتاب في الحقيبة", transliteration: "Al-kitab fi al-haqeeba", english: "The book is in the bag", turkish: "Kitap çantada" },
      ] },
      { id: "min", heading: { en: "من (Min) — From", tr: "من (Min) — -den / -dan" }, content: { en: "'Min' expresses origin, source, or starting point. It's equivalent to 'from' in English and is used in countless expressions.", tr: "'Min' köken, kaynak veya başlangıç noktasını ifade eder. Türkçe'deki '-den/-dan' ekine karşılık gelir." }, examples: [
        { arabic: "أنا من مصر", transliteration: "Ana min Masr", english: "I am from Egypt", turkish: "Mısır'danım" },
        { arabic: "من الصباح إلى المساء", transliteration: "Min al-sabah ila al-masa", english: "From morning to evening", turkish: "Sabahtan akşama kadar" },
      ] },
      { id: "ila", heading: { en: "إلى (Ila) — To / Towards", tr: "إلى (Ila) — -e / -a Doğru" }, content: { en: "'Ila' indicates direction or destination. It's the counterpart of 'min' and together they form the 'from...to' structure.", tr: "'Ila' yön veya hedefi gösterir. 'Min' ile birlikte '-den...-e' yapısını oluşturur." }, examples: [
        { arabic: "ذهبت إلى المدرسة", transliteration: "Dhahabtu ila al-madrasa", english: "I went to school", turkish: "Okula gittim" },
      ] },
      { id: "ala", heading: { en: "على (Ala) — On / Upon", tr: "على (Ala) — Üzerinde" }, content: { en: "'Ala' means 'on' or 'upon' and is used for surfaces, obligations, and many idiomatic expressions in Arabic.", tr: "'Ala' 'üzerinde' anlamına gelir ve yüzeyler, yükümlülükler ve birçok deyimsel ifadede kullanılır." }, examples: [
        { arabic: "الكتاب على الطاولة", transliteration: "Al-kitab ala al-tawila", english: "The book is on the table", turkish: "Kitap masanın üzerinde" },
      ] },
    ],
    questions: [
      { type: "mcq", question: { en: "Which preposition means 'from'?", tr: "Hangi edat '-den/-dan' anlamına gelir?" }, options: ["في", "من", "إلى", "على"], correctIndex: 1 },
      { type: "fill", question: { en: "أنا ___ البيت (I am at home)", tr: "أنا ___ البيت (Evdeyim)" }, answer: "في" },
      { type: "mcq", question: { en: "What does 'إلى' mean?", tr: "'إلى' ne anlama gelir?" }, options: ["From", "In", "To", "On"], correctIndex: 2 },
    ],
  },

  // 2. Colors in Arabic
  {
    slug: "colors-in-arabic",
    title: { en: "Learn Colors in Arabic: A Colorful Vocabulary Guide", tr: "Arapça Renkleri Öğrenin: Renkli Bir Kelime Rehberi" },
    excerpt: { en: "Discover how to say all the basic colors in Arabic with pronunciation and fun examples.", tr: "Tüm temel renkleri Arapça olarak telaffuz ve eğlenceli örneklerle öğrenin." },
    category: { en: "Arabic Basics", tr: "Arapça Temeller" },
    author: "Fatima Khalil",
    date: "2026-02-08",
    image: blogColorsImg,
    sections: [
      { id: "intro", heading: { en: "Colors in Arabic Culture", tr: "Arap Kültüründe Renkler" }, content: { en: "Colors play an important role in Arabic culture and language. From the golden sands of the desert to the deep blue of the Mediterranean Sea, Arabic has rich and expressive words for every color. Learning colors is one of the first steps in building your Arabic vocabulary.", tr: "Renkler Arap kültüründe ve dilinde önemli bir rol oynar. Çölün altın kumlarından Akdeniz'in derin mavisine kadar, Arapça her renk için zengin ve ifade edici kelimelere sahiptir." } },
      { id: "primary", heading: { en: "Primary Colors", tr: "Ana Renkler" }, content: { en: "Let's start with the three primary colors. In Arabic, color words often change form depending on gender — masculine and feminine forms exist for most colors.", tr: "Üç ana renkle başlayalım. Arapça'da renk kelimeleri genellikle cinsiyete göre değişir — çoğu renk için eril ve dişil formlar mevcuttur." }, examples: [
        { arabic: "أحمر", transliteration: "Ahmar", english: "Red", turkish: "Kırmızı" },
        { arabic: "أزرق", transliteration: "Azraq", english: "Blue", turkish: "Mavi" },
        { arabic: "أصفر", transliteration: "Asfar", english: "Yellow", turkish: "Sarı" },
      ] },
      { id: "secondary", heading: { en: "More Essential Colors", tr: "Daha Fazla Temel Renk" }, content: { en: "Beyond the primary colors, here are more colors you'll need in daily life. These appear frequently in descriptions of clothes, food, nature, and everyday objects.", tr: "Ana renklerin ötesinde, günlük hayatta ihtiyaç duyacağınız daha fazla renk. Bunlar kıyafet, yemek, doğa ve günlük nesnelerin tanımlarında sıkça görülür." }, examples: [
        { arabic: "أخضر", transliteration: "Akhdar", english: "Green", turkish: "Yeşil" },
        { arabic: "أبيض", transliteration: "Abyad", english: "White", turkish: "Beyaz" },
        { arabic: "أسود", transliteration: "Aswad", english: "Black", turkish: "Siyah" },
        { arabic: "بُرتقالي", transliteration: "Burtuqali", english: "Orange", turkish: "Turuncu" },
      ] },
      { id: "sentences", heading: { en: "Using Colors in Sentences", tr: "Cümlelerde Renk Kullanımı" }, content: { en: "Now let's see how colors are used in real sentences. Remember that colors agree with the noun they describe in gender.", tr: "Şimdi renklerin gerçek cümlelerde nasıl kullanıldığını görelim. Renklerin tanımladıkları isimle cinsiyette uyum sağladığını unutmayın." }, examples: [
        { arabic: "السماء زرقاء", transliteration: "As-sama zarqa", english: "The sky is blue", turkish: "Gökyüzü mavi" },
        { arabic: "الوردة حمراء", transliteration: "Al-warda hamra", english: "The rose is red", turkish: "Gül kırmızı" },
      ] },
    ],
    questions: [
      { type: "mcq", question: { en: "What color is 'أخضر'?", tr: "'أخضر' hangi renktir?" }, options: ["Red", "Green", "Blue", "Yellow"], correctIndex: 1 },
      { type: "fill", question: { en: "السماء ___ (The sky is blue)", tr: "السماء ___ (Gökyüzü mavi)" }, answer: "زرقاء" },
      { type: "mcq", question: { en: "Which word means 'black' in Arabic?", tr: "Arapça'da hangi kelime 'siyah' demektir?" }, options: ["أبيض", "أحمر", "أسود", "أصفر"], correctIndex: 2 },
    ],
  },

  // 3. Days of the Week
  {
    slug: "days-of-the-week-in-arabic",
    title: { en: "Days of the Week in Arabic: Complete Guide", tr: "Arapça Haftanın Günleri: Tam Rehber" },
    excerpt: { en: "Learn all seven days of the week in Arabic with pronunciation, origins, and usage examples.", tr: "Arapça haftanın yedi gününü telaffuz, köken ve kullanım örnekleriyle öğrenin." },
    category: { en: "Arabic Basics", tr: "Arapça Temeller" },
    author: "Ahmed Nasser",
    date: "2026-02-05",
    image: blogPrepositionsImg,
    sections: [
      { id: "intro", heading: { en: "The Arabic Week", tr: "Arapça Hafta" }, content: { en: "In Arabic-speaking countries, the week traditionally starts on Sunday (الأحد), not Monday. Understanding the days of the week is essential for scheduling, making appointments, and daily communication. Let's learn each day with its pronunciation.", tr: "Arapça konuşulan ülkelerde hafta geleneksel olarak Pazar (الأحد) günü başlar. Haftanın günlerini anlamak, planlama, randevu alma ve günlük iletişim için çok önemlidir." } },
      { id: "sun-tue", heading: { en: "Sunday to Tuesday", tr: "Pazar'dan Salı'ya" }, content: { en: "The first three days of the Arabic week carry names derived from Arabic numerals, reflecting their position in the week.", tr: "Arapça haftanın ilk üç günü, haftadaki konumlarını yansıtan Arapça rakamlardan türetilmiş isimler taşır." }, examples: [
        { arabic: "الأحد", transliteration: "Al-Ahad", english: "Sunday", turkish: "Pazar" },
        { arabic: "الإثنين", transliteration: "Al-Ithnayn", english: "Monday", turkish: "Pazartesi" },
        { arabic: "الثلاثاء", transliteration: "Ath-Thulatha", english: "Tuesday", turkish: "Salı" },
      ] },
      { id: "wed-fri", heading: { en: "Wednesday to Friday", tr: "Çarşamba'dan Cuma'ya" }, content: { en: "Friday (الجمعة) is the holy day in Islam and is derived from the word 'jama'a' meaning 'to gather', as Muslims gather for Friday prayers.", tr: "Cuma (الجمعة) İslam'da kutsal gündür ve Müslümanların Cuma namazı için toplandığı 'jama'a' (toplamak) kelimesinden türetilmiştir." }, examples: [
        { arabic: "الأربعاء", transliteration: "Al-Arbi'a", english: "Wednesday", turkish: "Çarşamba" },
        { arabic: "الخميس", transliteration: "Al-Khamis", english: "Thursday", turkish: "Perşembe" },
        { arabic: "الجمعة", transliteration: "Al-Jumu'a", english: "Friday", turkish: "Cuma" },
      ] },
      { id: "saturday", heading: { en: "Saturday", tr: "Cumartesi" }, content: { en: "Saturday is the last day of the Arabic week and is called 'As-Sabt', which shares its root with the word 'Sabbath'.", tr: "Cumartesi Arapça haftanın son günüdür ve 'Sebt' olarak adlandırılır." }, examples: [
        { arabic: "السبت", transliteration: "As-Sabt", english: "Saturday", turkish: "Cumartesi" },
      ] },
    ],
    questions: [
      { type: "mcq", question: { en: "Which day does the Arabic week start with?", tr: "Arapça hafta hangi günle başlar?" }, options: ["Monday", "Saturday", "Sunday", "Friday"], correctIndex: 2 },
      { type: "fill", question: { en: "The Arabic word for Friday is ___", tr: "Cuma'nın Arapçası ___" }, answer: "الجمعة" },
      { type: "mcq", question: { en: "What is 'الخميس'?", tr: "'الخميس' nedir?" }, options: ["Wednesday", "Thursday", "Friday", "Saturday"], correctIndex: 1 },
    ],
  },

  // 4. Arabic Numbers 1-100
  {
    slug: "arabic-numbers-1-to-100",
    title: { en: "Arabic Numbers 1 to 100: A Complete Learning Guide", tr: "Arapça Sayılar 1-100: Tam Öğrenme Rehberi" },
    excerpt: { en: "Count from 1 to 100 in Arabic with clear pronunciation and practical examples.", tr: "Net telaffuz ve pratik örneklerle Arapça 1'den 100'e kadar sayın." },
    category: { en: "Arabic Basics", tr: "Arapça Temeller" },
    author: "Youssef Al-Masri",
    date: "2026-02-03",
    image: blogNumbersImg,
    sections: [
      { id: "intro", heading: { en: "Why Learn Arabic Numbers?", tr: "Neden Arapça Sayıları Öğrenmeliyiz?" }, content: { en: "Numbers are fundamental to any language. Whether you're shopping, telling time, or giving your phone number, knowing Arabic numbers is essential. The good news is that Arabic numbers follow a logical pattern that makes them relatively easy to learn.", tr: "Sayılar her dilin temeldir. Alışveriş yaparken, saat söylerken veya telefon numaranızı verirken Arapça sayıları bilmek çok önemlidir." } },
      { id: "one-ten", heading: { en: "Numbers 1-10", tr: "Sayılar 1-10" }, content: { en: "These are the building blocks of all Arabic numbers. Master these first, and the rest will follow naturally.", tr: "Bunlar tüm Arapça sayıların yapı taşlarıdır. Önce bunları öğrenin, gerisi doğal olarak gelecektir." }, examples: [
        { arabic: "واحد", transliteration: "Wahid", english: "One", turkish: "Bir" },
        { arabic: "اثنان", transliteration: "Ithnan", english: "Two", turkish: "İki" },
        { arabic: "ثلاثة", transliteration: "Thalatha", english: "Three", turkish: "Üç" },
        { arabic: "عشرة", transliteration: "Ashara", english: "Ten", turkish: "On" },
      ] },
      { id: "eleven-twenty", heading: { en: "Numbers 11-20", tr: "Sayılar 11-20" }, content: { en: "Numbers 11-19 in Arabic are compound words. They combine the unit with a form of ten. Number 20 has its own unique word.", tr: "Arapça'da 11-19 arası sayılar bileşik kelimelerdir. Birler basamağını onun bir formuyla birleştirirler." }, examples: [
        { arabic: "أحد عشر", transliteration: "Ahada ashar", english: "Eleven", turkish: "On bir" },
        { arabic: "عشرون", transliteration: "Ishrun", english: "Twenty", turkish: "Yirmi" },
      ] },
      { id: "tens", heading: { en: "Tens: 30, 40, 50... 100", tr: "Onlar: 30, 40, 50... 100" }, content: { en: "The tens in Arabic follow a clear pattern, making them easier to memorize. They all end in '-un' or '-in'.", tr: "Arapça'daki onlar net bir kalıp izler, bu da ezberlerini kolaylaştırır." }, examples: [
        { arabic: "ثلاثون", transliteration: "Thalathun", english: "Thirty", turkish: "Otuz" },
        { arabic: "خمسون", transliteration: "Khamsun", english: "Fifty", turkish: "Elli" },
        { arabic: "مئة", transliteration: "Mi'a", english: "One hundred", turkish: "Yüz" },
      ] },
    ],
    questions: [
      { type: "mcq", question: { en: "What is 'عشرون' in English?", tr: "'عشرون' İngilizce'de ne demektir?" }, options: ["Twelve", "Twenty", "Thirty", "Ten"], correctIndex: 1 },
      { type: "fill", question: { en: "The Arabic word for 'one hundred' is ___", tr: "'Yüz' sayısının Arapçası ___" }, answer: "مئة" },
      { type: "mcq", question: { en: "How do you say 'three' in Arabic?", tr: "Arapça'da 'üç' nasıl söylenir?" }, options: ["واحد", "اثنان", "ثلاثة", "أربعة"], correctIndex: 2 },
    ],
  },

  // 5. Common Arabic Phrases for Travel
  {
    slug: "arabic-phrases-for-travel",
    title: { en: "Essential Arabic Phrases for Travelers", tr: "Gezginler İçin Temel Arapça İfadeler" },
    excerpt: { en: "Traveling to an Arab country? Learn the must-know phrases for airports, hotels, and restaurants.", tr: "Bir Arap ülkesine mi seyahat ediyorsunuz? Havalimanları, oteller ve restoranlar için bilinmesi gereken ifadeleri öğrenin." },
    category: { en: "Everyday Arabic", tr: "Günlük Arapça" },
    author: "Layla Hassan",
    date: "2026-01-30",
    image: blogTravelImg,
    sections: [
      { id: "intro", heading: { en: "Travel with Confidence", tr: "Güvenle Seyahat Edin" }, content: { en: "Traveling to the Arab world is an incredible experience. Knowing even a few phrases in Arabic can transform your trip — locals appreciate the effort and you'll find doors opening everywhere. This guide covers the essential phrases every traveler should know.", tr: "Arap dünyasına seyahat etmek inanılmaz bir deneyimdir. Birkaç Arapça ifade bilmek bile seyahatinizi dönüştürebilir." } },
      { id: "greetings", heading: { en: "Greetings & Politeness", tr: "Selamlaşma ve Nezaket" }, content: { en: "First impressions matter. These greeting phrases will help you start any conversation on the right foot.", tr: "İlk izlenimler önemlidir. Bu selamlaşma ifadeleri herhangi bir konuşmayı doğru başlatmanıza yardımcı olacaktır." }, examples: [
        { arabic: "السلام عليكم", transliteration: "As-salamu alaykum", english: "Peace be upon you", turkish: "Selam üzerinize olsun" },
        { arabic: "شكراً جزيلاً", transliteration: "Shukran jazeelan", english: "Thank you very much", turkish: "Çok teşekkürler" },
        { arabic: "من فضلك", transliteration: "Min fadlak", english: "Please", turkish: "Lütfen" },
      ] },
      { id: "hotel", heading: { en: "At the Hotel", tr: "Otelde" }, content: { en: "These phrases will help you check in, ask about amenities, and communicate with hotel staff.", tr: "Bu ifadeler otel girişi yapmanıza, olanaklarla ilgili sorular sormanıza ve otel personeliyle iletişim kurmanıza yardımcı olacaktır." }, examples: [
        { arabic: "عندي حجز", transliteration: "Indi hajz", english: "I have a reservation", turkish: "Rezervasyonum var" },
        { arabic: "أين الحمّام؟", transliteration: "Ayna al-hammam?", english: "Where is the bathroom?", turkish: "Banyo nerede?" },
      ] },
      { id: "restaurant", heading: { en: "At the Restaurant", tr: "Restoranda" }, content: { en: "Food is central to Arabic hospitality. These phrases will help you order food and navigate menus with ease.", tr: "Yemek, Arap misafirperverliğinin merkezindedir. Bu ifadeler yemek sipariş etmenize ve menülerde rahatça gezinmenize yardımcı olacaktır." }, examples: [
        { arabic: "القائمة من فضلك", transliteration: "Al-qa'ima min fadlak", english: "The menu, please", turkish: "Menü lütfen" },
        { arabic: "الحساب من فضلك", transliteration: "Al-hisab min fadlak", english: "The bill, please", turkish: "Hesap lütfen" },
      ] },
    ],
    questions: [
      { type: "mcq", question: { en: "How do you say 'Thank you very much' in Arabic?", tr: "Arapça'da 'Çok teşekkürler' nasıl denir?" }, options: ["من فضلك", "شكراً جزيلاً", "السلام عليكم", "عندي حجز"], correctIndex: 1 },
      { type: "fill", question: { en: "___ عليكم (Peace be upon you)", tr: "___ عليكم (Selam üzerinize olsun)" }, answer: "السلام" },
      { type: "mcq", question: { en: "What does 'عندي حجز' mean?", tr: "'عندي حجز' ne anlama gelir?" }, options: ["Where is the hotel?", "I have a reservation", "The bill please", "Thank you"], correctIndex: 1 },
    ],
  },

  // 6. Arabic Family Members
  {
    slug: "arabic-family-members-vocabulary",
    title: { en: "Arabic Family Members: Learn Family Vocabulary", tr: "Arapça Aile Üyeleri: Aile Kelimelerini Öğrenin" },
    excerpt: { en: "Learn how to say mother, father, brother, sister, and more family words in Arabic.", tr: "Anne, baba, ağabey, kız kardeş ve daha fazla aile kelimesini Arapça olarak öğrenin." },
    category: { en: "Arabic Basics", tr: "Arapça Temeller" },
    author: "Fatima Khalil",
    date: "2026-01-28",
    image: blogFamilyImg,
    sections: [
      { id: "intro", heading: { en: "Family in Arabic Culture", tr: "Arap Kültüründe Aile" }, content: { en: "Family (عائلة - 'A'ila) is the cornerstone of Arabic culture. Arabic has very specific terms for family relationships — far more detailed than English. Understanding family vocabulary helps you connect with Arabic speakers on a deeper level.", tr: "Aile (عائلة - 'A'ila) Arap kültürünün temel taşıdır. Arapça'da aile ilişkileri için çok özel terimler vardır." } },
      { id: "immediate", heading: { en: "Immediate Family", tr: "Yakın Aile" }, content: { en: "Let's start with the closest family members — the people you see every day. These are among the first words Arabic children learn.", tr: "En yakın aile üyeleriyle başlayalım — her gün gördüğünüz kişiler." }, examples: [
        { arabic: "أُم", transliteration: "Umm", english: "Mother", turkish: "Anne" },
        { arabic: "أَب", transliteration: "Ab", english: "Father", turkish: "Baba" },
        { arabic: "أَخ", transliteration: "Akh", english: "Brother", turkish: "Erkek kardeş" },
        { arabic: "أُخت", transliteration: "Ukht", english: "Sister", turkish: "Kız kardeş" },
      ] },
      { id: "extended", heading: { en: "Extended Family", tr: "Geniş Aile" }, content: { en: "Arabic distinguishes between maternal and paternal relatives, showing the language's attention to family detail.", tr: "Arapça anne tarafı ve baba tarafı akrabaları birbirinden ayırır; bu dilin aile detaylarına olan dikkatini gösterir." }, examples: [
        { arabic: "جَد", transliteration: "Jadd", english: "Grandfather", turkish: "Büyükbaba" },
        { arabic: "جَدّة", transliteration: "Jadda", english: "Grandmother", turkish: "Büyükanne" },
        { arabic: "عَم", transliteration: "Amm", english: "Paternal uncle", turkish: "Amca" },
        { arabic: "خال", transliteration: "Khal", english: "Maternal uncle", turkish: "Dayı" },
      ] },
      { id: "sentences-fam", heading: { en: "Family Sentences", tr: "Aile Cümleleri" }, content: { en: "Here are some common sentences you can use when talking about your family.", tr: "Aileniz hakkında konuşurken kullanabileceğiniz bazı yaygın cümleler." }, examples: [
        { arabic: "عندي أخ وأختان", transliteration: "Indi akh wa ukhtayn", english: "I have a brother and two sisters", turkish: "Bir erkek kardeşim ve iki kız kardeşim var" },
      ] },
    ],
    questions: [
      { type: "mcq", question: { en: "What does 'أُم' mean?", tr: "'أُم' ne anlama gelir?" }, options: ["Father", "Brother", "Mother", "Sister"], correctIndex: 2 },
      { type: "fill", question: { en: "The Arabic word for 'grandfather' is ___", tr: "'Büyükbaba' kelimesinin Arapçası ___" }, answer: "جَد" },
      { type: "mcq", question: { en: "Which word means 'maternal uncle'?", tr: "Hangi kelime 'dayı' anlamına gelir?" }, options: ["عَم", "خال", "أَخ", "أَب"], correctIndex: 1 },
    ],
  },

  // 7. Weather Vocabulary in Arabic
  {
    slug: "weather-vocabulary-in-arabic",
    title: { en: "Weather Vocabulary in Arabic: Talk About the Weather", tr: "Arapça Hava Durumu Kelimeleri: Hava Hakkında Konuşun" },
    excerpt: { en: "Learn essential Arabic weather words and phrases to describe sunny, rainy, and cold days.", tr: "Güneşli, yağmurlu ve soğuk günleri tanımlamak için temel Arapça hava durumu kelimelerini öğrenin." },
    category: { en: "Everyday Arabic", tr: "Günlük Arapça" },
    author: "Ahmed Nasser",
    date: "2026-01-25",
    image: blogWeatherImg,
    sections: [
      { id: "intro", heading: { en: "Talking About Weather", tr: "Hava Durumu Hakkında Konuşma" }, content: { en: "Weather is a universal conversation topic. In Arabic-speaking regions, weather can vary dramatically — from scorching desert heat to cool Mediterranean breezes. Knowing weather vocabulary allows you to engage in small talk and understand forecasts.", tr: "Hava durumu evrensel bir sohbet konusudur. Arapça konuşulan bölgelerde hava durumu dramatik bir şekilde değişebilir." } },
      { id: "conditions", heading: { en: "Weather Conditions", tr: "Hava Koşulları" }, content: { en: "Here are the most common weather conditions you'll encounter in Arabic conversations.", tr: "Arapça konuşmalarda karşılaşacağınız en yaygın hava koşulları." }, examples: [
        { arabic: "مُشمِس", transliteration: "Mushmis", english: "Sunny", turkish: "Güneşli" },
        { arabic: "غائِم", transliteration: "Gha'im", english: "Cloudy", turkish: "Bulutlu" },
        { arabic: "مُمطِر", transliteration: "Mumtir", english: "Rainy", turkish: "Yağmurlu" },
        { arabic: "بارِد", transliteration: "Barid", english: "Cold", turkish: "Soğuk" },
      ] },
      { id: "phrases", heading: { en: "Weather Phrases", tr: "Hava Durumu İfadeleri" }, content: { en: "Use these complete phrases to talk about the weather in Arabic.", tr: "Arapça hava durumu hakkında konuşmak için bu tam ifadeleri kullanın." }, examples: [
        { arabic: "الجو حار اليوم", transliteration: "Al-jaw harr al-yawm", english: "The weather is hot today", turkish: "Bugün hava sıcak" },
        { arabic: "هل ستمطر غداً؟", transliteration: "Hal satumtir ghadan?", english: "Will it rain tomorrow?", turkish: "Yarın yağmur yağacak mı?" },
      ] },
    ],
    questions: [
      { type: "mcq", question: { en: "What does 'مُشمِس' mean?", tr: "'مُشمِس' ne anlama gelir?" }, options: ["Rainy", "Cloudy", "Sunny", "Cold"], correctIndex: 2 },
      { type: "fill", question: { en: "الجو ___ اليوم (The weather is hot today)", tr: "الجو ___ اليوم (Bugün hava sıcak)" }, answer: "حار" },
      { type: "mcq", question: { en: "Which word means 'cold' in Arabic?", tr: "Arapça'da 'soğuk' hangi kelimedir?" }, options: ["حار", "بارِد", "غائِم", "مُمطِر"], correctIndex: 1 },
    ],
  },

  // 8. 10 Short Duas for Ramadan
  {
    slug: "short-duas-for-ramadan",
    title: { en: "10 Short Duas for Ramadan in Arabic and English", tr: "Ramazan İçin Arapça ve İngilizce 10 Kısa Dua" },
    excerpt: { en: "Beautiful and easy-to-memorize duas for the holy month of Ramadan with transliteration.", tr: "Ramazan ayı için ezberlenmesi kolay ve güzel dualar, transliterasyonla birlikte." },
    category: { en: "Arabic Culture", tr: "Arap Kültürü" },
    author: "Layla Hassan",
    date: "2026-01-22",
    image: blogRamadanImg,
    sections: [
      { id: "intro", heading: { en: "Duas in Ramadan", tr: "Ramazan'da Dualar" }, content: { en: "Ramadan is the holiest month in Islam, a time for fasting, prayer, and reflection. Duas (supplications) are an integral part of this blessed month. Here are 10 short, powerful duas that are easy to memorize and can be recited throughout Ramadan.", tr: "Ramazan, İslam'ın en kutsal ayıdır; oruç tutma, namaz ve düşünme zamanıdır. Dualar bu mübarek ayın ayrılmaz bir parçasıdır." } },
      { id: "dua-1-3", heading: { en: "Duas 1-3: Opening & Forgiveness", tr: "Dualar 1-3: Açılış ve Bağışlanma" }, content: { en: "These duas focus on seeking forgiveness and starting your prayers with humility.", tr: "Bu dualar bağışlanma dilemeye ve namazlarınıza alçakgönüllülükle başlamaya odaklanır." }, examples: [
        { arabic: "اللهم إنك عفو تحب العفو فاعف عني", transliteration: "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni", english: "O Allah, You are forgiving and love forgiveness, so forgive me", turkish: "Allah'ım, Sen affedicisin ve affetmeyi seversin, beni affet" },
        { arabic: "رب اغفر لي وارحمني", transliteration: "Rabbighfir li warhamni", english: "My Lord, forgive me and have mercy on me", turkish: "Rabbim, beni bağışla ve bana merhamet et" },
      ] },
      { id: "dua-4-6", heading: { en: "Duas 4-6: Gratitude & Guidance", tr: "Dualar 4-6: Şükür ve Hidayet" }, content: { en: "Express your gratitude and ask for divine guidance with these beautiful supplications.", tr: "Bu güzel dualarla şükrünüzü ifade edin ve ilahi hidayet isteyin." }, examples: [
        { arabic: "اللهم اهدني فيمن هديت", transliteration: "Allahumma-hdini fiman hadayt", english: "O Allah, guide me among those You have guided", turkish: "Allah'ım, hidayet ettiklerinin arasında bana da hidayet et" },
        { arabic: "رب زدني علماً", transliteration: "Rabbi zidni 'ilma", english: "My Lord, increase me in knowledge", turkish: "Rabbim, ilmimi artır" },
      ] },
      { id: "dua-7-10", heading: { en: "Duas 7-10: Protection & Blessings", tr: "Dualar 7-10: Koruma ve Bereket" }, content: { en: "Seek protection and blessings with these essential daily duas.", tr: "Bu temel günlük dualarla koruma ve bereket isteyin." }, examples: [
        { arabic: "بسم الله الذي لا يضر مع اسمه شيء", transliteration: "Bismillahi-lladhi la yadurru ma'asmihi shay'", english: "In the name of Allah, with whose name nothing can harm", turkish: "Allah'ın adıyla, O'nun adıyla hiçbir şey zarar veremez" },
        { arabic: "اللهم بارك لنا في رمضان", transliteration: "Allahumma barik lana fi Ramadan", english: "O Allah, bless us in Ramadan", turkish: "Allah'ım, Ramazan'da bize bereket ver" },
      ] },
    ],
    questions: [
      { type: "mcq", question: { en: "What does 'رب زدني علماً' mean?", tr: "'رب زدني علماً' ne anlama gelir?" }, options: ["Forgive me", "Guide me", "Increase me in knowledge", "Protect me"], correctIndex: 2 },
      { type: "fill", question: { en: "اللهم إنك ___ تحب العفو (O Allah, You are forgiving...)", tr: "اللهم إنك ___ تحب العفو (Allah'ım, Sen affedicisin...)" }, answer: "عفو" },
      { type: "mcq", question: { en: "What is the main theme of Ramadan duas?", tr: "Ramazan dualarının ana teması nedir?" }, options: ["Travel", "Forgiveness and guidance", "Food", "Numbers"], correctIndex: 1 },
    ],
  },

  // 9. Arabic Animal Names
  {
    slug: "arabic-animal-names",
    title: { en: "Learn Animal Names in Arabic: A Fun Vocabulary Lesson", tr: "Arapça Hayvan İsimlerini Öğrenin: Eğlenceli Bir Kelime Dersi" },
    excerpt: { en: "From cats to camels — learn the Arabic names of common animals with pronunciation.", tr: "Kedilerden develere — yaygın hayvanların Arapça isimlerini telaffuzla öğrenin." },
    category: { en: "Arabic Basics", tr: "Arapça Temeller" },
    author: "Ahmed Nasser",
    date: "2026-01-20",
    image: blogAnimalsImg,
    sections: [
      { id: "intro", heading: { en: "Animals in Arabic", tr: "Arapça Hayvanlar" }, content: { en: "Animals (حيوانات - Hayawanat) are a fun and practical vocabulary topic. Arabic has rich words for animals, many of which appear in proverbs, stories, and everyday expressions. Let's explore the most common animal names.", tr: "Hayvanlar (حيوانات - Hayawanat) eğlenceli ve pratik bir kelime konusudur. Arapça'da hayvanlar için zengin kelimeler vardır." } },
      { id: "pets", heading: { en: "Domestic Animals & Pets", tr: "Evcil Hayvanlar" }, content: { en: "These are the animals you'll most commonly encounter in homes and neighborhoods across the Arab world.", tr: "Arap dünyasında evlerde ve mahallelerde en sık karşılaşacağınız hayvanlar." }, examples: [
        { arabic: "قِطّة", transliteration: "Qitta", english: "Cat", turkish: "Kedi" },
        { arabic: "كَلب", transliteration: "Kalb", english: "Dog", turkish: "Köpek" },
        { arabic: "حِصان", transliteration: "Hisan", english: "Horse", turkish: "At" },
        { arabic: "دَجاجة", transliteration: "Dajaja", english: "Chicken", turkish: "Tavuk" },
      ] },
      { id: "wild", heading: { en: "Wild & Desert Animals", tr: "Vahşi ve Çöl Hayvanları" }, content: { en: "The Arab world is famous for its desert wildlife. The camel, in particular, holds a special place in Arabic culture and language.", tr: "Arap dünyası çöl vahşi yaşamıyla ünlüdür. Deve özellikle Arap kültüründe ve dilinde özel bir yere sahiptir." }, examples: [
        { arabic: "جَمَل", transliteration: "Jamal", english: "Camel", turkish: "Deve" },
        { arabic: "أَسَد", transliteration: "Asad", english: "Lion", turkish: "Aslan" },
        { arabic: "طائِر", transliteration: "Ta'ir", english: "Bird", turkish: "Kuş" },
        { arabic: "سَمَكة", transliteration: "Samaka", english: "Fish", turkish: "Balık" },
      ] },
    ],
    questions: [
      { type: "mcq", question: { en: "What is the Arabic word for 'camel'?", tr: "'Deve'nin Arapçası nedir?" }, options: ["أَسَد", "جَمَل", "حِصان", "كَلب"], correctIndex: 1 },
      { type: "fill", question: { en: "The Arabic word for 'cat' is ___", tr: "'Kedi'nin Arapçası ___" }, answer: "قِطّة" },
      { type: "mcq", question: { en: "What does 'أَسَد' mean?", tr: "'أَسَد' ne anlama gelir?" }, options: ["Bird", "Fish", "Lion", "Horse"], correctIndex: 2 },
    ],
  },

  // 10. Body Parts in Arabic
  {
    slug: "body-parts-in-arabic",
    title: { en: "Body Parts in Arabic: Essential Vocabulary", tr: "Arapça Vücut Bölümleri: Temel Kelimeler" },
    excerpt: { en: "Learn the names of body parts in Arabic — essential for health, fitness, and everyday conversations.", tr: "Arapça vücut bölümlerinin isimlerini öğrenin — sağlık ve günlük konuşmalar için temel bilgi." },
    category: { en: "Arabic Basics", tr: "Arapça Temeller" },
    author: "Fatima Khalil",
    date: "2026-01-18",
    image: blogAnimalsImg,
    sections: [
      { id: "intro", heading: { en: "Why Learn Body Parts?", tr: "Neden Vücut Bölümlerini Öğrenmeliyiz?" }, content: { en: "Knowing body part vocabulary is crucial for medical situations, describing people, and understanding common Arabic expressions. Many Arabic idioms use body part words.", tr: "Vücut bölümleri kelimelerini bilmek tıbbi durumlar, insanları tanımlama ve yaygın Arapça ifadeleri anlama için çok önemlidir." } },
      { id: "head", heading: { en: "Head & Face", tr: "Baş ve Yüz" }, content: { en: "Let's start with the head and facial features — these words come up frequently in descriptions.", tr: "Baş ve yüz özellikleriyle başlayalım — bu kelimeler tanımlarda sıkça kullanılır." }, examples: [
        { arabic: "رَأس", transliteration: "Ra's", english: "Head", turkish: "Baş" },
        { arabic: "عَين", transliteration: "Ayn", english: "Eye", turkish: "Göz" },
        { arabic: "أَنف", transliteration: "Anf", english: "Nose", turkish: "Burun" },
        { arabic: "فَم", transliteration: "Fam", english: "Mouth", turkish: "Ağız" },
      ] },
      { id: "body", heading: { en: "Upper & Lower Body", tr: "Üst ve Alt Vücut" }, content: { en: "These body parts are essential for everyday communication, especially when visiting a doctor.", tr: "Bu vücut bölümleri, özellikle doktora giderken günlük iletişim için çok önemlidir." }, examples: [
        { arabic: "يَد", transliteration: "Yad", english: "Hand", turkish: "El" },
        { arabic: "قَدَم", transliteration: "Qadam", english: "Foot", turkish: "Ayak" },
        { arabic: "قَلب", transliteration: "Qalb", english: "Heart", turkish: "Kalp" },
      ] },
    ],
    questions: [
      { type: "mcq", question: { en: "What does 'عَين' mean?", tr: "'عَين' ne anlama gelir?" }, options: ["Nose", "Eye", "Mouth", "Head"], correctIndex: 1 },
      { type: "fill", question: { en: "The Arabic word for 'heart' is ___", tr: "'Kalp'in Arapçası ___" }, answer: "قَلب" },
      { type: "mcq", question: { en: "Which word means 'hand' in Arabic?", tr: "Arapça'da 'el' hangi kelimedir?" }, options: ["قَدَم", "رَأس", "يَد", "فَم"], correctIndex: 2 },
    ],
  },
];
