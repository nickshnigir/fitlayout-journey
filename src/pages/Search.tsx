
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Flame, Clock, ChevronLeft, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const Search = () => {
  const workouts = [
    {
      title: "Deep Crazy",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80",
      kcal: 125,
      duration: "15min",
      level: "Beginner",
      bodyPart: "Full body"
    },
    {
      title: "Deep Amrap Burner",
      image: "https://images.unsplash.com/photo-1609899537878-29956d2d3971?auto=format&fit=crop&q=80",
      kcal: 125,
      duration: "15min",
      level: "Beginner",
      bodyPart: "Full body"
    },
    {
      title: "Deep Butt Sculp",
      image: "https://images.unsplash.com/photo-1604480132736-44c188fe3d20?auto=format&fit=crop&q=80",
      kcal: 88,
      duration: "30min",
      level: "Beginner",
      bodyPart: "Lower body"
    },
    {
      title: "Deep Amrap Killer",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80",
      kcal: 250,
      duration: "25min",
      level: "Intermediate",
      bodyPart: "Upper body"
    },
    {
      title: "Deep Amrap Blaster",
      image: "https://images.unsplash.com/photo-1632781297772-1d68f375d878?auto=format&fit=crop&q=80",
      kcal: 125,
      duration: "15min",
      level: "Intermediate",
      bodyPart: "Full body"
    }
  ];

  const filters = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white z-50">
        <div className="flex items-center px-4 pt-12 pb-4">
          <Link to="/home">
            <Button variant="ghost" size="icon" className="mr-2">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold flex-1 text-center pr-10">Search</h1>
        </div>

        {/* Search Input */}
        <div className="px-4 mb-4">
          <div className="relative">
            <Input 
              placeholder="Deep"
              className="w-full h-12 pl-12 pr-12 rounded-2xl border-green-400 bg-gray-50"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 17.5L13.875 13.875" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2">
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 px-4 overflow-x-auto pb-4">
          {filters.map((filter, index) => (
            <Button
              key={filter}
              variant={index === 0 ? "default" : "outline"}
              className={`rounded-full px-6 ${index === 0 ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-50 text-gray-900'}`}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      {/* Workout List */}
      <div className="px-4 space-y-4">
        {workouts.map((workout, index) => (
          <Card key={index} className="flex items-center gap-4 p-4 rounded-2xl border-0">
            <div className="h-20 w-20 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={workout.image}
                alt={workout.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-lg mb-1">{workout.title}</h3>
              <div className="flex items-center gap-4 text-sm mb-1">
                <div className="flex items-center gap-1">
                  <Flame className="h-4 w-4 text-green-500" />
                  <span className="text-gray-600">{workout.kcal} kcal</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-green-500" />
                  <span className="text-gray-600">{workout.duration}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">{workout.level} - {workout.bodyPart}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Search;
