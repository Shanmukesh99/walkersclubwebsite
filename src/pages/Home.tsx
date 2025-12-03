import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Heart, Award } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import { api } from "@/services/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MeetingTicker from "@/pages/MeetingTicker";


interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    api.getUpcomingEvents().then(setEvents);
  }, []);

  const features = [
    {
      icon: Users,
      title: "Community",
      description: "Join a vibrant community of health-conscious individuals",
    },
    {
      icon: Heart,
      title: "Health",
      description: "Improve your physical and mental well-being through walking",
    },
    {
      icon: Calendar,
      title: "Regular Events",
      description: "Participate in organized walks and social gatherings",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Be part of an internationally recognized walking movement",
    },
  ];

  return (
    <div>
      <HeroCarousel />

  


      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
       <h1 className="
  text-4xl md:text-5xl font-bold mb-8 leading-tight 
  bg-gradient-to-r from-green-600 to-blue-600 
  bg-clip-text text-transparent
  drop-shadow-md
">
  HEALTH IS WEALTH – WALK YOUR WAY TO HEALTH
</h1>
  
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Welcome to Walkers Club Visakhapatnam
            </h2>
            <p className="text-xl text-black leading-relaxed max-w-3xl mx-auto">
              We are a dedicated community promoting health, wellness, and friendship through the simple yet
              powerful activity of walking. Join us in our mission to create a healthier world.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-card/50 backdrop-blur-sm hover:bg-card/80">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/80 to-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="text-primary-foreground" size={28} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events
      <section className="py-0 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Upcoming Events</h2>
            <p className="text-xl text-black max-w-2xl mx-auto">Join us for our next walks and meetings</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                className="group"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-card/50 backdrop-blur-sm hover:bg-card/80 h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-3 text-xl font-semibold">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/80 to-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="text-primary-foreground" size={20} />
                      </div>
                      <span className="text-foreground">{event.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-foreground min-w-[60px]">Date:</span>
                        <span className="text-black">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-foreground min-w-[60px]">Time:</span>
                        <span className="text-black">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-foreground min-w-[60px]">Location:</span>
                        <span className="text-black">{event.location}</span>
                      </div>
                      <p className="text-black mt-4 leading-relaxed">{event.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Journey Section */}
      <section id="our-journey" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Journey</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-black leading-relaxed mb-4">
                Walkers Club Visakhapatnam has been a cornerstone of the local health and wellness community
                for years. Established with the mission to promote active living through walking, our club
                has grown into a family of dedicated members who share a passion for health and friendship.
              </p>
              <p className="text-black leading-relaxed">
                From our early morning walks along Beach Road to community events that bring together people
                from all walks of life, we have created a vibrant community that celebrates wellness,
                camaraderie, and the beauty of our coastal city.
              </p>
            </div>
          </motion.div>
        </div>
      </section>




      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Ready to Start Your Journey?</h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed">
              Become a member of Walkers Club Visakhapatnam and take the first step towards a healthier,
              more active lifestyle.
            </p>
            <motion.a
              href="/become-member"
              className="inline-flex items-center bg-primary-foreground text-primary px-10 py-5 rounded-xl font-semibold text-lg hover:bg-primary-foreground/90 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Us Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
