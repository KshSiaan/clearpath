import Navbar from "@/components/navbar"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8">
      <Navbar />
      <div className="mt-20 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">Learn more about our company.</p>
      </div>
    </main>
  )
}
