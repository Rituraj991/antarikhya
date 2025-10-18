import React from 'react';
import { Users, Star, Zap, Camera, MessageCircle, Video, Settings } from 'lucide-react';

const Team = () => {
  const advisors = [
    { name: "Dhrubajyoti Biswas", role: "Club Advisor" },
    { name: "Ankur Kaman", role: "Club Advisor" },
    { name: "Satarupa Roy Choudhary", role: "Club Advisor" },
    { name: "Hridayanshu Borah", role: "Club Advisor" }
  ];

  const overallCoordinators = [
    { name: "Sandeep Roy", role: "Overall Coordinator" },
    { name: "Ritu Raj Bora", role: "Overall Coordinator" },
    { name: "Doly Barman", role: "Overall Coordinator" }
  ];

  const teams = [
    {
      name: "Technical Team",
      icon: Zap,
      color: "primary",
      leads: ["Shobhitya Raj Borah", "Rituraj Kalita"],
      coordinators: ["Dipankar Dutta"]
    },
    {
      name: "Astronomy Team",
      icon: Star,
      color: "secondary",
      leads: ["Bhaswat Sundar Das", "Ruhil Chetia"],
      coordinators: ["Princi Priya Borgohain", "Dipsikha Rai", "Prabal Hazarika", "Harshita Gogoi"]
    },
    {
      name: "Design Team",
      icon: Camera,
      color: "accent",
      leads: ["Bhabeen Bhargab Saikia", "Ritu Raj Bora"],
      coordinators: ["Chumtila A Sangtam", "Arpita Priyam Saikia", "Pragya Mili"]
    },
    {
      name: "Public Relations Team",
      icon: MessageCircle,
      color: "primary",
      leads: ["Upasana Sharma", "Himanshu Bharali"],
      coordinators: ["Raj Borah", "Ananya Borah", "Riya Saikia", "Sringdi Thaosen"]
    },
    {
      name: "Social Media Team",
      icon: Users,
      color: "secondary",
      leads: ["Dikshita Kashyap", "Prity Rani Basumatary"],
      coordinators: ["Vivek Sharma", "Suhani Chutia", "Nistha Gogoi"]
    },
    {
      name: "Video Editing Team",
      icon: Video,
      color: "accent",
      leads: ["Aniket Paul", "Yuvaraj Burhagohain"],
      coordinators: ["Pervez Mohsin Ahmed", "Hrimanjaay Chakrabarty", "Ananya Das"]
    },
    {
      name: "Management Team",
      icon: Settings,
      color: "primary",
      leads: ["Sneha Hazarika", "Rahul Chetry"],
      coordinators: ["Sayasta Saireen", "Sumanta Bhargab", "Orin Kashyap", "Mokib Roboz"]
    }
  ];

  return (
    <section id="team" className="section-elegant bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Meet the dedicated individuals who make ANTARIKHYA a thriving community of space enthusiasts and cosmic explorers
          </p>
        </div>

        {/* Advisors Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">Club Advisors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="glass-card p-8 text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-3 text-gradient">{advisor.name}</h4>
                <p className="text-sm text-muted-foreground font-medium">{advisor.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Overall Coordinators */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-secondary">Overall Coordinators</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {overallCoordinators.map((coordinator, index) => (
              <div key={index} className="glass-card p-8 text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-12 h-12 text-secondary" />
                </div>
                <h4 className="font-semibold text-lg mb-3 text-gradient">{coordinator.name}</h4>
                <p className="text-sm text-muted-foreground font-medium">{coordinator.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teams.map((team, index) => (
            <div key={index} className="glass-card p-10 group slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${team.color}/20 to-${team.color}/10 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
                  <team.icon className={`w-8 h-8 text-${team.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gradient">{team.name}</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm text-accent mb-4 uppercase tracking-wide">Team Leads</h4>
                  <div className="flex flex-wrap gap-3">
                    {team.leads.map((lead, leadIndex) => (
                      <span key={leadIndex} className="bg-primary/10 text-primary px-4 py-2 rounded-xl text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors">
                        {lead}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-accent mb-4 uppercase tracking-wide">Coordinators</h4>
                  <div className="flex flex-wrap gap-3">
                    {team.coordinators.map((coordinator, coordIndex) => (
                      <span key={coordIndex} className="bg-secondary/10 text-secondary px-4 py-2 rounded-xl text-sm font-medium border border-secondary/20 hover:bg-secondary/20 transition-colors">
                        {coordinator}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;