import { EMERGENCY_TYPES, SupportedLanguage } from '@/lib/types';

interface EmergencyButtonsProps {
  language: SupportedLanguage;
  onSelect: (message: string) => void;
}

export function EmergencyButtons({ language, onSelect }: EmergencyButtonsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {EMERGENCY_TYPES.map((emergency) => (
        <button
          key={emergency.id}
          onClick={() => onSelect(emergency.message[language])}
          className="emergency-btn"
        >
          <span className="text-2xl md:text-3xl">{emergency.icon}</span>
          <span className="text-xs md:text-sm font-medium text-center">
            {emergency.label[language]}
          </span>
        </button>
      ))}
    </div>
  );
}
