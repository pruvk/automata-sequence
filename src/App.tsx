import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardAction, CardFooter } from "@/components/ui/card"
import { Sigma } from "lucide-react"
import ParticlesBg from "./components/particleBg"
import { Label } from "radix-ui"
import { Input } from "./components/ui/input"


export default function App() {
  const [currentView, setCurrentView] = useState<string>("menu")
  
  const sequences = [
  {
    id: "fibonacci",
    title: "Fibonacci Numbers",
    recursion:"Fₙ = Fₙ₋₁ + Fₙ₋₂",
    description: "The Fibonacci Numbers Fₙ have the initial values F₀ = 0, F₁ = 1",
    n: "If n ≥ 2"
  },
  {
    id: "lucas",
    title: "Lucas Numbers",
    recursion:"Lₙ = Lₙ₋₁ + Lₙ₋₂",
    description: "The Lucas Numbers Lₙ have the initial values L₀ = 2, L₁ = 1",
    n: "If n ≥ 2"
  },
  {
    id: "tribonacci",
    title: "Tribonacci Numbers",
    recursion:"Tₙ = Tₙ₋₁ + Tₙ₋₂ + Tₙ₋₃",
    description: "The Tribonacci Numbers Tₙ have the initial values T₀ = 0, T₁ = 0, T₂ = 1.",
    n: "If n ≥ 3"
  },
  ];


  if (currentView === "menu") {
    return (
      <div className="w-full flex flex-col items-center justify-center h-screen gap-20">
        <ParticlesBg/>
        <div className="w-2/3">
          <Card>
            <CardHeader className="flex flex-col items-center">
            <CardTitle className="font-extrabold text-xl">Recursive Sequence</CardTitle>
            <p className="font-medium">is a sequence which is defined as follows:</p>
            <CardContent className="my-2 mx-5 flex items-center justify-center rounded-md bg-taupe-100 px-2 py-1.5">
              <code className="font-medium">
                a₁, a₂, a₃, ..., aₙ, ...
              </code>
            </CardContent>
            <CardDescription className="flex flex-col gap-2 items-center">
              <p>I. A number of terms of the sequence a₁, a₂, ..., aᵣ are given. These are the initial values.</p>
              <p>II. A rule called the reccursion is given, which explains how aₙ</p>
            </CardDescription>
            </CardHeader>
          </Card>
        </div>


        <div className="flex w-2/3 items-center justify-center gap-5">
          {sequences.map ((item) => 
          <Card className="w-1/3" key={item.id}>
          <CardHeader className="flex flex-col items-center">
          <CardTitle className="font-extrabold text-xl">{item.title}</CardTitle>
          <CardContent className="my-2 mx-5 flex items-center justify-center rounded-md bg-taupe-100 px-2 py-1.5">
              <code className="font-medium">
                {item.recursion}
              </code>
            </CardContent>
          <CardDescription className="flex flex-col gap-2 items-center">
            <div>
              {item.description}
            </div>
            <div>
              {item.n}
            </div>
          </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full" onClick={() => setCurrentView(item.id)}>Solve now</Button>
          </CardFooter>
          </Card>
          )}
        </div>
      </div>
    )
  }  
  else {

    const activeSequence = sequences.find((item) => item.id === currentView);

    return (
      
      <div className="flex min-h-screen items-center justify-center p-4">
        <ParticlesBg />
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="capitalize">{currentView} Numbers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Sequence generator will go here...</p>
            <Button 
              variant="outline" 
              className="mt-6 text-black" 
              onClick={() => setCurrentView("menu")}
            >
              Back to Main Menu
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }
}