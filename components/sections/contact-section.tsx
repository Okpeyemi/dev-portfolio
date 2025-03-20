import SectionLayout from "@/components/layout/section-layout";
import ContactInfo from "@/components/ui/contact-info";
import ContactForm from "@/components/ui/contact-form";
import SocialButtons from "@/components/ui/social-buttons";

interface ContactSectionProps {
  sectionNumber: number;
  sectionId: string;
}

export default function ContactSection({
  sectionNumber,
  sectionId,
}: ContactSectionProps) {
  return (
    <SectionLayout
      sectionId={sectionId}
      title="CONTACT ME"
      sectionNumber={sectionNumber}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          <p className="text-gray-300 mb-8">
            N&apos;hésitez pas à nous contacter si vous recherchez un développeur, si
            vous avez une question ou si vous souhaitez simplement vous
            connecter.
          </p>

          <ContactInfo />

          <div className="mt-12">
            <h4 className="font-medium mb-4">Follow Me</h4>
            <SocialButtons />
          </div>
        </div>

        <ContactForm />
      </div>
    </SectionLayout>
  );
}
