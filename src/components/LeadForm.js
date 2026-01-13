'use client';

import { useState } from 'react';
import { services } from '@/data/services';
import { getAllLocations } from '@/data/locations';

export default function LeadForm({ 
  preselectedService = '',
  preselectedLocation = '',
  variant = 'default',
  title = 'Book Your Consultation',
  subtitle = 'Connect with London\'s finest aesthetic practitioners'
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService,
    location: preselectedLocation,
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const locations = getAllLocations();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="bg-white p-10 text-center">
        <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-gray-900 mb-3">Thank You</h3>
        <p className="text-gray-600">
          We've received your enquiry. A member of our team will be in touch within 2 hours.
        </p>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3.5 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-600 transition-colors text-sm";
  const selectClasses = "w-full px-4 py-3.5 border border-gray-200 text-gray-900 focus:outline-none focus:border-primary-600 transition-colors text-sm bg-white";

  return (
    <div className="bg-white p-8 md:p-10">
      <div className="text-center mb-8">
        <h3 className="font-display text-2xl md:text-3xl text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className={selectClasses}
          >
            <option value="">Select Treatment</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            className={selectClasses}
          >
            <option value="">Preferred Location</option>
            {locations.map((location) => (
              <option key={location.slug} value={location.slug}>
                {location.name}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-primary-700 text-white py-4 text-sm tracking-wide hover:bg-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Submitting...' : 'Request Consultation'}
        </button>

        <p className="text-center text-xs text-gray-400 pt-2">
          Free consultation • No obligation • Response within 2 hours
        </p>
      </form>
    </div>
  );
}
