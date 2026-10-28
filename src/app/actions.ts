"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendContactEmail(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const type = formData.get("type") as string;
  const message = formData.get("message") as string;

  if (!name || !phone || !type || !message) {
    return { status: "error", message: "Champs obligatoires manquants." };
  }

  const typeLabels: Record<string, string> = {
    urgence: "🚨 Urgence",
    devis: "📋 Demande de devis",
    entretien: "🔧 Entretien / maintenance",
    autre: "💬 Autre",
  };

  try {
    await resend.emails.send({
      from: "Plomberie Archimède <contact@plomberie-archimede.fr>",
      to: "plomberiearchimede@gmail.com",
      replyTo: email || undefined,
      subject: `${typeLabels[type] ?? type} — ${name}`,
      text: [
        `Nom : ${name}`,
        `Téléphone : ${phone}`,
        email ? `Email : ${email}` : null,
        `Type : ${typeLabels[type] ?? type}`,
        ``,
        `Message :`,
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return { status: "success" };
  } catch {
    return { status: "error" };
  }
}
