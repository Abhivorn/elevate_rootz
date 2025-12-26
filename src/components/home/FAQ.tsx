import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'What is the cost of a hair transplant?',
    answer: 'The cost varies depending on the number of grafts required and the technique used. During your free consultation, our experts will provide a personalized quote based on your specific needs. We offer flexible payment plans to make treatment accessible.',
  },
  {
    question: 'How long does the hair transplant procedure take?',
    answer: 'A typical FUE hair transplant takes between 6-8 hours, depending on the number of grafts. The procedure is performed under local anesthesia, and you can watch movies or relax during the treatment. Most patients experience minimal discomfort.',
  },
  {
    question: 'What is the recovery time after a hair transplant?',
    answer: 'Most patients return to work within 3-5 days. Initial redness and scabbing subside within 10-14 days. You\'ll see new hair growth starting around 3-4 months, with full results visible at 12-18 months.',
  },
  {
    question: 'Are the results of hair transplant permanent?',
    answer: 'Yes! Transplanted hair follicles are taken from the "donor zone" which is genetically resistant to balding. These hairs will continue to grow naturally for a lifetime. We also provide post-care guidance to maintain your results.',
  },
  {
    question: 'What skin treatments do you offer?',
    answer: 'We offer a comprehensive range of dermatological treatments including Pixelite 2.0 laser therapy, microneedling, carbon laser peels, chemical peels, and various facial treatments. Each treatment is customized to your skin type and concerns.',
  },
  {
    question: 'Is there a consultation fee?',
    answer: 'Your initial consultation is complimentary! During this session, our specialists will assess your condition, discuss treatment options, and provide a personalized treatment plan with transparent pricing.',
  },
  {
    question: 'Do you have clinics in both India and Dubai?',
    answer: 'Yes, we have state-of-the-art facilities in both India and Dubai. Both clinics offer the same high standards of care, advanced technology, and expert medical staff. You can choose the location most convenient for you.',
  },
  {
    question: 'What payment options are available?',
    answer: 'We accept all major credit cards, bank transfers, and offer EMI options for eligible patients. We believe quality healthcare should be accessible, so we work with you to find a payment plan that fits your budget.',
  },
];

export const FAQ = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. Find everything you need to know about our treatments and services.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-none px-6 rounded-2xl overflow-hidden"
              >
                <AccordionTrigger className="text-left font-serif font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Contact our team
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
