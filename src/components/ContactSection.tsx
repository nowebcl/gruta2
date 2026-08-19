import React, { useState } from 'react';
import { Send, CheckCircle2, MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { STUDIO_INFO, OFFICES } from '../data/architectureData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    fono: '',
    email: '',
    ciudad: 'Puerto Montt',
    empresa: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contacto" className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-zinc-50/70 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column: Form & Direct Contact */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-red-600"></span>
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-red-600">
                Ponte en Contacto con Nosotros
              </p>
            </div>

            <h2 className="text-3xl md:text-5xl font-extralight leading-[1.15] tracking-tight text-zinc-900 mb-6 text-balance">
              Contáctanos para{' '}
              <span className="font-light text-red-600 underline decoration-red-200 underline-offset-8">
                impulsar tu proyecto
              </span>
            </h2>

            <p className="text-base font-light text-zinc-600 max-w-xl mb-8 leading-relaxed">
              «Conversemos sobre tu proyecto. Ya sea maestranza, gaviones, obras civiles o estructuras especiales, te respondemos a la brevedad con soluciones técnicas concretas.»
            </p>

            {/* Direct Phone & WhatsApp Action Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <a
                href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, '')}`}
                className="p-5 bg-white border border-zinc-200 hover:border-red-600 group transition-all shadow-sm"
              >
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-red-600 mb-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Llamada Directa</span>
                </div>
                <p className="text-lg font-mono font-medium text-zinc-900 group-hover:text-red-600 transition-colors">
                  {STUDIO_INFO.phone}
                </p>
                <p className="text-xs text-zinc-400 font-light mt-1">
                  Atención rápida para cotizaciones
                </p>
              </a>

              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white border border-zinc-200 hover:border-emerald-600 group transition-all shadow-sm"
              >
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-emerald-600 mb-1">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Oficial</span>
                </div>
                <p className="text-lg font-mono font-medium text-zinc-900 group-hover:text-emerald-600 transition-colors">
                  Iniciar Chat Inmediato
                </p>
                <p className="text-xs text-zinc-400 font-light mt-1">
                  Envíanos planos o especificaciones
                </p>
              </a>
            </div>

            {/* Interactive Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-white border border-red-200 shadow-md flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-medium text-zinc-900 mb-1">
                    Cotización enviada con éxito
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Gracias por comunicarte con Maestranza la Gruta. Nuestro equipo técnico evaluará tu solicitud y se pondrá en contacto en menos de 24 horas.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ nombre: '', fono: '', email: '', ciudad: 'Puerto Montt', empresa: '', mensaje: '' });
                    }}
                    className="mt-4 text-xs font-semibold uppercase tracking-wider text-red-600 hover:text-red-700 underline"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 bg-white border border-zinc-200 shadow-sm space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div>
                    <label className="block text-[11px] font-mono tracking-widest uppercase text-zinc-500 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Tu nombre o razón social"
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Fono */}
                  <div>
                    <label className="block text-[11px] font-mono tracking-widest uppercase text-zinc-500 mb-2">
                      Fono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.fono}
                      onChange={(e) => setFormData({ ...formData, fono: e.target.value })}
                      placeholder="+56 9 1234 5678"
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-mono tracking-widest uppercase text-zinc-500 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="correo@empresa.cl"
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Ciudad */}
                  <div>
                    <label className="block text-[11px] font-mono tracking-widest uppercase text-zinc-500 mb-2">
                      Ciudad *
                    </label>
                    <select
                      value={formData.ciudad}
                      onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                    >
                      <option value="Puerto Montt">Puerto Montt</option>
                      <option value="Puerto Varas">Puerto Varas</option>
                      <option value="Calbuco">Calbuco</option>
                      <option value="Frutillar / Llanquihue">Frutillar / Llanquihue</option>
                      <option value="Otra Comuna">Otra Comuna / Región</option>
                    </select>
                  </div>

                  {/* Empresa */}
                  <div>
                    <label className="block text-[11px] font-mono tracking-widest uppercase text-zinc-500 mb-2">
                      Empresa (Opcional)
                    </label>
                    <input
                      type="text"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      placeholder="Nombre de empresa"
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-[11px] font-mono tracking-widest uppercase text-zinc-500 mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Describe los requerimientos: gaviones, maestranza pesada, montaje de galpón, obras civiles..."
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-medium text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300 shadow-md shadow-red-600/20 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Procesando envío...</span>
                  ) : (
                    <>
                      <span>ENVIAR COTIZACIÓN</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Real Office & Email Directory */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 bg-red-600"></span>
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-red-600">
                  Ubicación & Contacto
                </p>
              </div>

              {/* Plant Card */}
              <div className="space-y-6">
                {OFFICES.map((office) => (
                  <div
                    key={office.city}
                    className="p-6 bg-white border border-zinc-200 hover:border-red-600/50 transition-colors shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-light tracking-tight text-zinc-900">
                        {office.city}
                      </h3>
                      <span className="text-xs font-mono text-red-600 bg-red-50 px-2 py-0.5 border border-red-200">
                        {office.country}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-zinc-600 font-light">
                      <p className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-red-600 mt-0.5 shrink-0" />
                        <span>{office.address}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="text-zinc-900 hover:text-red-600">
                          {office.phone}
                        </a>
                      </p>
                      {office.schedule && (
                        <p className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                          <span>{office.schedule}</span>
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Team Email Directory */}
                <div className="p-6 bg-white border border-zinc-200 shadow-sm">
                  <div className="flex items-center gap-2 text-red-600 font-medium text-xs font-mono uppercase tracking-wider mb-3">
                    <Mail className="w-4 h-4" />
                    <span>Correos Directos del Equipo</span>
                  </div>
                  <div className="space-y-2 text-xs divide-y divide-zinc-100">
                    {STUDIO_INFO.emails.map((item, idx) => (
                      <div key={idx} className="pt-2 first:pt-0 flex items-center justify-between">
                        <span className="text-zinc-500 font-light">{item.label}:</span>
                        <a
                          href={`mailto:${item.email}`}
                          className="font-mono text-zinc-900 hover:text-red-600 transition-colors"
                        >
                          {item.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Note */}
            <div className="mt-8 p-6 bg-white border-l-2 border-red-600 border-zinc-200">
              <p className="text-xs font-medium text-zinc-900 mb-1">
                Atención en Taller & Faenas
              </p>
              <p className="text-xs text-zinc-500 font-light">
                {STUDIO_INFO.operatingHours}. Visitas técnicas a terreno previa coordinación telefónica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
