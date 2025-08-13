import { useState } from 'react';
import { Link } from 'react-router-dom';
import SquarePayment from '../components/SquarePayment';

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    registrationType: 'individual',
    isGeorgiaResident: false,
    sundaySongfest: false,
    johnWilliamsBanquet: false,
    needsHotel: false,
    paymentMethod: 'card'
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const calculateTotal = () => {
    let basePrice = 0;
    const isEarlyBird = new Date() < new Date('2025-12-31');
    
    if (formData.registrationType === 'individual') {
      if (formData.isGeorgiaResident) {
        basePrice = isEarlyBird ? 175 : 195;
      } else {
        basePrice = isEarlyBird ? 190 : 210;
      }
    } else if (formData.registrationType === 'group5') {
      basePrice = isEarlyBird ? 925 : 975;
    } else if (formData.registrationType === 'group10') {
      basePrice = isEarlyBird ? 1800 : 1925;
    }
    
    if (formData.johnWilliamsBanquet) basePrice += 75;
    
    return basePrice;
  };

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handlePaymentSuccess = (result: any) => {
    setPaymentCompleted(true);
    setPaymentError(null);
    console.log('Payment successful:', result);
    // You can now submit the registration since payment is complete
  };

  const handlePaymentError = (error: any) => {
    setPaymentError(error.message || 'Payment failed. Please try again.');
    setPaymentCompleted(false);
    console.error('Payment error:', error);
  };

  const handleSubmit = async () => {
    alert(`Registration submitted! Total: $${calculateTotal()}`);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      registrationType: 'individual',
      isGeorgiaResident: false,
      sundaySongfest: false,
      johnWilliamsBanquet: false,
      needsHotel: false,
      paymentMethod: 'card'
    });
    setCurrentStep(1);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/register" className="inline-flex items-center text-slate-600 hover:text-slate-800 mb-4">
            <span className="mr-2">←</span> Back to Registration Info
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Register for the 80th Annual Lectureship</h1>
          <p className="text-xl text-gray-600">Join us for five days of faith, fellowship, and spiritual growth in Atlanta</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step <= currentStep 
                    ? 'bg-slate-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step < currentStep ? 'bg-slate-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Personal Info</span>
            <span>Registration</span>
            <span>Special Events</span>
            <span>Payment</span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Street Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select State</option>
                    <option value="GA">Georgia</option>
                    <option value="AL">Alabama</option>
                    <option value="FL">Florida</option>
                    <option value="TN">Tennessee</option>
                    <option value="NC">North Carolina</option>
                    <option value="SC">South Carolina</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Registration Type */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Type</h2>
              
              {/* Georgia Resident Check */}
              <div className="mb-6 p-4 bg-slate-50 rounded-lg">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="isGeorgiaResident"
                    checked={formData.isGeorgiaResident}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
                  />
                  <span className="ml-2 text-sm font-semibold text-gray-700">
                    I am a Georgia resident (discounted rates available)
                  </span>
                </label>
              </div>

              {/* Registration Options */}
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-slate-400 transition-colors">
                  <label className="flex items-start">
                    <input
                      type="radio"
                      name="registrationType"
                      value="individual"
                      checked={formData.registrationType === 'individual'}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-slate-600 border-gray-300 focus:ring-slate-500"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-900">Individual Registration</span>
                        <span className="text-lg font-bold text-slate-600">
                          ${formData.isGeorgiaResident ? '175' : '190'} (Early Bird)
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Single person registration with full access to all sessions
                      </p>
                    </div>
                  </label>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:border-slate-400 transition-colors">
                  <label className="flex items-start">
                    <input
                      type="radio"
                      name="registrationType"
                      value="group5"
                      checked={formData.registrationType === 'group5'}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-slate-600 border-gray-300 focus:ring-slate-500"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-900">Group Registration (5 People)</span>
                        <span className="text-lg font-bold text-slate-600">$925 (Early Bird)</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Register 5 people together and save money
                      </p>
                    </div>
                  </label>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:border-slate-400 transition-colors">
                  <label className="flex items-start">
                    <input
                      type="radio"
                      name="registrationType"
                      value="group10"
                      checked={formData.registrationType === 'group10'}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-slate-600 border-gray-300 focus:ring-slate-500"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-900">Group Registration (10 People)</span>
                        <span className="text-lg font-bold text-slate-600">$1,800 (Early Bird)</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Register 10 people together for maximum savings
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Hotel Information */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Hotel Accommodation</h3>
                <label className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    name="needsHotel"
                    checked={formData.needsHotel}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
                  />
                  <span className="ml-2 text-sm font-semibold text-gray-700">
                    I need hotel accommodation at Courtland Grand Hotel ($159/night)
                  </span>
                </label>
                <p className="text-sm text-gray-600">
                  Call (888) 310-7807 to make reservations. Mention "Churches of Christ National Lectureship" for group rate.
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Special Events */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Special Events</h2>
              <p className="text-gray-600 mb-6">Select any special events you'd like to attend:</p>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="sundaySongfest"
                      checked={formData.sundaySongfest}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-900">Sunday Songfest</span>
                        <span className="text-lg font-bold text-green-600">FREE</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        March 8, 2026 • 4:30-6:00 PM • Beautiful congregational singing
                      </p>
                    </div>
                  </label>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="johnWilliamsBanquet"
                      checked={formData.johnWilliamsBanquet}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-900">John O. Williams Memorial Banquet</span>
                        <span className="text-lg font-bold text-slate-600">$75</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        March 12, 2026 • 6:00 PM • Memorial dinner celebration
                      </p>
                    </div>
                  </label>
                </div>

                {/* Women's Luncheon Info (On-site only) */}
                <div className="border border-amber-200 bg-amber-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center mt-0.5 mr-3">
                      <span className="text-white text-xs">ℹ</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-amber-800">Women's Luncheon</span>
                        <span className="text-lg font-bold text-amber-700">$60</span>
                      </div>
                      <p className="text-sm text-amber-700 mt-1">
                        March 11, 2026 • 12:00 PM • <strong>On-site registration only</strong> - Register when you arrive at the lectureship
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Information</h2>
              
              {/* Order Summary */}
              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Registration ({formData.registrationType})</span>
                    <span>${calculateTotal() - (formData.johnWilliamsBanquet ? 75 : 0)}</span>
                  </div>
                  {formData.sundaySongfest && (
                    <div className="flex justify-between">
                      <span>Sunday Songfest</span>
                      <span>FREE</span>
                    </div>
                  )}
                  {formData.johnWilliamsBanquet && (
                    <div className="flex justify-between">
                      <span>John O. Williams Banquet</span>
                      <span>$75</span>
                    </div>
                  )}
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${calculateTotal()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-slate-400 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-slate-600 border-gray-300 focus:ring-slate-500"
                    />
                    <span className="ml-3 font-semibold">💳 Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-slate-400 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="zelle"
                      checked={formData.paymentMethod === 'zelle'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-slate-600 border-gray-300 focus:ring-slate-500"
                    />
                    <span className="ml-3 font-semibold">⚡ Zelle</span>
                  </label>
                </div>
              </div>

              {/* Zelle Instructions */}
              {formData.paymentMethod === 'zelle' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Zelle Payment Instructions</h4>
                  <div className="text-sm text-blue-800 space-y-1">
                    <p><strong>Send payment to:</strong> cocnl1945@gmail.com</p>
                    <p><strong>Amount:</strong> ${calculateTotal()}</p>
                    <p><strong>Memo:</strong> Registration - {formData.firstName} {formData.lastName}</p>
                    <p className="text-xs text-blue-600 mt-2">
                      <strong>Important:</strong> Please include both "Registration" and your full name in the Zelle memo field. 
                      This helps us match your payment to your registration form.
                    </p>
                    <p className="text-xs text-blue-600">
                      Complete your Zelle payment before submitting this form. Your registration will be confirmed once payment is received.
                    </p>
                  </div>
                </div>
              )}

              {/* Credit Card Instructions */}
              {formData.paymentMethod === 'card' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-green-900 mb-4">Credit/Debit Card Payment</h4>
                  
                  {paymentError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                      <p className="text-red-800 text-sm">
                        <strong>Payment Error:</strong> {paymentError}
                      </p>
                    </div>
                  )}

                  {paymentCompleted ? (
                    <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                      <div className="flex items-center">
                        <span className="text-green-600 text-2xl mr-3">✅</span>
                        <div>
                          <p className="text-green-800 font-semibold">Payment Successful!</p>
                          <p className="text-green-700 text-sm">Your payment of ${calculateTotal()} has been processed.</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <SquarePayment
                      amount={calculateTotal()}
                      customerInfo={{
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        email: formData.email,
                      }}
                      onPaymentSuccess={handlePaymentSuccess}
                      onPaymentError={handlePaymentError}
                    />
                  )}
                  
                  <div className="mt-4 pt-3 border-t border-green-300">
                    <p className="text-xs text-green-600">
                      <strong>Alternative:</strong> Call <strong>(800) 609-6211</strong> to process your credit card payment over the phone.
                    </p>
                  </div>
                </div>
              )}

              {/* Payment Integration */}
              <div className="bg-gradient-to-r from-slate-100 to-gray-100 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Your Registration</h3>
                <p className="text-gray-600 mb-4">
                  {formData.paymentMethod === 'zelle' 
                    ? 'Please complete your Zelle payment as instructed above, then submit your registration.'
                    : 'Your registration will be submitted and you will receive payment instructions via email.'
                  }
                </p>
                <button 
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Submit Registration - ${calculateTotal()}
                </button>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>
            
            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                disabled={currentStep === 4 && formData.paymentMethod === 'card' && !paymentCompleted}
                className={`font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 ${
                  currentStep === 4 && formData.paymentMethod === 'card' && !paymentCompleted
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white'
                }`}
              >
                {currentStep === 4 && formData.paymentMethod === 'card' && !paymentCompleted
                  ? 'Complete Payment First'
                  : 'Next Step'
                }
              </button>
            ) : (
              <div className="text-sm text-gray-500">
                {formData.paymentMethod === 'card' && !paymentCompleted
                  ? 'Complete payment above to finish registration'
                  : formData.paymentMethod === 'zelle'
                  ? 'Complete Zelle payment as instructed above, then submit registration'
                  : 'Ready to submit registration'
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;