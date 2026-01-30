import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface VoiceRecorderProps {
  onTranscription: (text: string) => void;
  disabled?: boolean;
  language: string;
}

export function VoiceRecorder({ onTranscription, disabled, language }: VoiceRecorderProps) {
  const [isManualListening, setIsManualListening] = useState(false);
  
  // Map language codes to BCP 47 tags
  const languageMap: Record<string, string> = {
    en: 'en-US',
    hi: 'hi-IN',
    te: 'te-IN',
    ta: 'ta-IN'
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();

  // Sync manual state with hook state occasionally, but let manual override for toggle
  useEffect(() => {
    if (listening) setIsManualListening(true);
    else setIsManualListening(false);
  }, [listening]);

  // Debugging logs for Vercel
  useEffect(() => {
    console.log('VoiceRecorder Engine Status:', { 
      browserSupportsSpeechRecognition, 
      isMicrophoneAvailable, 
      listening,
      isManualListening,
      language
    });
  }, [browserSupportsSpeechRecognition, isMicrophoneAvailable, listening, isManualListening, language]);

  // Update transcription as it comes in
  useEffect(() => {
    if (transcript) {
      console.log('Transcript received:', transcript);
      onTranscription(transcript);
    }
  }, [transcript, onTranscription]);

  if (!browserSupportsSpeechRecognition) {
    console.warn('Speech recognition not supported in this browser.');
    return null;
  }

  const toggleRecording = async () => {
    try {
      if (isManualListening || listening) {
        console.log('Forcing stop...');
        await SpeechRecognition.stopListening();
        setIsManualListening(false);
        toast.success("Stopped listening");
      } else {
        console.log('Requesting start...');
        
        if (!isMicrophoneAvailable) {
          toast.error("Microphone access is required");
          return;
        }
        
        resetTranscript();
        setIsManualListening(true);
        
        await SpeechRecognition.startListening({ 
          continuous: true, 
          language: languageMap[language] || 'en-US' 
        });
        toast.info("Listening... Tap again to stop.");
      }
    } catch (error) {
      console.error('Speech Recognition Error:', error);
      setIsManualListening(false);
      toast.error("Voice recognition failed to start.");
    }
  };

  const active = isManualListening || listening;

  return (
    <Button
      type="button"
      variant={active ? 'destructive' : 'outline'}
      size="icon"
      onClick={toggleRecording}
      disabled={disabled}
      className={cn(
        'shrink-0 transition-all duration-200',
        active && 'animate-pulse ring-2 ring-destructive ring-offset-2'
      )}
      title={active ? "Stop recording" : "Start voice recording"}
    >
      {active ? (
        <MicOff className="h-4 w-4" />
      ) : (
        <Mic className="h-4 w-4" />
      )}
      <span className="sr-only">{active ? 'Stop' : 'Start'}</span>
    </Button>
  );
}
