import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted:", inputValue);
    setInputValue("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h2 className="text-2xl font-bold">Hello! Welcome to My Application</h2>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">My Application</h1>
        
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Input Form</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="text"
              placeholder="Enter something..."
              value={inputValue}
              onChange={handleInputChange}
            />
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit}>Submit</Button>
          </CardFooter>
        </Card>
      </main>

      <footer className="mt-auto">
        <Separator />
        <div className="container mx-auto p-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} My Application. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;