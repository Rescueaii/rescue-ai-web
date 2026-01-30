import { Case } from '@/lib/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PriorityBadge } from './PriorityBadge';
import { StatusBadge } from './StatusBadge';
import { formatDistanceToNow } from 'date-fns';
import { MapPin, User, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CaseCardProps {
  caseData: Case;
  onClick: () => void;
  isSelected?: boolean;
}

export function CaseCard({ caseData, onClick, isSelected }: CaseCardProps) {
  const isP1 = caseData.priority === 'P1';

  return (
    <Card
      onClick={onClick}
      className={cn(
        'case-card cursor-pointer',
        isSelected && 'ring-2 ring-primary',
        isP1 && caseData.status === 'active' && 'pulse-critical border-priority-p1'
      )}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <PriorityBadge priority={caseData.priority} />
            <StatusBadge status={caseData.status} />
            {caseData.escalation_needed && (
              <AlertTriangle className="h-4 w-4 text-destructive" />
            )}
          </div>
          <span className="text-xs text-muted-foreground">
            {formatDistanceToNow(new Date(caseData.created_at), { addSuffix: true })}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="capitalize font-bold text-foreground tracking-tight">{caseData.category}</span>
            <span className="opacity-40">•</span>
            <span className="font-medium bg-muted px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wide">{caseData.language}</span>
          </div>
          
          {caseData.location && (
            <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
              <span className="line-clamp-2">{caseData.location}</span>
            </div>
          )}

          {caseData.assigned_to && (
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <User className="h-3.5 w-3.5" />
              <span>{caseData.assigned_to}</span>
            </div>
          )}

          {caseData.last_message && (
            <p className="text-xs text-muted-foreground/80 line-clamp-2 mt-2 italic leading-relaxed">
              "{caseData.last_message}"
            </p>
          )}

          <div className="flex items-center justify-between mt-2 pt-2 border-t">
            <span className="text-xs text-muted-foreground">
              Urgency: {caseData.urgency_score}/100
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
