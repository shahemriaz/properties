import ContactForm from '@/components/ContactForm'
import Map from '@/components/Map'

export default function ContactPage() {
  const officeLocation = {
    lat: 31.4504, // Bahria Town, Lahore coordinates
    lng: 74.1350,
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="container-custom py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Office Location</h3>
                <p className="text-gray-600">
                  Bahria Town, Lahore<br />
                  Punjab, Pakistan
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p className="text-gray-600">+92 323 4607217</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-gray-600">info@paklahoreproperty.com</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
          <Map center={officeLocation} />
        </div>
      </div>
    </div>
  )
} 