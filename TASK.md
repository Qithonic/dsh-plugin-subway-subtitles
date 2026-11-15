# TASK.md - dsh-plugin-subway-subtitles

> DeepSeek Harness plugin: Real-time Chinese (and future English) live subtitles for mobile video watching.

## @Claude (Backend / Core / Tests in src/runtime/ & 	ests/)
- [ ] Implement real-time audio stream chunking & VAD (Voice Activity Detection)
- [ ] Integrate streaming Chinese ASR (e.g. Sherpa-onnx / SenseVoice) with low-latency output
- [ ] Design language switch interface (CN first, extensible to EN/bilingual)
- [ ] Add Vitest unit tests for subtitle timing & chunk pipeline

## @Antigravity (Frontend UI / Mobile UX / Preview in src/client/)
- [ ] Build floating subtitle overlay UI (adjustable font size, opacity, position)
- [ ] Build audio capture toggle, status indicator & scrollable transcript history
- [ ] Verify low-latency subtitle rendering in browser preview
