import { pageTransition } from "@/publicSite/motion/variants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Story from "../../assets/ourStory.jpg";
import AppDemo from "../../assets/voima_website_prototype_01.mp4";
export default function About() {
  return (
    <motion.main
      {...pageTransition}
      className="overflow-hidden bg-[#fff] pt-[90px]"
    >
      {/* HERO */}
      <section className="relative px-6 py-28">
        
        {/* Glow 
        <div className="absolute left-[-10%] top-0 h-[320px] w-[320px] rounded-full bg-[#F47B3A]/10 blur-3xl"></div> */}

        <div className="relative mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
          
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F47B3A]">
              Who We Are
            </p>

            <h1 className="mt-6 max-w-2xl text-6xl font-bold leading-tight text-[#800000]">
              Building healthier communities through
              innovation, advocacy & impact.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-black/65">
              Voima Initiative exists to create proactive,
              compassionate, and sustainable healthcare
              support systems for individuals and
              underserved communities affected by
              chronic conditions like sickle cell disease.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/" className="rounded-full bg-[#F47B3A] px-7 py-4 text-sm font-semibold text-white transition hover:scale-[1.02]">
                Join Our Mission
              </Link>

              <Link to="/" className="rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#800000] hover:text-white">
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#F47B3A]/10 blur-3xl"></div>

            <div className="overflow-hidden rounded-[40px] border border-black/5 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              <img
                src= { Story }
                alt="Voima Initiative"
                className="h-[620px] w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 rounded-[28px] border border-white/20 bg-white/80 p-6 backdrop-blur-xl">
              <p className="text-4xl font-bold text-[#800000] font-display">
                10K+
              </p>

              <p className="mt-2 text-sm leading-7 text-black/60">
                Communities reached through advocacy,
                education & outreach programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
          
          {/* Image */}
          <div className="overflow-hidden rounded-[40px] border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <img
              src= { Story }
              alt="Our Story"
              className="h-[560px] w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F47B3A]">
              Our Story
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-[#800000]">
              A mission born from lived experience.
            </h2>

            <p className="mt-8 text-lg leading-9 text-black/65">
              Voima Initiative was founded with a deep
              commitment to ensuring that no individual
              or family faces chronic illness without
              support, access to information, and a
              caring community.
            </p>

            <p className="mt-6 text-lg leading-9 text-black/65">
              Through innovation, education, outreach,
              and technology, we are creating a future
              where healthcare becomes more accessible,
              proactive, and inclusive for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="relative overflow-hidden bg-white px-6 py-32">
        
        {/* Background Glow 
        <div className="absolute right-[-10%] top-0 h-[320px] w-[320px] rounded-full bg-[#F47B3A]/10 blur-3xl"></div>*/}

        <div className="mx-auto max-w-7xl">
          
          {/* Header */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F47B3A]">
              Mission & Vision
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-primary-800">
              Creating a future where healthcare
              becomes more proactive,
              inclusive & human-centered.
            </h2>

            <p className="mt-8 text-lg leading-9 text-black/65">
              Voima Initiative is building long-term systems
              of support through technology, research,
              advocacy, and community-driven healthcare innovation.
            </p>
          </div>

          {/* Main Grid */}
          <div className="mt-24 grid gap-10 lg:grid-cols-2">
            
            {/* Mission */}
            <div className="relative overflow-hidden rounded-[40px] bg-[#800000] p-12 text-white">
              
              {/* Glow */}
              <div className="absolute right-[-60px] top-[-60px] h-[220px] w-[220px] rounded-full bg-white/10 blur-3xl"></div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Our Mission
              </p>

              <h3 className="mt-6 max-w-md text-4xl font-bold leading-tight text-white">
                Empowering communities through proactive healthcare support.
              </h3>

              <p className="mt-8 leading-9 text-white/75">
                Our mission is to improve the quality of life
                for individuals living with chronic conditions
                by creating accessible tools, education systems,
                digital healthcare experiences, and compassionate
                support networks.
              </p>

              <p className="mt-6 leading-9 text-white/75">
                We believe healthcare should not only respond
                to emergencies — it should help people live
                healthier lives every single day through
                prevention, awareness, technology, and community.
              </p>
            </div>

            {/* Vision */}
            <div className="relative overflow-hidden rounded-[40px] bg-[#F47B3A] p-12 text-white">
              
              {/* Glow */}
              <div className="absolute left-[-60px] bottom-[-60px] h-[220px] w-[220px] rounded-full bg-white/10 blur-3xl"></div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Our Vision
              </p>

              <h3 className="mt-6 max-w-md text-4xl font-bold leading-tight text-white">
                A world where everyone has the tools to thrive.
              </h3>

              <p className="mt-8 leading-9 text-white/80">
                We envision a future where healthcare inequities
                are reduced and underserved communities gain
                access to the support, education, and technology
                needed to live healthier and more empowered lives.
              </p>

              <p className="mt-6 leading-9 text-white/80">
                Through collaboration, innovation, and advocacy,
                Voima Initiative aims to transform how chronic
                conditions are managed across Africa and beyond.
              </p>
            </div>
          </div>

          {/* TRACE Banner */}
          <div
            className="
              relative mt-14 overflow-hidden
              rounded-[40px] border border-black/5
              bg-[#fafafa] p-10
            "
          >
            
            {/* Glow */}
            <div className="absolute right-0 top-0 h-[200px] w-[200px] rounded-full bg-[#F47B3A]/10 blur-3xl"></div>

            <div className="relative z-10">
              
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F47B3A]">
                #TRACE Framework
              </p>

              <h3 className="mt-5 text-4xl font-bold leading-tight text-primary-800">
                The pillars driving our impact.
              </h3>

              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                
                {[
                  {
                    title: "Technology",
                    desc: "Building digital tools that improve access to healthcare support.",
                  },
                  {
                    title: "Research",
                    desc: "Using data and lived experiences to shape better solutions.",
                  },
                  {
                    title: "Advocacy",
                    desc: "Amplifying awareness around sickle cell and chronic illnesses.",
                  },
                  {
                    title: "Community",
                    desc: "Creating strong support systems and meaningful human connection.",
                  },
                  {
                    title: "Education",
                    desc: "Empowering individuals through knowledge and health literacy.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      rounded-[28px]
                      border border-black/5
                      bg-white p-6
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                    "
                  >
                    <h4 className="text-xl font-bold text-primary-800 font-display">
                      {item.title}
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-black/60">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APP */}
      <section className="relative overflow-hidden bg-white px-6 py-32">
        
        {/* Glow 
        <div className="absolute left-[-10%] top-0 h-[320px] w-[320px] rounded-full bg-[#F47B3A]/10 blur-3xl"></div>*/}

        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F47B3A]">
              Our App
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-primary-800">
              Smart healthcare support designed for everyday life.
            </h2>

            <p className="mt-8 text-lg leading-9 text-black/65">
              Voima is building a digital healthcare ecosystem
              that empowers individuals living with chronic
              conditions through intelligent tracking,
              reminders, wellness insights, education,
              and community support.
            </p>

            {/* Features */}
            <div className="mt-10 grid gap-5">
              {[
                "AI-powered support assistant",
                "Medication & hydration reminders",
                "Wellness & pain tracking",
                "Emergency health access",
                "Community engagement tools",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="h-3 w-3 rounded-full bg-[#F47B3A]"></div>

                  <p className="text-black/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link to=""
              className="
                mt-16 inline-block rounded-full 
                bg-[#F47B3A]
                px-7 py-4 text-sm font-semibold
                text-white transition
                hover:scale-[1.02]
              "
            >
              Explore The Platform
            </Link>
          </div>

          {/* Right App Showcase */}
          <div className="relative flex items-center justify-center">
            
            {/* Background Rings */}
            <div className="absolute h-[540px] w-[540px] rounded-full border border-[#F47B3A]/30"></div>

            <div className="absolute h-[420px] w-[420px] rounded-full border border-[#F47B3A]/30"></div>

            {/* Floating Card 1 */}
            <div
              className="
                absolute left-0 top-20 z-20
                rounded-[28px]
                border border-white/20
                bg-white/70 p-5
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                backdrop-blur-xl
              "
            >
              <p className="text-3xl font-bold text-[#800000] font-display">
                24/7
              </p>

              <p className="mt-1 text-sm text-black/60">
                Smart Health Support
              </p>
            </div>

            {/* Floating Card 2 */}
            <div
              className="
                absolute bottom-16 right-0 z-20
                rounded-[28px]
                border border-white/20
                bg-white/70 p-5
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                backdrop-blur-xl
              "
            >
              <p className="text-3xl font-bold text-[#F47B3A] font-display">
                AI
              </p>

              <p className="mt-1 text-sm text-black/60">
                Personalized Insights
              </p>
            </div>

            {/* Phone Mockup */}
            <div
              className="
                relative z-10
                h-[650px] w-[320px]
                rounded-[50px]
                border-[10px] border-black
                bg-black
                shadow-[0_40px_120px_rgba(0,0,0,0.18)]
              "
            >
            {/* Top Notch */}
            <div
              className="
                absolute left-1/2 top-3
                z-20 h-7 w-30
                -translate-x-1/2
                rounded-full bg-black
              "
            />
              {/* Screen */}
              <div className="relative h-full overflow-hidden rounded-[40px] bg-black">
                
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                >
                  <source
                    src= { AppDemo }
                    type="video/mp4"
                  />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}