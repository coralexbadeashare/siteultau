"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, CheckCircle, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format, addDays, startOfWeek, isSameDay, isToday, isBefore, startOfDay } from "date-fns";
import { ro } from "date-fns/locale";

const appointmentSchema = z.object({
  name: z.string().min(3, "Numele trebuie să aibă minim 3 caractere"),
  email: z.string().email("Email invalid"),
  phone: z.string().min(10, "Număr de telefon invalid"),
  service: z.string().min(1, "Selectează un serviciu"),
  specialist: z.string().min(1, "Selectează un specialist"),
  date: z.date({
    message: "Selectează o dată",
  }),
  time: z.string().min(1, "Selectează o oră"),
  notes: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const services = [
  { id: "coafor-tuns", name: "Coafor - Tuns", duration: 60, price: "80-120 RON" },
  { id: "coafor-vopsit", name: "Coafor - Vopsit", duration: 180, price: "150-300 RON" },
  { id: "coafor-coafat", name: "Coafor - Coafat Evenimente", duration: 90, price: "150-300 RON" },
  { id: "manichiura-simpla", name: "Manichiură Simplă", duration: 45, price: "40-60 RON" },
  { id: "manichiura-gel", name: "Manichiură Gel", duration: 90, price: "80-120 RON" },
  { id: "pedichiura", name: "Pedichiură", duration: 60, price: "60-100 RON" },
  { id: "tratament-facial", name: "Tratament Facial", duration: 60, price: "100-200 RON" },
  { id: "makeup", name: "Makeup", duration: 60, price: "150-300 RON" },
  { id: "epilare", name: "Epilare", duration: 30, price: "30-150 RON" },
];

const specialists = [
  { id: "1", name: "Maria Ionescu", specialties: ["coafor-tuns", "coafor-vopsit", "coafor-coafat"], avatar: "MI" },
  { id: "2", name: "Ana Popescu", specialties: ["manichiura-simpla", "manichiura-gel", "pedichiura"], avatar: "AP" },
  { id: "3", name: "Elena Dumitrescu", specialties: ["tratament-facial", "makeup"], avatar: "ED" },
  { id: "4", name: "Cristina Radu", specialties: ["epilare", "tratament-facial"], avatar: "CR" },
  { id: "5", name: "Laura Stancu", specialties: ["coafor-tuns", "coafor-coafat"], avatar: "LS" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"
];

// Mock booked slots
const bookedSlots = [
  { date: new Date(), time: "10:00", specialist: "1" },
  { date: new Date(), time: "14:30", specialist: "2" },
  { date: addDays(new Date(), 1), time: "11:00", specialist: "1" },
  { date: addDays(new Date(), 2), time: "15:00", specialist: "3" },
];

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const selectedService = watch("service");
  const selectedSpecialist = watch("specialist");

  // Get available specialists for selected service
  const availableSpecialists = selectedService
    ? specialists.filter(s => s.specialties.includes(selectedService))
    : [];

  // Get available time slots for selected date and specialist
  const getAvailableTimeSlots = () => {
    if (!selectedDate || !selectedSpecialist) return [];

    const serviceDuration = services.find(s => s.id === selectedService)?.duration || 60;
    const bookedForDay = bookedSlots.filter(
      slot => isSameDay(slot.date, selectedDate) && slot.specialist === selectedSpecialist
    );

    return timeSlots.filter(time => {
      // Check if slot is already booked
      const isBooked = bookedForDay.some(slot => slot.time === time);
      
      // Check if it's past time for today
      if (isToday(selectedDate)) {
        const [hours, minutes] = time.split(":").map(Number);
        const slotTime = new Date();
        slotTime.setHours(hours, minutes, 0, 0);
        if (isBefore(slotTime, new Date())) return false;
      }

      // Check if there's enough time for the service
      const slotIndex = timeSlots.indexOf(time);
      const slotsNeeded = Math.ceil(serviceDuration / 30);
      
      if (slotIndex + slotsNeeded > timeSlots.length) return false;

      return !isBooked;
    });
  };

  const weekDays = [];
  const startWeek = startOfWeek(currentWeek, { weekStartsOn: 1 });
  for (let i = 0; i < 7; i++) {
    weekDays.push(addDays(startWeek, i));
  }

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Appointment data:", {
      ...data,
      date: selectedDate,
      time: selectedTime,
    });
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      reset();
      setStep(1);
      setSelectedDate(null);
      setSelectedTime("");
      setIsSuccess(false);
    }, 3000);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">
              Programare Online
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Programează-te rapid și ușor pentru serviciile noastre de înfrumusețare
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className="flex items-center">
                  <span
                    className={`text-2xl font-bold transition-all duration-300 ${
                      step === s
                        ? "text-pink-600 scale-125"
                        : step > s
                        ? "text-pink-400"
                        : "text-gray-500"
                    }`}
                  >
                    {s}
                  </span>
                  <span className={`ml-3 font-medium ${
                    step >= s ? "text-gray-900" : "text-gray-600"
                  }`}>
                    {s === 1 ? "Serviciu & Specialist" : s === 2 ? "Dată & Oră" : "Confirmare"}
                  </span>
                </div>
                {s < 3 && (
                  <div className={`flex-1 h-1 mx-4 ${
                    step > s ? "bg-pink-600" : "bg-gray-200"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-xl p-12 text-center"
            >
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
                Programare confirmată!
              </h2>
              <p className="text-lg text-gray-700 mb-2">
                Ți-am trimis un email de confirmare cu toate detaliile programării.
              </p>
              <p className="text-gray-600">
                Te așteptăm cu drag la salonul nostru!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                {/* Step 1: Service & Specialist */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                      Alege serviciul și specialistul
                    </h2>

                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-2">
                        Serviciu dorit *
                      </label>
                      <select
                        {...register("service")}
                        className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        style={{ color: '#000000', WebkitTextFillColor: '#000000' }}
                      >
                        <option value="">Selectează un serviciu</option>
                        {services.map(service => (
                          <option key={service.id} value={service.id}>
                            {service.name} - {service.duration} min - {service.price}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                      )}
                    </div>

                    {selectedService && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                          Specialist preferat *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {availableSpecialists.map(specialist => (
                            <label
                              key={specialist.id}
                              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                                selectedSpecialist === specialist.id
                                  ? "border-pink-600 bg-pink-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              <input
                                type="radio"
                                {...register("specialist")}
                                value={specialist.id}
                                className="sr-only"
                              />
                              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                                {specialist.avatar}
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">{specialist.name}</p>
                                <p className="text-sm text-gray-700">Specialist</p>
                              </div>
                            </label>
                          ))}
                        </div>
                        {errors.specialist && (
                          <p className="mt-1 text-sm text-red-600">{errors.specialist.message}</p>
                        )}
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Step 2: Date & Time */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                      Alege data și ora
                    </h2>

                    {/* Calendar */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <button
                          type="button"
                          onClick={() => setCurrentWeek(addDays(currentWeek, -7))}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-800"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <h3 className="font-semibold text-gray-900">
                          {format(weekDays[0], "d MMM", { locale: ro })} - {format(weekDays[6], "d MMM yyyy", { locale: ro })}
                        </h3>
                        <button
                          type="button"
                          onClick={() => setCurrentWeek(addDays(currentWeek, 7))}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-800"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-7 gap-2">
                        {weekDays.map((day) => {
                          const isPast = isBefore(startOfDay(day), startOfDay(new Date()));
                          const isSelected = selectedDate && isSameDay(day, selectedDate);
                          
                          return (
                            <button
                              key={day.toISOString()}
                              type="button"
                              onClick={() => {
                                if (!isPast) {
                                  setSelectedDate(day);
                                  setValue("date", day);
                                  setSelectedTime("");
                                }
                              }}
                              disabled={isPast}
                              className={`p-3 rounded-lg text-center transition-colors ${
                                isSelected
                                  ? "bg-pink-600 text-white"
                                  : isPast
                                  ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                              }`}
                            >
                              <div className="text-xs font-medium">
                                {format(day, "EEE", { locale: ro })}
                              </div>
                              <div className="text-lg font-semibold mt-1">
                                {format(day, "d")}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Slots */}
                    {selectedDate && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <h4 className="font-medium text-gray-900 mb-3">Ore disponibile</h4>
                        <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                          {getAvailableTimeSlots().map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => {
                                setSelectedTime(time);
                                setValue("time", time);
                              }}
                              className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                                selectedTime === time
                                  ? "bg-pink-600 text-white"
                                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                        {getAvailableTimeSlots().length === 0 && (
                          <p className="text-gray-700 text-center py-4">
                            Nu sunt ore disponibile pentru această zi
                          </p>
                        )}
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                      Confirmă programarea
                    </h2>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Detalii programare</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Serviciu:</span>
                          <span className="font-medium">
                            {services.find(s => s.id === selectedService)?.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Specialist:</span>
                          <span className="font-medium">
                            {specialists.find(s => s.id === selectedSpecialist)?.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Data:</span>
                          <span className="font-medium">
                            {selectedDate && format(selectedDate, "d MMMM yyyy", { locale: ro })}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Ora:</span>
                          <span className="font-medium">{selectedTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Durată:</span>
                          <span className="font-medium">
                            {services.find(s => s.id === selectedService)?.duration} minute
                          </span>
                        </div>
                        <div className="flex justify-between font-semibold text-pink-600">
                          <span>Preț estimat:</span>
                          <span>{services.find(s => s.id === selectedService)?.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-800 mb-1">
                          Nume complet *
                        </label>
                        <input
                          {...register("name")}
                          type="text"
                          className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          placeholder="Maria Ionescu"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-800 mb-1">
                          Telefon *
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          placeholder="0700 000 000"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-1">
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="maria@exemplu.ro"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-1">
                        Observații (opțional)
                      </label>
                      <textarea
                        {...register("notes")}
                        rows={3}
                        className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                        placeholder="Informații adiționale despre programare..."
                      />
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex">
                        <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-yellow-800">
                            Politica de anulare
                          </h4>
                          <p className="text-sm text-yellow-700 mt-1">
                            Programările pot fi anulate cu minim 12 ore înainte. 
                            Pentru anulări târzii sau neprezentare se poate percepe o taxă.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-gray-800 font-medium"
                    >
                      <ChevronLeft className="h-5 w-5 mr-2" />
                      Înapoi
                    </button>
                  )}
                  
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={
                        (step === 1 && (!selectedService || !selectedSpecialist)) ||
                        (step === 2 && (!selectedDate || !selectedTime))
                      }
                      className="ml-auto flex items-center px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Continuă
                      <ChevronRight className="h-5 w-5 ml-2" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ml-auto flex items-center px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Se procesează...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Confirmă Programarea
                        </>
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            </form>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Programare Flexibilă</h3>
              <p className="text-gray-700">
                Alege data și ora care ți se potrivește cel mai bine din programul nostru extins
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Specialiști Dedicați</h3>
              <p className="text-gray-700">
                Alege specialistul preferat sau lasă-ne să îți recomandăm cel mai potrivit
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Confirmare Instant</h3>
              <p className="text-gray-700">
                Primești confirmarea programării imediat pe email cu toate detaliile
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}