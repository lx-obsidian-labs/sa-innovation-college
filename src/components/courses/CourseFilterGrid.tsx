"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";

interface CourseItem {
  title: string;
  slug: string;
  category: string;
  duration: string;
  nqf?: string;
  mode: string;
  description: string;
}

interface CategoryGroup {
  category: string;
  shortLabel: string;
  courses: CourseItem[];
}

interface CourseFilterGridProps {
  groups: CategoryGroup[];
  categoryImages: Record<string, string>;
}

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-3 w-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-3 w-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

function FilterBar({
  allLabels,
  activeCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange,
}: {
  allLabels: string[];
  activeCategory: string;
  searchQuery: string;
  onCategoryChange: (label: string) => void;
  onSearchChange: (q: string) => void;
}) {
  return (
    <div className="border-b border-[var(--color-gray-200)] bg-[var(--color-surface-raised)] rounded-xl shadow-sm mb-8">
      <div className="p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1 max-w-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-gray-400)] pointer-events-none"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full rounded-xl border border-[var(--color-gray-200)] bg-white py-2.5 pl-10 pr-4 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-gray-400)] transition-all duration-200 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/10"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)] hover:text-[var(--color-gray-600)] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {allLabels.map((label) => (
              <button
                key={label}
                onClick={() => onCategoryChange(label)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-all duration-200 ${
                  activeCategory === label
                    ? "bg-[var(--color-primary)] text-white shadow-sm"
                    : "bg-white border border-[var(--color-border)] text-[var(--color-gray-600)] hover:bg-[var(--color-gray-50)] hover:text-[var(--color-gray-900)] hover:border-[var(--color-primary)]/30"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="text-center py-16">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-gray-100)]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-[var(--color-gray-400)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>
      <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">No courses found</h3>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Try adjusting your search or filters</p>
      <button
        onClick={onClear}
        className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-primary-dark)]"
      >
        Clear Filters
      </button>
    </div>
  );
}

function LoadMoreButton({ remaining, onLoad }: { remaining: number; onLoad: () => void }) {
  return (
    <div className="mt-8 text-center">
      <button
        onClick={onLoad}
        className="inline-flex items-center gap-2 rounded-lg border-2 border-[var(--color-primary)]/20 px-6 py-3 text-sm font-semibold text-[var(--color-primary)] transition-all hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
      >
        Show {Math.min(9, remaining)} More Courses
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </div>
  );
}

function CourseCard({ course, imageSrc, gradient }: { course: CourseItem; imageSrc: string; gradient: string }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group relative flex flex-col rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
    >
      <div className="relative h-44 overflow-hidden bg-[var(--color-gray-200)]">
        <img
          src={imageSrc}
          alt=""
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${gradient}`} />
        <span className="absolute top-3 left-3 inline-flex items-center rounded-md bg-white/20 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg border border-white/20">
          {course.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-bold text-[var(--color-gray-900)] leading-snug transition-colors duration-200 group-hover:text-[var(--color-primary)] line-clamp-2 mb-2">
          {course.title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--color-gray-500)] line-clamp-2 mb-3">
          {course.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="inline-flex items-center gap-1 rounded-lg bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] px-2 py-1 text-[11px] font-medium text-[var(--color-gray-600)]">
            <ClockIcon />
            {course.duration}
          </span>
          {course.nqf && (
            <span className="inline-flex items-center gap-1 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 px-2 py-1 text-[11px] font-medium text-[var(--color-primary)]">
              {course.nqf}
            </span>
          )}
          <span className="inline-flex items-center gap-1 rounded-lg bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] px-2 py-1 text-[11px] font-medium text-[var(--color-gray-600)]">
            <UserIcon />
            {course.mode}
          </span>
        </div>
        <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] group/link">
          <span>Learn More</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

const CARD_GRADIENTS = [
  "from-blue-900/80 via-blue-800/60 to-transparent",
  "from-purple-900/80 via-purple-800/60 to-transparent",
  "from-amber-900/80 via-amber-800/60 to-transparent",
  "from-emerald-900/80 via-emerald-800/60 to-transparent",
  "from-red-900/80 via-red-800/60 to-transparent",
  "from-orange-900/80 via-orange-800/60 to-transparent",
  "from-teal-900/80 via-teal-800/60 to-transparent",
  "from-indigo-900/80 via-indigo-800/60 to-transparent",
  "from-rose-900/80 via-rose-800/60 to-transparent",
];

export default function CourseFilterGrid({ groups, categoryImages }: CourseFilterGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  const allLabels = useMemo(() => ["All", ...groups.map((g) => g.shortLabel)], [groups]);

  const allCourses = useMemo(() => groups.flatMap((g) => g.courses), [groups]);

  const filteredAll = useMemo(() => {
    return allCourses.filter((c) => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
      );
    });
  }, [allCourses, searchQuery]);

  const filteredGroups = useMemo(() => {
    return groups.map((group) => ({
      ...group,
      courses: group.courses.filter((c) => {
        const matchesSearch =
          !searchQuery ||
          c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch && (activeCategory === "All" || group.shortLabel === activeCategory);
      }),
    })).filter((g) => g.courses.length > 0);
  }, [groups, activeCategory, searchQuery]);

  useEffect(() => { setVisibleCount(12); }, [activeCategory, searchQuery]);

  const getGradient = (index: number) => CARD_GRADIENTS[index % CARD_GRADIENTS.length];
  const getImage = (course: CourseItem) => {
    const group = groups.find((g) => g.courses.some((c) => c.slug === course.slug));
    return categoryImages[group?.category || ""] || categoryImages["default"];
  };

  const handleCategoryChange = (label: string) => {
    setActiveCategory(label);
    setSearchQuery("");
  };

  const handleClear = () => {
    setSearchQuery("");
    setActiveCategory("All");
  };

  return (
    <div>
      <FilterBar
        allLabels={allLabels}
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onCategoryChange={handleCategoryChange}
        onSearchChange={setSearchQuery}
      />

      {activeCategory !== "All" && filteredGroups.length > 0 && (
        <div>
          {filteredGroups.map((group) => (
            <div key={group.category} className="mb-10 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="h-10 w-10 rounded-lg flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: "var(--color-primary)", color: "white" }}
                >
                  {group.shortLabel.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--color-text-primary)]">{group.category}</h2>
                  <p className="text-sm text-[var(--color-text-muted)]">{group.courses.length} course{group.courses.length !== 1 ? "s" : ""}</p>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.courses.slice(0, visibleCount).map((course, idx) => (
                  <CourseCard key={course.slug} course={course} imageSrc={getImage(course)} gradient={getGradient(idx)} />
                ))}
              </div>
              {group.courses.length > visibleCount && (
                <LoadMoreButton remaining={group.courses.length - visibleCount} onLoad={() => setVisibleCount((prev) => prev + 12)} />
              )}
            </div>
          ))}
        </div>
      )}

      {activeCategory === "All" && (
        <div>
          {filteredAll.length === 0 && <EmptyState onClear={handleClear} />}
          {filteredAll.length > 0 && (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredAll.slice(0, visibleCount).map((course, idx) => (
                  <CourseCard key={course.slug} course={course} imageSrc={getImage(course)} gradient={getGradient(idx)} />
                ))}
              </div>
              {filteredAll.length > visibleCount && (
                <LoadMoreButton remaining={filteredAll.length - visibleCount} onLoad={() => setVisibleCount((prev) => prev + 12)} />
              )}
            </>
          )}
        </div>
      )}

      {activeCategory !== "All" && filteredGroups.length === 0 && <EmptyState onClear={handleClear} />}
    </div>
  );
}
