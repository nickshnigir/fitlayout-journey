
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/86a827a0-fa74-4a45-b9c3-f5f074b5a38b.png"
          alt="Fitness background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Status Bar */}
      <div className="relative z-10 flex justify-between items-center px-4 pt-3 pb-2">
        <span className="text-lg font-medium text-black">9:41</span>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" className="w-full h-full text-black">
              <path
                fill="currentColor"
                d="M12 21.5c5.523 0 10-4.477 10-10S17.523 1.5 12 1.5 2 5.977 2 11.5s4.477 10 10 10Z"
                fillOpacity=".4"
              />
              <path
                fill="currentColor"
                d="M15.5 11.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5S10.067 8 12 8s3.5 1.567 3.5 3.5Z"
              />
            </svg>
          </div>
          <div className="w-4 h-4">
            <svg viewBox="0 0 24 24" className="w-full h-full text-black">
              <path
                fill="currentColor"
                d="M6.67 4H4.33C3.6 4 3 4.6 3 5.33v13.33C3 19.4 3.6 20 4.33 20h2.34c.73 0 1.33-.6 1.33-1.33V5.33C8 4.6 7.4 4 6.67 4ZM13.67 4h-2.34C10.6 4 10 4.6 10 5.33v13.33c0 .74.6 1.34 1.33 1.34h2.34c.73 0 1.33-.6 1.33-1.33V5.33C15 4.6 14.4 4 13.67 4ZM20.67 4h-2.34C17.6 4 17 4.6 17 5.33v13.33c0 .74.6 1.34 1.33 1.34h2.34c.73 0 1.33-.6 1.33-1.33V5.33C22 4.6 21.4 4 20.67 4Z"
              />
            </svg>
          </div>
          <div className="w-6 h-3 rounded-sm relative">
            <div className="absolute inset-0 border-2 border-black rounded-sm"></div>
            <div className="absolute inset-0.5 bg-black rounded-sm" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-20 px-6 mt-auto min-h-screen">
        <h1 className="text-[42px] font-bold leading-tight mb-3 text-black">
          Welcome to Cult fitness
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-lg">
            Lets start the journey to make you fit.
          </p>
          <Button 
            size="icon" 
            className="h-12 w-12 rounded-full bg-green-500 hover:bg-green-600"
            onClick={() => navigate("/home")}
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-200 rounded-full mt-8">
          <div className="w-1/3 h-full bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
