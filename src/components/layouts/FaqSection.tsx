import { faqs } from '../../data/faqs';

export default function FaqSection() {
  return (
    <section className="py-8 sm:py-16 bg-gradient-to-b from-white to-[#e9e9f7] dark:from-[#15141d] dark:to-[#1d1b28]" aria-labelledby="faq-title">
      <div className="container mx-auto px-4">
        <h2 id="faq-title" className="text-3xl font-bold text-center mb-3 text-[#8c8cdc] dark:text-[#b8b8f0]">
          Preguntas frecuentes
        </h2>
        <div className="w-full mb-8">
          <div className="h-1 mx-auto gradient w-64 opacity-50 my-0 py-0 rounded-t"></div>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="bg-white dark:bg-[#211f2c] rounded-xl shadow-sm dark:shadow-black/20 p-5">
              <h3 className="text-lg font-semibold text-[#8c8cdc] dark:text-[#b8b8f0]">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
