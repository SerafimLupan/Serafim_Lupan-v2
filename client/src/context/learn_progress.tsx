import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { UserProgress } from "@/data_learn";

interface ProgressContextValue {
  progress: UserProgress;
  completeDay: (day: number) => void;
  isDayCompleted: (day: number) => boolean;
  isDayUnlocked: (day: number) => boolean;
  completionPercentage: number;
  resetProgress: () => void;
  totalCompleted: number;
}

const DEFAULT_PROGRESS: UserProgress = {
  completedDays: [],
  lastActiveDate: null,
  streak: 0,
  totalMinutes: 0,
};

const STORAGE_KEY = "cyber90_progress";

const ProgressContext = createContext<ProgressContextValue | null>(null);

function calculateStreak(progress: UserProgress): number {
  if (!progress.lastActiveDate) return 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const last = new Date(progress.lastActiveDate);
  last.setHours(0, 0, 0, 0);
  const diff = Math.floor((today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
  if (diff <= 1) return progress.streak;
  return 0;
}

export function Cyber90ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as UserProgress;
        return { ...parsed, streak: calculateStreak(parsed) };
      }
    } catch {}
    return DEFAULT_PROGRESS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {}
  }, [progress]);

  const completeDay = useCallback((day: number) => {
    setProgress((prev) => {
      if (prev.completedDays.includes(day)) return prev;
      const today = new Date().toISOString().split("T")[0];
      const lastDate = prev.lastActiveDate;
      let newStreak = prev.streak;
      if (lastDate) {
        const last = new Date(lastDate);
        last.setHours(0, 0, 0, 0);
        const todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);
        const diff = Math.floor((todayDate.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
        if (diff === 0) newStreak = prev.streak;
        else if (diff === 1) newStreak = prev.streak + 1;
        else newStreak = 1;
      } else {
        newStreak = 1;
      }
      return {
        completedDays: [...prev.completedDays, day],
        lastActiveDate: today,
        streak: newStreak,
        totalMinutes: prev.totalMinutes + 30,
      };
    });
  }, []);

  const isDayCompleted = useCallback(
    (day: number) => progress.completedDays.includes(day),
    [progress.completedDays]
  );

  const isDayUnlocked = useCallback(
    (day: number) => {
      if (day === 1) return true;
      return progress.completedDays.includes(day - 1) || progress.completedDays.includes(day);
    },
    [progress.completedDays]
  );

  const completionPercentage = Math.round((progress.completedDays.length / 90) * 100);

  const resetProgress = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setProgress(DEFAULT_PROGRESS);
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        completeDay,
        isDayCompleted,
        isDayUnlocked,
        completionPercentage,
        resetProgress,
        totalCompleted: progress.completedDays.length,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useCyber90Progress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useCyber90Progress must be used within Cyber90ProgressProvider");
  return ctx;
}
