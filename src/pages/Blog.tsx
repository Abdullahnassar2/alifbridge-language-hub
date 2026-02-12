import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: { en: "5 Tips to Learn Arabic Faster", ar: "٥ نصائح لتعلم العربية بشكل أسرع", tr: "Arapça'yı Daha Hızlı Öğrenmek İçin 5 İpucu" },
    excerpt: {
      en: "Discover proven strategies that will accelerate your Arabic learning journey, from immersion techniques to daily practice habits.",
      ar: "اكتشف استراتيجيات مثبتة لتسريع رحلة تعلم العربية، من تقنيات الانغماس إلى عادات الممارسة اليومية.",
      tr: "Daldırma tekniklerinden günlük pratik alışkanlıklarına kadar Arapça öğrenme yolculuğunuzu hızlandıracak kanıtlanmış stratejiler keşfedin.",
    },
    date: "2026-02-10",
    category: { en: "Tips", ar: "نصائح", tr: "İpuçları" },
  },
  {
    title: { en: "Understanding Arabic Grammar Basics", ar: "فهم أساسيات القواعد العربية", tr: "Arapça Gramer Temellerini Anlamak" },
    excerpt: {
      en: "A comprehensive guide to Arabic sentence structure, noun cases, and verb forms for beginners.",
      ar: "دليل شامل لبنية الجملة العربية وحالات الأسماء وأشكال الأفعال للمبتدئين.",
      tr: "Yeni başlayanlar için Arapça cümle yapısı, isim halleri ve fiil formlarına kapsamlı bir rehber.",
    },
    date: "2026-02-05",
    category: { en: "Grammar", ar: "قواعد", tr: "Gramer" },
  },
  {
    title: { en: "Arabic Calligraphy: Art Meets Language", ar: "الخط العربي: حيث يلتقي الفن باللغة", tr: "Arap Kaligrafisi: Sanat Dille Buluşuyor" },
    excerpt: {
      en: "Explore the beautiful world of Arabic calligraphy and how it can deepen your understanding of the language.",
      ar: "استكشف عالم الخط العربي الجميل وكيف يمكن أن يعمق فهمك للغة.",
      tr: "Arap kaligrafisinin güzel dünyasını keşfedin ve dilinizi nasıl derinleştirebileceğini öğrenin.",
    },
    date: "2026-01-28",
    category: { en: "Culture", ar: "ثقافة", tr: "Kültür" },
  },
];

const Blog = () => {
  const { t, language } = useLanguage();

  return (
    <div className="relative z-10 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-display text-4xl font-bold text-center text-foreground mb-2">
          {t("blog.title")}
        </h1>
        <p className="text-center text-muted-foreground mb-12">{t("blog.subtitle")}</p>

        <div className="space-y-6">
          {blogPosts.map((post, i) => (
            <article
              key={i}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.1}s both` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full gradient-gold text-accent-foreground">
                  {post.category[language]}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
              </div>
              <h2 className="font-display text-xl font-bold text-foreground mb-2">
                {post.title[language]}
              </h2>
              <p className="text-muted-foreground text-sm mb-4">{post.excerpt[language]}</p>
              <button className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1">
                {t("blog.readmore")} <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
