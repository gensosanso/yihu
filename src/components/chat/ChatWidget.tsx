import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X, Minimize2, Maximize2 } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatWidgetProps {
  isOpen?: boolean;
  onClose?: () => void;
  agentName?: string;
  agentAvatar?: string;
}

const ChatWidget = ({
  isOpen = true,
  onClose = () => {},
  agentName = "Sarah",
  agentAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
}: ChatWidgetProps) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! How can I help you with your travel plans today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: message,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    // Simulate agent response
    setTimeout(() => {
      const agentResponse: Message = {
        id: messages.length + 2,
        text: "Thank you for your message. I'll be happy to assist you with that.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentResponse]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <Card className="fixed bottom-4 right-4 w-[360px] bg-white shadow-xl">
      <div className="bg-primary p-4 flex items-center justify-between rounded-t-lg">
        <div className="flex items-center gap-3">
          <img
            src={agentAvatar}
            alt={agentName}
            className="w-10 h-10 rounded-full bg-white p-1"
          />
          {!isMinimized && (
            <div className="text-white">
              <h3 className="font-semibold">{agentName}</h3>
              <p className="text-xs">Customer Support</p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white hover:bg-primary-dark"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white hover:bg-primary-dark"
            onClick={onClose}
          >
            <X size={18} />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <ScrollArea className="h-[320px] p-4">
            <CardContent className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.isUser
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </ScrollArea>

          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2"
            >
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send size={18} />
              </Button>
            </form>
          </div>
        </>
      )}
    </Card>
  );
};

export default ChatWidget;
