import Navbar from "@/components/navbar"

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8">
      <Navbar />
      <div className="mt-20 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">Get in touch with our team.</p>
      </div>
    </main>
  )
}
