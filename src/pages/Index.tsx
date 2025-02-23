
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-semibold">Welcome back!</h1>
          <p className="text-gray-600 text-sm mt-1">Ready for your workout?</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto pb-24">
        {/* Workout Types */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-3">Workout Types</h2>
          <div className="grid grid-cols-3 gap-3">
            {workoutTypes.map((type, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex flex-col items-center justify-center py-6 h-auto bg-white hover:bg-primary/5 hover:text-primary transition-colors border-gray-200"
              >
                {type.icon}
                <span className="mt-2 text-xs font-medium">{type.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Trending Workouts */}
        <div className="px-4">
          <h2 className="text-lg font-semibold mb-3">Trending Workouts</h2>
          <div className="space-y-3">
            {trendingWorkouts.map((workout, index) => (
              <Card key={index} className="overflow-hidden border-gray-200">
                <div className="flex items-center">
                  <div className="h-20 w-24 flex-shrink-0">
                    <img
                      src={`/${workout.image}`}
                      alt={workout.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm">{workout.title}</h3>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>{workout.duration}</span>
                      <span className="mx-2">•</span>
                      <span>{workout.difficulty}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 px-4">
        <Button variant="ghost" size="sm" className="flex flex-col items-center min-w-[4rem]">
          <HomeIcon className="h-5 w-5" />
          <span className="text-[10px] mt-1">Home</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex flex-col items-center min-w-[4rem]">
          <DumbbellIcon className="h-5 w-5" />
          <span className="text-[10px] mt-1">Workouts</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex flex-col items-center min-w-[4rem]">
          <BarChart3Icon className="h-5 w-5" />
          <span className="text-[10px] mt-1">Progress</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex flex-col items-center min-w-[4rem]">
          <UserIcon className="h-5 w-5" />
          <span className="text-[10px] mt-1">Profile</span>
        </Button>
      </div>
    </div>
  );
};

export default Index;
