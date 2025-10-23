import React, { useEffect, useState } from "react";
import { Trash2, Mail, User, Calendar, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [members, setMembers] = useState([]);

  // Fetch messages
  const fetchMessages = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/message");
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Fetch members
  const fetchMembers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/member");
      const data = await res.json();
      setMembers(data);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  // Delete message
  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await fetch(`http://localhost:5000/api/message/${id}`, { method: "DELETE" });
      setMessages(messages.filter((msg) => msg._id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  // Delete member
  const deleteMember = async (id) => {
    if (!window.confirm("Are you sure you want to delete this member?")) return;
    try {
      await fetch(`http://localhost:5000/api/member/${id}`, { method: "DELETE" });
      setMembers(members.filter((m) => m._id !== id));
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };

  // Promote member to core
  const promoteMember = async (id) => {
    if (!window.confirm("Promote this member to core member?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/member/${id}/promote`, {
        method: "PUT",
      });
      const updatedMember = await res.json();
      setMembers(
        members.map((member) => (member._id === id ? { ...member, role: "core" } : member))
      );
    } catch (error) {
      console.error("Error promoting member:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
    fetchMembers();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-card/30 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Admin Dashboard
        </h1>

        {/* Messages Section */}
        <div className="bg-card/40 backdrop-blur-lg border border-border/40 rounded-2xl p-8 shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-6">Messages</h2>
          {messages.length === 0 ? (
            <p className="text-center text-muted-foreground">No messages found.</p>
          ) : (
            <div className="space-y-6">
              {messages.map((msg) => (
                <div
                  key={msg._id}
                  className="p-6 rounded-xl border border-border/40 bg-background/50 hover:bg-background/70 transition-all flex justify-between items-start"
                >
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" />
                      {msg.firstName} {msg.lastName}
                    </h3>
                    <p className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Mail className="w-4 h-4" /> {msg.email}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar className="w-4 h-4" /> {new Date(msg.createdAt).toLocaleString()}
                    </p>
                    <p className="mt-3 text-base font-medium">Subject: {msg.subject}</p>
                    <p className="mt-2 text-muted-foreground">Message: {msg.message}</p>
                  </div>
                  <Button
                    variant="destructive"
                    className="bg-red-500 hover:bg-red-600"
                    onClick={() => deleteMessage(msg._id)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Message
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Members Section */}
        <div className="bg-card/40 backdrop-blur-lg border border-border/40 rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Joined Members</h2>
          {members.length === 0 ? (
            <p className="text-center text-muted-foreground">No members found.</p>
          ) : (
            <div className="space-y-6">
              {members.map((member) => (
                <div
                  key={member._id}
                  className="p-6 rounded-xl border border-border/40 bg-background/50 hover:bg-background/70 transition-all flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" /> {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">Email: {member.email}</p>
                    <p className="text-sm text-muted-foreground">Role: {member.role}</p>
                  </div>
                  <div className="flex gap-2">
                    {member.role !== "core" && (
                      <Button
                        variant="secondary"
                        className="bg-green-500 hover:bg-green-600 flex items-center"
                        onClick={() => promoteMember(member._id)}
                      >
                        <UserCheck className="w-4 h-4 mr-2" />
                        Promote to Core
                      </Button>
                    )}
                    <Button
                      variant="destructive"
                      className="bg-red-500 hover:bg-red-600 flex items-center"
                      onClick={() => deleteMember(member._id)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove Member
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
