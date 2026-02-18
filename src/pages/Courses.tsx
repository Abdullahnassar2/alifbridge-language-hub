import { useState, useEffect, useCallback, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Lock, BookOpen, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
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

const PROGRESS_KEY = "course_progress";

const getCompletedLessons = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "[]");
  } catch { return []; }
};

const markLessonComplete = (lesson: string) => {
  const completed = getCompletedLessons();
  if (!completed.includes(lesson)) {
    completed.push(lesson);
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(completed));
  }
};

const Courses = () => {
  const { t } = useLanguage();
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const lessonRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    setCompletedLessons(getCompletedLessons());
  }, [expandedLesson]);

  const handleLessonClick = (lesson: string, unlocked: boolean) => {
    if (!unlocked) return;
    if (EXPANDABLE_LESSONS.includes(lesson)) {
      setExpandedLesson(expandedLesson === lesson ? null : lesson);
    }
  };

  const handleLessonComplete = useCallback((lesson: string) => {
    markLessonComplete(lesson);
    setCompletedLessons(getCompletedLessons());
    setExpandedLesson(null);
  }, []);

  const handleStartCourse = (course: typeof courses[0]) => {
    if (!course.unlocked) return;
    const allDone = course.lessons.every(l => completedLessons.includes(l));
    if (allDone) {
      setExpandedLesson(null);
      return;
    }
    const nextLesson = course.lessons.find(l => !completedLessons.includes(l));
    if (nextLesson && EXPANDABLE_LESSONS.includes(nextLesson)) {
      setExpandedLesson(nextLesson);
      setTimeout(() => {
        lessonRefs.current[nextLesson]?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
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
          {courses.map((course, ci) => {
            const allDone = course.unlocked && course.lessons.every(l => completedLessons.includes(l));
            return (
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
                    const isDone = completedLessons.includes(lesson);
                    return (
                      <div
                        key={li}
                        ref={(el) => { lessonRefs.current[lesson] = el; }}
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
                          isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <BookOpen className="w-4 h-4 text-accent flex-shrink-0" />
                          )
                        ) : (
                          <Lock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        )}
                        <span className={`flex-1 ${isDone ? "text-muted-foreground line-through" : "text-foreground"}`}>{lesson}</span>
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
                    <AlphabetLearning onClose={() => handleLessonComplete(ALPHABET_LESSON)} />
                  </div>
                )}

                {/* Inline Greetings Learning */}
                {course.unlocked && expandedLesson === GREETINGS_LESSON && course.level === "beginner" && (
                  <div className="mt-4 border-t border-border pt-4">
                    <GreetingsLearning onClose={() => handleLessonComplete(GREETINGS_LESSON)} />
                  </div>
                )}

                {course.unlocked && (
                  allDone ? (
                    <div className="mt-6 flex items-center gap-2 text-emerald-600 font-semibold">
                      <CheckCircle2 className="w-5 h-5" />
                      {t("courses.completed") || "Level Completed! 🎉"}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleStartCourse(course)}
                      className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg gradient-gold text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
                    >
                      {t("courses.start")}
                    </button>
                  )
                )}
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
