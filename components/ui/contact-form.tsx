import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <form className="bg-[#252529] p-8 rounded-lg">
      <h3 className="text-2xl font-semibold mb-6">Envoyez un Message</h3>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Nom
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-[#1a1a1e] border border-[#333339] rounded-lg p-3 focus:outline-none focus:border-yellow-300"
              placeholder="Votre Nom"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-[#1a1a1e] border border-[#333339] rounded-lg p-3 focus:outline-none focus:border-yellow-300"
              placeholder="Votre Email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block mb-2 text-sm">
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            className="w-full bg-[#1a1a1e] border border-[#333339] rounded-lg p-3 focus:outline-none focus:border-yellow-300"
            placeholder="Sujet"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full bg-[#1a1a1e] border border-[#333339] rounded-lg p-3 focus:outline-none focus:border-yellow-300"
            placeholder="Votre Message"
          ></textarea>
        </div>

        <div className="max-md:flex max-md:justify-center">
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-yellow-300 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
          >
            Envoyez un Message
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </form>
  );
}
