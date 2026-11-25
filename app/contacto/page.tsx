import Footer from "@/components/Footer";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function ContactoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Involúcrate y Contáctanos"
          subtitle="Postula como voluntario/Shaper, propone una alianza corporativa RSE o escríbenos directamente a globalshaperssv@gmail.com."
          breadcrumb="Contacto"
        />
        <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  );
}
