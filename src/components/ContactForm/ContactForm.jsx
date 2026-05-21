import { useState } from 'react';
import { LoadingSpinner } from '../ui/LoadingSpinner/LoadingSpinner';
import { SIMULATED_DELAYS } from '../../utils/catalog';
import { saveContactInquiry } from '../../utils/contactStorage';
import { wait } from '../../utils/delay';
import styles from './ContactForm.module.css';

const {
  formSection,
  formTitle,
  formDescription,
  form,
  fieldRow,
  label,
  input,
  textarea,
  submitButton,
  success,
  successTitle,
  successText,
} = styles;

const INITIAL_FORM = {
  name: '',
  locality: '',
  email: '',
  phone: '',
  comment: '',
};

export function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    await wait(SIMULATED_DELAYS.CONTACT_SUBMIT);

    saveContactInquiry(formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section className={formSection}>
        <div className={success}>
          <h3 className={successTitle}>¡Recibimos tu mensaje!</h3>
          <p className={successText}>
            Te estaremos contactando a la brevedad. Gracias por escribirnos, el equipo de SamaBikes ya tiene tu consulta.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={formSection}>
      <h3 className={formTitle}>Dejá tu consulta y te respondemos a la brevedad</h3>
      <p className={formDescription}>
        Completá el formulario con tus datos y contanos qué necesitás: moto, equipamiento, financiación o una prueba de ruta.
      </p>

      {isSubmitting ? (
        <LoadingSpinner message="Enviando consulta..." />
      ) : (
        <form className={form} onSubmit={handleSubmit}>
          <div className={fieldRow}>
            <label className={label}>
              Nombre
              <input
                className={input}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </label>
            <label className={label}>
              Localidad
              <input
                className={input}
                type="text"
                name="locality"
                value={formData.locality}
                onChange={handleChange}
                required
                autoComplete="address-level2"
              />
            </label>
          </div>

          <div className={fieldRow}>
            <label className={label}>
              Email
              <input
                className={input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </label>
            <label className={label}>
              Teléfono
              <input
                className={input}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="tel"
              />
            </label>
          </div>

          <label className={label}>
            Comentario
            <textarea
              className={textarea}
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              placeholder="Contanos qué moto o accesorio te interesa, o cualquier duda que tengas."
            />
          </label>

          <button type="submit" className={submitButton} disabled={isSubmitting}>
            Enviar consulta
          </button>
        </form>
      )}
    </section>
  );
}
