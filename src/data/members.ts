import raw from './members.json';
import type { ChapterMember } from '../types';

export const MEMBERS: ChapterMember[] = raw as ChapterMember[];

export function searchMembers(q: string, limit = 8): ChapterMember[] {
  const needle = q.trim().toLowerCase();
  if (!needle) return [];
  return MEMBERS
    .filter((m) => m.name.toLowerCase().includes(needle))
    .slice(0, limit);
}
