
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  HomeIcon,
  Search,
  FileText,
  UserIcon,
  BellIcon,
  Star,
  Clock,
  Flame
} from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const workoutTypes = [
    {
      name: "Hiit",
      sessions: "12 session",
      image: "lovable-uploads/f1c1dd3c-d538-47bc-bff3-4bcdf0b1bc5f.png"
    },
    {
      name: "Amrap",
      sessions: "15 session",
      image: "lovable-uploads/f1c1dd3c-d538-47bc-bff3-4bcdf0b1bc5f.png"
    },
    {
      name: "Focus",
      sessions: "8 session",
      image: "lovable-uploads/f1c1dd3c-d538-47bc-bff3-4bcdf0b1bc5f.png"
    }
  ];

  const trendingWorkouts = [
    {
      title: "Push Your Limit",
      image: "lovable-uploads/f1c1dd3c-d538-47bc-bff3-4bcdf0b1bc5f.png",
      tags: ["Beginner", "Full body"],
      kcal: 360,
      duration: "1h 25min",
      rating: 4.8
    }
  ];

  return (
    <div className="min-h-screen bg-white px-4 pb-20">
      {/* Header */}
      <div className="pt-12 space-y-1">
        <p className="text-gray-600">Hello, Artur!</p>
        <h1 className="text-2xl font-bold">Stay Fit & Healthy</h1>
      </div>

      {/* Notification Icon */}
      <div className="absolute top-12 right-4">
        <Button variant="ghost" size="icon" className="relative">
          <BellIcon className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </Button>
      </div>

      {/* Trending Workouts */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            Trending Workouts <Flame className="text-orange-500 h-5 w-5" />
          </h2>
          <button className="text-gray-500">View all</button>
        </div>

        <div className="space-y-4">
          {trendingWorkouts.map((workout, index) => (
            <Card key={index} className="overflow-hidden rounded-2xl border-0">
              <div className="relative aspect-[16/9]">
                <img
                  src={`/${workout.image}`}
                  alt={workout.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {workout.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{workout.title}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{workout.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Flame className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{workout.kcal} kcal</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{workout.duration}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Workout Types */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Workout types</h2>
          <button className="text-gray-500">View all</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {workoutTypes.map((type, index) => (
            <Card 
              key={index}
              className={cn(
                "relative overflow-hidden rounded-2xl border-0 aspect-[4/3]",
                index === 2 && "col-span-2"
              )}
            >
              <img
                src={`/${type.image}`}
                alt={type.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">{type.name}</h3>
                <p className="text-white/80">{type.sessions}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Training */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Additional training</h2>
        <Card className="flex items-center gap-4 p-4 rounded-2xl border-0">
          <div className="h-16 w-16 rounded-xl overflow-hidden flex-shrink-0">
            <img
              src="/lovable-uploads/f1c1dd3c-d538-47bc-bff3-4bcdf0b1bc5f.png"
              alt="Deep Amrap Burner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-lg">Deep Amrap Burner</h3>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Flame className="h-4 w-4 text-green-500" />
                <span>125 kcal</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-green-500" />
                <span>15min</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-1">Beginner - Full body</p>
          </div>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <HomeIcon className="h-6 w-6 text-green-500" />
            <span className="text-xs text-green-500">Home</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <Search className="h-6 w-6 text-gray-400" />
            <span className="text-xs text-gray-400">Search</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <FileText className="h-6 w-6 text-gray-400" />
            <span className="text-xs text-gray-400">Article</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <UserIcon className="h-6 w-6 text-gray-400" />
            <span className="text-xs text-gray-400">Profile</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
