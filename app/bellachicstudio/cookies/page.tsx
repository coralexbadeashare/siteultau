export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Politica de Cookies
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <p className="text-gray-600 text-sm">Ultima actualizare: 17 Iulie 2025</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">1. Ce sunt Cookie-urile?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookie-urile sunt fișiere text de mici dimensiuni pe care site-urile web le salvează 
              pe dispozitivul dumneavoastră atunci când le vizitați. Acestea permit site-ului să 
              vă recunoască dispozitivul și să stocheze informații despre preferințele sau acțiunile 
              dumneavoastră anterioare.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cookie-urile sunt esențiale pentru funcționarea eficientă a site-ului nostru și pentru 
              a vă oferi o experiență personalizată și plăcută.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">2. Cum Utilizăm Cookie-urile</h2>
            <p className="text-gray-700 leading-relaxed">
              Website-ul BellaChic Studio utilizează cookie-uri pentru următoarele scopuri:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800">2.1 Cookie-uri Esențiale</h3>
            <p className="text-gray-700 leading-relaxed">
              Aceste cookie-uri sunt necesare pentru funcționarea de bază a site-ului și nu pot fi 
              dezactivate. Ele includ:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Cookie-uri de sesiune pentru menținerea stării de autentificare</li>
              <li>Cookie-uri pentru securitate și prevenirea fraudelor</li>
              <li>Cookie-uri pentru memorarea preferințelor de confidențialitate</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-4">2.2 Cookie-uri de Performanță</h3>
            <p className="text-gray-700 leading-relaxed">
              Aceste cookie-uri ne ajută să înțelegem cum interacționați cu site-ul nostru:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Google Analytics pentru analiza traficului</li>
              <li>Cookie-uri pentru măsurarea timpului de încărcare a paginilor</li>
              <li>Cookie-uri pentru înregistrarea erorilor tehnice</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-4">2.3 Cookie-uri Funcționale</h3>
            <p className="text-gray-700 leading-relaxed">
              Aceste cookie-uri îmbunătățesc funcționalitatea și personalizarea:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Memorarea preferințelor de limbă</li>
              <li>Salvarea informațiilor de programare</li>
              <li>Personalizarea aspectului site-ului</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-4">2.4 Cookie-uri de Marketing</h3>
            <p className="text-gray-700 leading-relaxed">
              Cu consimțământul dumneavoastră, utilizăm cookie-uri pentru:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Afișarea de reclame relevante pe alte site-uri</li>
              <li>Măsurarea eficacității campaniilor publicitare</li>
              <li>Limitarea numărului de afișări ale unei reclame</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">3. Cookie-uri ale Terților</h2>
            <p className="text-gray-700 leading-relaxed">
              Pe lângă cookie-urile proprii, folosim și servicii ale terților care pot seta 
              propriile cookie-uri:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-pink-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Furnizor</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Scop</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Tip</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">Analiză trafic</td>
                    <td className="border border-gray-300 px-4 py-2">Performanță</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Facebook Pixel</td>
                    <td className="border border-gray-300 px-4 py-2">Remarketing</td>
                    <td className="border border-gray-300 px-4 py-2">Marketing</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Google Maps</td>
                    <td className="border border-gray-300 px-4 py-2">Afișare hartă</td>
                    <td className="border border-gray-300 px-4 py-2">Funcțional</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">YouTube</td>
                    <td className="border border-gray-300 px-4 py-2">Video embed</td>
                    <td className="border border-gray-300 px-4 py-2">Funcțional</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. Controlul Cookie-urilor</h2>
            <p className="text-gray-700 leading-relaxed">
              Aveți control complet asupra cookie-urilor. Puteți:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800">4.1 Accepta sau Respinge Cookie-uri</h3>
            <p className="text-gray-700 leading-relaxed">
              La prima vizită pe site-ul nostru, veți vedea un banner de cookie-uri care vă permite 
              să alegeți ce tipuri de cookie-uri acceptați. Puteți modifica aceste setări oricând 
              din pagina de setări cookie-uri.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-4">4.2 Ștergerea Cookie-urilor</h3>
            <p className="text-gray-700 leading-relaxed">
              Puteți șterge cookie-urile existente prin setările browser-ului dumneavoastră:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Chrome:</strong> Setări → Confidențialitate și securitate → Cookie-uri</li>
              <li><strong>Firefox:</strong> Opțiuni → Confidențialitate → Cookie-uri</li>
              <li><strong>Safari:</strong> Preferințe → Confidențialitate → Gestionare date site web</li>
              <li><strong>Edge:</strong> Setări → Confidențialitate → Cookie-uri</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-4">4.3 Blocarea Cookie-urilor</h3>
            <p className="text-gray-700 leading-relaxed">
              Puteți configura browser-ul să blocheze toate cookie-urile sau să vă alerteze când 
              un site încearcă să seteze cookie-uri. Rețineți că blocarea tuturor cookie-urilor 
              poate afecta funcționalitatea site-ului nostru.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">5. Durata de Viață a Cookie-urilor</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookie-urile pe care le folosim au durate de viață diferite:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Cookie-uri de sesiune:</strong> Se șterg când închideți browser-ul</li>
              <li><strong>Cookie-uri persistente:</strong> Rămân pe dispozitiv pentru perioada specificată</li>
              <li><strong>Cookie-uri Google Analytics:</strong> Maximum 2 ani</li>
              <li><strong>Cookie-uri de marketing:</strong> Maximum 90 de zile</li>
              <li><strong>Cookie-uri de preferințe:</strong> Maximum 1 an</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">6. Cookie-uri și Dispozitive Mobile</h2>
            <p className="text-gray-700 leading-relaxed">
              Pe dispozitivele mobile, pe lângă cookie-uri, putem folosi și alte tehnologii similare:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Identificatori de dispozitiv</li>
              <li>Local storage</li>
              <li>SDK-uri mobile pentru analiză</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Aceste tehnologii funcționează similar cu cookie-urile și sunt guvernate de aceeași 
              politică.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">7. Actualizări ale Politicii</h2>
            <p className="text-gray-700 leading-relaxed">
              Această politică de cookie-uri poate fi actualizată periodic pentru a reflecta 
              schimbări în tehnologiile folosite sau în reglementările legale. Vă recomandăm să 
              verificați periodic această pagină pentru ultimele informații.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">8. Întrebări și Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Dacă aveți întrebări despre utilizarea cookie-urilor pe site-ul nostru, nu ezitați 
              să ne contactați:
            </p>
            <div className="bg-pink-50 p-4 rounded-lg space-y-2">
              <p className="text-gray-700"><strong>BellaChic Studio</strong></p>
              <p className="text-gray-700">Email: cookies@bellachicstudio.ro</p>
              <p className="text-gray-700">Telefon: +40 123 456 789</p>
              <p className="text-gray-700">Adresă: Str. Frumuseții nr. 10, București</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">9. Linkuri Utile</h2>
            <p className="text-gray-700 leading-relaxed">
              Pentru mai multe informații despre cookie-uri și confidențialitate online:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><a href="https://www.allaboutcookies.org/" className="text-pink-600 hover:text-pink-700 underline" target="_blank" rel="noopener noreferrer">All About Cookies</a></li>
              <li><a href="https://www.youronlinechoices.eu/" className="text-pink-600 hover:text-pink-700 underline" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
              <li><a href="https://www.dataprotection.ro/" className="text-pink-600 hover:text-pink-700 underline" target="_blank" rel="noopener noreferrer">ANSPDCP România</a></li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              Vezi și: <a href="/bellachicstudio/termeni" className="text-pink-600 hover:text-pink-700 underline">Termeni și Condiții</a> | 
              <a href="/bellachicstudio/confidentialitate" className="text-pink-600 hover:text-pink-700 underline ml-2">Politica de Confidențialitate</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}