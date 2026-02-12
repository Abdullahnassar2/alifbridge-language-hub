import { useLanguage } from "@/contexts/LanguageContext";
import { Trophy, Flame, Star, BookOpen, CheckCircle } from "lucide-react";

const Dashboard = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Flame, label: t("dashboard.streak"), value: "7" },
    { icon: Star, label: t("dashboard.points"), value: "1,240" },
    { icon: BookOpen, label: t("dashboard.ongoing"), value: "2" },
    { icon: CheckCircle, label: t("dashboard.completed"), value: "1" },
  ];

  const courses = [
    { name: t("courses.beginner"), progress: 85, status: "ongoing" },
    { name: t("courses.intermediate"), progress: 30, status: "ongoing" },
    { name: t("courses.advanced"), progress: 0, status: "locked" },
  ];

  const achievements = [
    { icon: "🎯", title: "First Quiz", desc: "Completed your first quiz" },
    { icon: "🔥", title: "7-Day Streak", desc: "Practiced 7 days in a row" },
    { icon: "📚", title: "Alphabet Master", desc: "Learned all Arabic letters" },
    { icon: "⭐", title: "1000 Points", desc: "Earned 1000+ points" },
  ];

  return (
    <div className="relative z-10 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">
          {t("dashboard.title")}
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5 text-center" style={{ animation: `fade-in-up 0.5s ease-out ${i * 0.1}s both` }}>
              <s.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Courses */}
          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-4">{t("dashboard.courses")}</h2>
            <div className="space-y-4">
              {courses.map((c, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-foreground text-sm">{c.name}</span>
                    <span className="text-xs text-muted-foreground">{c.progress}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="h-2 rounded-full gradient-gold transition-all"
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-4">{t("dashboard.achievements")}</h2>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((a, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                  <span className="text-3xl">{a.icon}</span>
                  <p className="font-semibold text-foreground text-sm mt-2">{a.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
