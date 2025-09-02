"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HelloWorld() {
  const [clickCount, setClickCount] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    setClickCount(prev => prev + 1)
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <Card 
        className="w-full max-w-md mx-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">👋</span>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hello, World!
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Welcome to your simple Hello World application built with Next.js and shadcn/ui
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="secondary">Next.js 15</Badge>
            <Badge variant="secondary">React 19</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">shadcn/ui</Badge>
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Click the button below to interact with the app
            </p>
            
            <Button 
              onClick={handleClick}
              className={`w-full transition-all duration-200 ${isHovered ? 'transform scale-105' : ''}`}
              size="lg"
            >
              Click me! 
              {clickCount > 0 && (
                <Badge variant="outline" className="ml-2">
                  {clickCount}
                </Badge>
              )}
            </Button>
            
            {clickCount > 0 && (
              <div className="animate-in fade-in-50 duration-500">
                <p className="text-sm text-green-600 font-medium">
                  Great! You've clicked {clickCount} time{clickCount !== 1 ? 's' : ''}
                </p>
              </div>
            )}
            
            {clickCount >= 5 && (
              <div className="animate-in slide-in-from-bottom-4 duration-500">
                <p className="text-sm text-purple-600 font-medium">
                  🎉 Awesome! You're really getting the hang of this!
                </p>
              </div>
            )}
          </div>
          
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-center text-muted-foreground">
              Built with modern web technologies for a fast and smooth experience
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}