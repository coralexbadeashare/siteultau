export default function TermeniPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Termeni și Condiții
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <p className="text-gray-600 text-sm">Ultima actualizare: 17 Iulie 2025</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">1. Introducere</h2>
            <p className="text-gray-700 leading-relaxed">
              Bine ați venit la BellaChic Studio! Acești termeni și condiții stabilesc regulile și 
              reglementările pentru utilizarea serviciilor noastre de înfrumusețare situate în 
              București, România.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Prin accesarea serviciilor noastre, acceptați să respectați și să fiți obligat de 
              acești termeni și condiții. Dacă nu sunteți de acord cu orice parte a acestor 
              termeni, vă rugăm să nu utilizați serviciile noastre.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">2. Servicii Oferite</h2>
            <p className="text-gray-700 leading-relaxed">
              BellaChic Studio oferă o gamă completă de servicii de înfrumusețare, inclusiv:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Coafură și styling</li>
              <li>Manichiură și pedichiură</li>
              <li>Tratamente faciale și corporale</li>
              <li>Makeup profesional</li>
              <li>Extensii de gene</li>
              <li>Epilare definitivă și temporară</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">3. Programări și Anulări</h2>
            <h3 className="text-xl font-semibold text-gray-800">3.1 Efectuarea Programărilor</h3>
            <p className="text-gray-700 leading-relaxed">
              Programările pot fi făcute telefonic, online prin website-ul nostru sau direct la salon. 
              Pentru a confirma programarea, poate fi necesară plata unui avans de 30% din valoarea serviciului.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800">3.2 Politica de Anulare</h3>
            <p className="text-gray-700 leading-relaxed">
              Anulările trebuie făcute cu cel puțin 24 de ore înainte de programare. Anulările făcute 
              cu mai puțin de 24 de ore înainte sau neprezentarea la programare pot duce la pierderea 
              avansului plătit.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800">3.3 Întârzieri</h3>
            <p className="text-gray-700 leading-relaxed">
              În cazul întârzierii la programare cu mai mult de 15 minute, ne rezervăm dreptul de a 
              reprograma sau anula serviciul, în funcție de disponibilitate.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. Prețuri și Plăți</h2>
            <p className="text-gray-700 leading-relaxed">
              Toate prețurile sunt afișate în Lei (RON) și includ TVA. Ne rezervăm dreptul de a 
              modifica prețurile fără notificare prealabilă, însă prețul confirmat la momentul 
              programării va fi respectat.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Acceptăm următoarele metode de plată:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Numerar</li>
              <li>Card bancar (Visa, Mastercard)</li>
              <li>Transfer bancar (pentru pachete și abonamente)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">5. Răspundere și Garanții</h2>
            <h3 className="text-xl font-semibold text-gray-800">5.1 Calitatea Serviciilor</h3>
            <p className="text-gray-700 leading-relaxed">
              Ne angajăm să oferim servicii de cea mai înaltă calitate, folosind produse profesionale 
              și personal calificat. În cazul în care nu sunteți mulțumit de rezultat, vă rugăm să ne 
              informați în termen de 48 de ore pentru a putea remedia situația.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800">5.2 Alergii și Reacții Adverse</h3>
            <p className="text-gray-700 leading-relaxed">
              Este responsabilitatea clientului să ne informeze despre orice alergii, sensibilități 
              sau condiții medicale relevante înainte de efectuarea serviciilor. Salonul nu își asumă 
              răspunderea pentru reacții adverse nedeclarate.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">6. Proprietate Intelectuală</h2>
            <p className="text-gray-700 leading-relaxed">
              Toate materialele de pe website-ul nostru, inclusiv texte, imagini, logo-uri și design, 
              sunt proprietatea BellaChic Studio și sunt protejate de legile drepturilor de autor. 
              Utilizarea neautorizată a acestor materiale este strict interzisă.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">7. Confidențialitate</h2>
            <p className="text-gray-700 leading-relaxed">
              Protecția datelor dumneavoastră personale este importantă pentru noi. Vă rugăm să 
              consultați <a href="/bellachicstudio/confidentialitate" className="text-pink-600 hover:text-pink-700 underline">Politica noastră de Confidențialitate</a> pentru 
              detalii despre cum colectăm, folosim și protejăm informațiile dumneavoastră.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">8. Modificări ale Termenilor</h2>
            <p className="text-gray-700 leading-relaxed">
              Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. 
              Modificările vor fi publicate pe website-ul nostru și vor intra în vigoare imediat 
              după publicare.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">9. Legea Aplicabilă</h2>
            <p className="text-gray-700 leading-relaxed">
              Acești termeni și condiții sunt guvernați de legile României. Orice dispută va fi 
              soluționată de instanțele competente din București.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">10. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Pentru orice întrebări referitoare la acești termeni și condiții, ne puteți contacta la:
            </p>
            <div className="bg-pink-50 p-4 rounded-lg space-y-2">
              <p className="text-gray-700"><strong>BellaChic Studio</strong></p>
              <p className="text-gray-700">Email: contact@bellachicstudio.ro</p>
              <p className="text-gray-700">Telefon: +40 123 456 789</p>
              <p className="text-gray-700">Adresă: Str. Frumuseții nr. 10, București</p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              Vezi și: <a href="/bellachicstudio/confidentialitate" className="text-pink-600 hover:text-pink-700 underline">Politica de Confidențialitate</a> | 
              <a href="/bellachicstudio/cookies" className="text-pink-600 hover:text-pink-700 underline ml-2">Politica de Cookies</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}