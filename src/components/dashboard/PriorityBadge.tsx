import { Badge } from '@/components/ui/badge';
import { CasePriority } from '@/lib/types';
import { cn } from '@/lib/utils';

interface PriorityBadgeProps {
  priority: CasePriority;
  className?: string;
}

export function PriorityBadge({ priority, className }: PriorityBadgeProps) {
  const priorityInfo: Record<CasePriority, { class: string; emoji: string; label: string }> = {
    P1: { class: 'priority-p1', emoji: '🔴', label: 'Red' },
    P2: { class: 'priority-p2', emoji: '🟠', label: 'Orange' },
    P3: { class: 'priority-p3', emoji: '🟡', label: 'Yellow' },
    P4: { class: 'priority-p4', emoji: '🟢', label: 'Green' },
  };

  const info = priorityInfo[priority || 'P4'];

  return (
    <Badge className={cn('font-bold flex items-center gap-1.5 px-2 py-0.5', info.class, className)}>
      <span>{info.emoji}</span>
      <span>{priority}</span>
      <span className="opacity-90 ml-0.5">{info.label}</span>
    </Badge>
  );
}
