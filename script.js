import { createChat } from "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";

createChat({
  webhookUrl:
    "https://colsecpjeifran.onrender.com/webhook/3f2b597e-7261-46e4-b926-149ed0223541/chat",
  webhookConfig: {
    method: "POST",
    headers: {},
  },
  target: "#n8n-chat",
  mode: "fullscreen",
  chatInputKey: "chatInput",
  chatSessionKey: "sessionId",
  loadPreviousSession: true,
  metadata: {},
  showWelcomeScreen: false,
  defaultLanguage: "es",
  initialMessages: ["Soy el Profe Mercho! 👋", "En qué puedo ayudarte hoy?"],
  i18n: {
    en: {
      title: "Col. Sec. Pje. Ifran",
      subtitle: "Asistente Virtual",
      footer: `Made with 💖 and ☕`,
      getStarted: "Nueva Conversación",
      inputPlaceholder: "Escribe tu duda...",
    },
    es: {
      title: "Col. Sec. Pje. Ifran",
      subtitle: "Asistente Virtual",
      footer: `Hecho con 💖 y ☕`,
      getStarted: "Nueva Conversación",
      inputPlaceholder: "Escribe tu duda...",
    },
  },
  enableStreaming: false,
});
