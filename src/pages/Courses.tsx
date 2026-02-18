import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Lock, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import AlphabetLearning from "@/components/AlphabetLearning";
import GreetingsLearning from "@/components/GreetingsLearning";

const courses = [
  {
    level: "beginner",
    lessons: [
      "Arabic Alphabet (أ ب ت)",
      "Basic Greetings",
      "Numbers 1-20",
      "Simple Sentences",
      "Common Nouns",
      "Colors & Shapes",
      "Family Vocabulary",
      "Days & Months",
      "Food & Drink",
      "Basic Verbs",
      "Pronouns",
      "Review & Test",
    ],
    unlocked: true,
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    level: "intermediate",
    lessons: [
      "Verb Conjugation",
      "Past Tense",
      "Present Tense",
      "Future Tense",
      "Adjective Agreement",
      "Comparatives",
      "Prepositions",
      "Directions",
      "Shopping Dialogues",
      "Travel Vocabulary",
      "Formal vs Informal",
      "Reading Practice",
      "Writing Practice",
      "Conversation Skills",
      "Cultural Context",
      "Media Arabic",
      "News Vocabulary",
      "Review & Test",
    ],
    unlocked: false,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    level: "advanced",
    lessons: [
      "Classical Arabic Intro",
      "Poetry & Literature",
      "Advanced Grammar",
      "Rhetorical Devices",
      "Dialect Overview",
      "Egyptian Arabic",
      "Levantine Arabic",
      "Gulf Arabic",
      "Business Arabic",
      "Legal Arabic",
      "Academic Writing",
      "Debate & Discussion",
      "Translation Skills",
      "Interpreting",
      "Creative Writing",
      "Research Arabic",
      "Presentation Skills",
      "Advanced Conversation",
      "Idiomatic Expressions",
      "Proverbs & Wisdom",
      "Modern Literature",
      "Journalism Arabic",
      "Revision",
      "Final Examination",
    ],
    unlocked: false,
    gradient: "from-purple-500 to-purple-600",
  },
];

const ALPHABET_LESSON = "Arabic Alphabet (أ ب ت)";
const GREETINGS_LESSON = "Basic Greetings";
const EXPANDABLE_LESSONS = [ALPHABET_LESSON, GREETINGS_LESSON];

const Courses = () => {
  const { t } = useLanguage();
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null);

  const handleLessonClick = (lesson: string, unlocked: boolean) => {
    if (!unlocked) return;
    if (EXPANDABLE_LESSONS.includes(lesson)) {
      setExpandedLesson(expandedLesson === lesson ? null : lesson);
    }
  };

  return (
    <div className="relative z-10 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="font-display text-4xl font-bold text-center text-foreground mb-2">
          {t("courses.title")}
        </h1>
        <p className="text-center text-muted-foreground mb-12">{t("courses.subtitle")}</p>

        <div className="space-y-10">
          {courses.map((course, ci) => (
            <div key={ci} className="rounded-2xl bg-card border border-border overflow-hidden" style={{ animation: `fade-in-up 0.6s ease-out ${ci * 0.15}s both` }}>
              <div className={`p-6 bg-gradient-to-r ${course.gradient} text-white flex items-center justify-between`}>
                <div>
                  <h2 className="font-display text-2xl font-bold">
                    {t(`courses.${course.level}`)}
                  </h2>
                  <p className="text-sm opacity-90 mt-1">
                    {t(`courses.${course.level}.desc`)}
                  </p>
                </div>
                <span className="text-sm font-medium opacity-80">
                  {course.lessons.length} {t("courses.lessons")}
                </span>
              </div>
              <div className="p-6">
                {!course.unlocked && (
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4 bg-secondary rounded-lg p-3">
                    <Lock className="w-4 h-4" />
                    {t("courses.locked")}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {course.lessons.map((lesson, li) => {
                    const isExpandable = EXPANDABLE_LESSONS.includes(lesson) && course.unlocked;
                    const isExpanded = expandedLesson === lesson;
                    return (
                      <div
                        key={li}
                        onClick={() => handleLessonClick(lesson, course.unlocked)}
                        className={`flex items-center gap-2 p-3 rounded-lg border text-sm ${
                          course.unlocked
                            ? isExpandable
                              ? `border-accent/50 ${isExpanded ? "bg-accent/5" : "hover:bg-secondary"} cursor-pointer transition-colors`
                              : "border-border hover:bg-secondary cursor-pointer transition-colors"
                            : "border-border/50 opacity-50"
                        }`}
                      >
                        {course.unlocked ? (
                          <BookOpen className="w-4 h-4 text-accent flex-shrink-0" />
                        ) : (
                          <Lock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        )}
                        <span className="text-foreground flex-1">{lesson}</span>
                        {isExpandable && (
                          isExpanded
                            ? <ChevronUp className="w-4 h-4 text-accent flex-shrink-0" />
                            : <ChevronDown className="w-4 h-4 text-accent flex-shrink-0" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Inline Alphabet Learning */}
                {course.unlocked && expandedLesson === ALPHABET_LESSON && course.level === "beginner" && (
                  <div className="mt-4 border-t border-border pt-4">
                    <AlphabetLearning onClose={() => setExpandedLesson(null)} />
                  </div>
                )}

                {/* Inline Greetings Learning */}
                {course.unlocked && expandedLesson === GREETINGS_LESSON && course.level === "beginner" && (
                  <div className="mt-4 border-t border-border pt-4">
                    <GreetingsLearning onClose={() => setExpandedLesson(null)} />
                  </div>
                )}

                {course.unlocked && (
                  <a
                    href="/learn"
                    className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg gradient-gold text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    {t("courses.start")}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
