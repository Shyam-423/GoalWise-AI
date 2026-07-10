import api from "./axios";

export async function askAI(question: string) {
  const res = await api.post("/ai/chat", {
    question,
  });

  return res.data;
}

export async function chatAI(question: string) {

    const res = await api.post("/ai/chat", {

        question,

    });

    return res.data;

}