import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import IconButton from "@mui/material/IconButton";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import { Alert, Tooltip } from "@mui/material";

export default function SpeechDetection(props) {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <Alert>Browser doesn't support speech recognition.</Alert>;
  }

  async function handleMicOff() {
    SpeechRecognition.stopListening();
    props.updateTranscipt(transcript);
  }
  async function handleMicOn() {
    resetTranscript();
    await SpeechRecognition.startListening({ continuous: true });
  }
  return (
    <Tooltip title="Press and hold icon">
      <IconButton
        aria-label="mic"
        color="primary"
        onMouseDown={handleMicOn}
        onTouchStart={handleMicOn}
        onMouseUp={handleMicOff}
        onTouchEnd={handleMicOff}
      >
        {listening ? <MicIcon /> : <MicOffIcon />}
      </IconButton>
    </Tooltip>
  );
}
