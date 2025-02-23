
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  HomeIcon,
  DumbbellIcon,
  BarChart3Icon,
  UserIcon,
  TrendingUpIcon,
  Dumbbell,
} from "lucide-react";

const Index = () => {
  const workoutTypes = [
    { name: "Strength", icon: <DumbbellIcon className="h-6 w-6" /> },
    { name: "Cardio", icon: <TrendingUpIcon className="h-6 w-6" /> },
    { name: "Flexibility", icon: <Dumbbell className="h-6 w-6" /> },
  ];

  const trendingWorkouts = [
    {
      title: "Full Body Workout",
      duration: "45 min",
      difficulty: "Intermediate",
      image: "photo-1485833077593-4278bba3f11f",
    },
    {
      title: "HIIT Training",
      duration: "30 min",
      difficulty: "Advanced",
      image: "photo-1438565434616-3ef039228b15",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">Welcome back!</h1>
        <p className="text-gray-600">Ready for your workout?</p>
      </div>

      {/* Workout Types */}
      <div className="px-6 py-8">
        <h2 className="text-xl font-semibold mb-4">Workout Types</h2>
        <div className="grid grid-cols-3 gap-4">
          {workoutTypes.map((type, index) => (
            <Button
              key={index}
              variant="outline"
              className="flex flex-col items-center justify-center p-4 h-24 hover:bg-primary hover:text-white transition-colors"
            >
              {type.icon}
              <span className="mt-2 text-sm">{type.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Trending Workouts */}
      <div className="px-6">
        <h2 className="text-xl font-semibold mb-4">Trending Workouts</h2>
        <div className="space-y-4">
          {trendingWorkouts.map((workout, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img
                  src={`/${workout.image}`}
                  alt={workout.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{workout.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mt-2">
                  <span>{workout.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{workout.difficulty}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-4">
        <Button variant="ghost" className="flex flex-col items-center">
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <DumbbellIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Workouts</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <BarChart3Icon className="h-6 w-6" />
          <span className="text-xs mt-1">Progress</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center">
          <UserIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Profile</span>
        </Button>
      </div>
    </div>
  );
};

export default Index;
