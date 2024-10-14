import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Vajra Dynamics Hero"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center">
          <h1 className="font-rajdhani text-5xl md:text-7xl font-bold mb-4">Vajra Dynamics</h1>
          <p className="text-xl md:text-2xl mb-8">Forging Indestructible Defense Solutions</p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <Link href="/solutions">Our Solutions</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Connect with Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Technologies Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-rajdhani text-4xl font-bold text-center mb-12">Key Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['UAVs / Drones', 'Unmanned Surface Vessels', 'Unmanned Underwater Vehicles', 'Loitering Munitions'].map((tech, index) => (
              <div key={index} className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
                <h3 className="font-rajdhani text-xl font-semibold mb-4">{tech}</h3>
                <p className="text-sm">Cutting-edge {tech.toLowerCase()} designed for maximum efficiency and reliability in defense operations.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Vajra Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="font-rajdhani text-4xl font-bold mb-4">About Vajra Dynamics</h2>
              <p className="mb-4">Vajra Dynamics is at the forefront of unmanned defense technology, embodying the indestructible power of the vajra in our innovative solutions.</p>
              <p>Our commitment to excellence and cutting-edge research drives us to create the most advanced unmanned systems for India's defense needs.</p>
              <Button asChild className="mt-6">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="relative w-full h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Vajra Dynamics Technology"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-rajdhani text-4xl font-bold text-center mb-12">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Vajra Dynamics Unveils Next-Gen UAV", date: "June 15, 2023" },
              { title: "Partnership with Indian Navy Announced", date: "May 22, 2023" },
              { title: "Vajra's UUV Completes Deep Sea Trials", date: "April 8, 2023" }
            ].map((news, index) => (
              <div key={index} className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
                <h3 className="font-rajdhani text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{news.date}</p>
                <Button asChild variant="outline">
                  <Link href="/newsroom">Read More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}