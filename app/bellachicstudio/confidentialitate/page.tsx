export default function ConfidentialitatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Politica de Confidențialitate
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <p className="text-gray-600 text-sm">Ultima actualizare: 17 Iulie 2025</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">1. Introducere</h2>
            <p className="text-gray-700 leading-relaxed">
              La BellaChic Studio, protecția datelor dumneavoastră personale este o prioritate. 
              Această politică de confidențialitate explică cum colectăm, utilizăm, stocăm și 
              protejăm informațiile dumneavoastră personale în conformitate cu Regulamentul 
              General privind Protecția Datelor (GDPR) și legislația română în vigoare.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">2. Date Personale Colectate</h2>
            <p className="text-gray-700 leading-relaxed">
              În cadrul activității noastre, putem colecta următoarele categorii de date personale:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800">2.1 Date de Identificare</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Nume și prenume</li>
              <li>Număr de telefon</li>
              <li>Adresă de email</li>
              <li>Data nașterii (pentru oferte speciale de ziua dumneavoastră)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-4">2.2 Date despre Servicii</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Istoricul serviciilor efectuate</li>
              <li>Preferințe de tratamente</li>
              <li>Alergii și sensibilități declarate</li>
              <li>Programări și anulări</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-4">2.3 Date Financiare</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Istoricul plăților</li>
              <li>Facturi emise</li>
              <li>Informații despre abonamente și pachete</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">3. Scopurile Prelucrării Datelor</h2>
            <p className="text-gray-700 leading-relaxed">
              Utilizăm datele dumneavoastră personale pentru următoarele scopuri:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Gestionarea programărilor și furnizarea serviciilor solicitate</li>
              <li>Comunicarea cu dumneavoastră privind programările, modificările sau ofertele speciale</li>
              <li>Îmbunătățirea serviciilor noastre pe baza feedback-ului primit</li>
              <li>Respectarea obligațiilor legale (contabilitate, raportări fiscale)</li>
              <li>Marketing direct (doar cu consimțământul dumneavoastră explicit)</li>
              <li>Prevenirea fraudelor și gestionarea litigiilor</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. Temeiul Legal al Prelucrării</h2>
            <p className="text-gray-700 leading-relaxed">
              Prelucrăm datele dumneavoastră personale pe baza următoarelor temeiuri legale:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Executarea contractului:</strong> pentru furnizarea serviciilor solicitate</li>
              <li><strong>Consimțământ:</strong> pentru activități de marketing și newsletter</li>
              <li><strong>Obligații legale:</strong> pentru conformare cu legislația fiscală și contabilă</li>
              <li><strong>Interes legitim:</strong> pentru îmbunătățirea serviciilor și prevenirea fraudelor</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">5. Durata Stocării Datelor</h2>
            <p className="text-gray-700 leading-relaxed">
              Păstrăm datele dumneavoastră personale pentru următoarele perioade:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Date de contact și istoric servicii: 3 ani de la ultima interacțiune</li>
              <li>Documente fiscale și facturi: 10 ani conform legislației fiscale</li>
              <li>Date de marketing: până la retragerea consimțământului</li>
              <li>Înregistrări video de supraveghere: maximum 30 de zile</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">6. Partajarea Datelor cu Terți</h2>
            <p className="text-gray-700 leading-relaxed">
              Nu vindem, închiriem sau partajăm datele dumneavoastră personale cu terți în scopuri 
              comerciale. Putem partaja datele doar în următoarele situații:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Cu furnizorii de servicii (contabilitate, IT) sub acorduri stricte de confidențialitate</li>
              <li>Cu autoritățile competente când avem obligația legală</li>
              <li>Cu consimțământul dumneavoastră explicit</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">7. Drepturile Dumneavoastră</h2>
            <p className="text-gray-700 leading-relaxed">
              În conformitate cu GDPR, aveți următoarele drepturi:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Dreptul de acces:</strong> să obțineți confirmarea că prelucrăm datele dumneavoastră și o copie a acestora</li>
              <li><strong>Dreptul la rectificare:</strong> să corectați datele inexacte sau incomplete</li>
              <li><strong>Dreptul la ștergere:</strong> să solicitați ștergerea datelor în anumite condiții</li>
              <li><strong>Dreptul la restricționarea prelucrării:</strong> să limitați modul în care folosim datele</li>
              <li><strong>Dreptul la portabilitate:</strong> să primiți datele într-un format structurat</li>
              <li><strong>Dreptul de opoziție:</strong> să vă opuneți prelucrării în anumite scopuri</li>
              <li><strong>Dreptul de a retrage consimțământul:</strong> în orice moment, pentru prelucrările bazate pe consimțământ</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Pentru exercitarea acestor drepturi, ne puteți contacta la datele de contact de mai jos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">8. Securitatea Datelor</h2>
            <p className="text-gray-700 leading-relaxed">
              Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele 
              dumneavoastră personale, inclusiv:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Criptarea datelor sensibile</li>
              <li>Acces restricționat la date pe bază de rol</li>
              <li>Instruirea regulată a personalului privind protecția datelor</li>
              <li>Sisteme de backup și recuperare a datelor</li>
              <li>Monitorizarea accesului la sisteme</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">9. Cookies și Tehnologii Similare</h2>
            <p className="text-gray-700 leading-relaxed">
              Website-ul nostru utilizează cookies pentru a îmbunătăți experiența dumneavoastră. 
              Pentru detalii complete, vă rugăm să consultați <a href="/bellachicstudio/cookies" className="text-pink-600 hover:text-pink-700 underline">Politica noastră de Cookies</a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">10. Modificări ale Politicii</h2>
            <p className="text-gray-700 leading-relaxed">
              Această politică poate fi actualizată periodic pentru a reflecta schimbări în 
              practicile noastre sau în legislație. Vă vom notifica despre modificări semnificative 
              prin email sau prin afișare pe website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">11. Date de Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Pentru orice întrebări despre această politică sau despre datele dumneavoastră personale, 
              ne puteți contacta:
            </p>
            <div className="bg-pink-50 p-4 rounded-lg space-y-2">
              <p className="text-gray-700"><strong>Responsabil cu Protecția Datelor</strong></p>
              <p className="text-gray-700">BellaChic Studio SRL</p>
              <p className="text-gray-700">Email: gdpr@bellachicstudio.ro</p>
              <p className="text-gray-700">Telefon: +40 123 456 789</p>
              <p className="text-gray-700">Adresă: Str. Frumuseții nr. 10, București</p>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              De asemenea, aveți dreptul să depuneți o plângere la Autoritatea Națională de 
              Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP):
            </p>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <p className="text-gray-700">Website: www.dataprotection.ro</p>
              <p className="text-gray-700">Email: anspdcp@dataprotection.ro</p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              Vezi și: <a href="/bellachicstudio/termeni" className="text-pink-600 hover:text-pink-700 underline">Termeni și Condiții</a> | 
              <a href="/bellachicstudio/cookies" className="text-pink-600 hover:text-pink-700 underline ml-2">Politica de Cookies</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}