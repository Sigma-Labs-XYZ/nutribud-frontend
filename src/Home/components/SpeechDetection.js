import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import { SpeechProvider } from "@speechly/react-client";
import IconButton from "@mui/material/IconButton";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import { Alert } from "@mui/material";
import { useState } from "react";

export default function SpeechDetection(props) {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  //   const appId = "1aa6b083-998a-424b-9ee4-c6246819b72f";
  //   const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
  //   SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);
  if (!browserSupportsSpeechRecognition) {
    return <Alert>Browser doesn't support speech recognition.</Alert>;
  }
  async function handleMicClick() {
    if (listening) {
      props.updateTranscipt(transcript);
      SpeechRecognition.stopListening();
      resetTranscript();
    } else {
      await SpeechRecognition.startListening({ continuous: true });
    }
  }
  return (
    <IconButton aria-label="mic" color="primary" onClick={handleMicClick}>
      {listening ? <MicIcon /> : <MicOffIcon />}
    </IconButton>
  );
}
