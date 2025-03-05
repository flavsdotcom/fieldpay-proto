import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CoverageRequest = () => {
  const [details, setDetails] = useState({
    workDescription: "",
    dateTime: new Date(),
    payment: 500,
  });
  const [inviteText, setInviteText] = useState("");

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setDetails({ ...details, dateTime: date });
  };

  const handlePaymentChange = (e) => {
    setDetails({ ...details, payment: Number(e.target.value) });
  };

  const generateInvite = () => {
    const text = `Hey! Are you available for ${details.workDescription}? I need help on ${details.dateTime.toDateString()} and I can pay $${details.payment}.\n\nSame Day Payout available if you onboard here with Fieldpay: [onboarding link]`;
    setInviteText(text);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <Card className="bg-[#edebdf] p-4">
        <CardContent>
          <h2 className="text-xl font-bold text-black mb-4">Create Coverage Request</h2>
          <Input
            name="workDescription"
            placeholder="Describe the work"
            value={details.workDescription}
            onChange={handleChange}
            className="mb-2 bg-white"
          />
          <DatePicker
            selected={details.dateTime}
            onChange={handleDateChange}
            className="mb-2 w-full p-2 border rounded"
          />
          <input
            type="range"
            min={5}
            max={1000}
            step={5}
            value={details.payment}
            onChange={handlePaymentChange}
            className="mb-2 w-full"
          />
          <span className="block text-black mb-2">Payment: ${details.payment}</span>
          <Button className="bg-[#72a2a6] text-white w-full" onClick={generateInvite}>
            Generate Invite
          </Button>
          {inviteText && (
            <div className="mt-4 p-2 bg-[#a5afc7] text-white rounded">
              <p>{inviteText}</p>
              <Button className="mt-2 bg-black text-white">Copy & Send</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CoverageRequest;

