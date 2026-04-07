import { useMemo } from 'react';

const CONTACT = {
  name: 'Ankan Biswas',
  title: 'Digital Business Card',
  phone: '+353 871904178',
  phoneUri: '+353871904178',
  email: 'ankan.biswas2710@gmail.com',
  websites: [
    {
      label: 'Open Sample Website 1',
      href: 'https://coffee-shop-ecommerce.vercel.app/',
      className: 'bg-slate-950 hover:bg-slate-900'
    },
    {
      label: 'Open Sample Website 2',
      href: 'https://your-coffee-shop.vercel.app',
      className: 'bg-slate-700 hover:bg-slate-600'
    }
  ],
  profileImage: 'https://ui-avatars.com/api/?name=Ankan+Biswas&background=f8d74d&color=0f172a&size=256'
};

export default function BusinessCardPage() {
  const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://coffee-shop-ecommerce.vercel.app/business-card';

  const qrCodeSrc = useMemo(
    () => `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(pageUrl)}`,
    [pageUrl]
  );

  const vcfHref = useMemo(() => {
    const vcf = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${CONTACT.name}`,
      `TITLE:${CONTACT.title}`,
      `TEL;TYPE=CELL:${CONTACT.phoneUri}`,
      `EMAIL:${CONTACT.email}`,
      `URL:${CONTACT.websites[0].href}`,
      `URL:${CONTACT.websites[1].href}`,
      'END:VCARD'
    ].join('\n');

    return `data:text/vcard;charset=utf-8,${encodeURIComponent(vcf)}`;
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-8 text-slate-900">
      <div className="mx-auto max-w-md overflow-hidden rounded-[32px] bg-zinc-100 shadow-2xl shadow-black/40">
        <div className="relative bg-yellow-300 px-8 pb-14 pt-10 text-center">
          <img
            src={CONTACT.profileImage}
            alt={`${CONTACT.name} profile`}
            className="mx-auto h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg"
          />
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950">{CONTACT.name}</h1>
          <p className="mt-1 text-2xl text-slate-700">{CONTACT.title}</p>
        </div>

        <div className="space-y-7 px-7 pb-8 pt-7">
          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-600">Contact</h2>
            <div className="mt-3 rounded-2xl border border-slate-300 bg-slate-100 p-4 text-lg">
              <a href={`tel:${CONTACT.phoneUri}`} className="font-medium text-slate-900 hover:text-slate-700">
                📞 {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="mt-2 block text-base text-slate-700 hover:text-slate-900">
                ✉️ {CONTACT.email}
              </a>
            </div>
            <a
              href={vcfHref}
              download="ankan-biswas-contact.vcf"
              className="mt-4 block rounded-2xl bg-amber-400 px-6 py-4 text-center text-3xl font-bold text-slate-950 transition hover:bg-amber-300"
            >
              Save Contact
            </a>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-600">Sample Websites</h2>
            <div className="mt-3 space-y-3">
              {CONTACT.websites.map((website) => (
                <a
                  key={website.href}
                  href={website.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`block rounded-2xl px-5 py-4 text-center text-xl font-bold text-white transition ${website.className}`}
                >
                  {website.label}
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-600">QR Code</h2>
            <p className="mt-2 text-sm text-slate-600">Scan to open this business card instantly.</p>
            <img
              src={qrCodeSrc}
              alt="QR code linking to this digital business card"
              className="mt-3 w-full rounded-2xl border border-slate-300 bg-white p-3"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
