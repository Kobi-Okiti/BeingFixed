import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Dialog, DialogContent } from "./ui/dialog";
import listSuccessImg from "../assets/images/list-success.png";

interface WaitlistFormProps {
  buttonColor?: string;
  style?: string;
}

export default function WaitlistForm({
  buttonColor = "#005EFF",
  style,
}: WaitlistFormProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const linkToCopy = "https://beingfixed.com/";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // Custom email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(true);
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await fetch("https://formspree.io/f/mblarkgv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      setLoading(false);

      if (response.ok) {
        setOpen(true);
        setEmail("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      setLoading(false);
      alert("Network error. Please try again.");
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(linkToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className={`w-[487px] flex flex-col gap-[5px] ${style}`}
      >
        <div className="w-full flex flex-row gap-[12px]">
          <Input
            type="email"
            name="email"
            value={email}
            placeholder={`${error ? "Invalid mail" : "you@example.com"}`}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(false);
            }}
            className={`flex-1 rounded-[8px] text-[#4A5565] text-[12px] placeholder:text-[12px] placeholder:font-medium border-[0.5px]
            ${
              error
                ? "bg-[#FFD7D7] border-[#FF0000] placeholder:text-[#4A5565]"
                : "bg-[#FFFFFF] border-[#00000080] placeholder:text-[#4A5565]"
            }`}
          />
          <Button
            type="submit"
            disabled={loading}
            className={`!bg-[${buttonColor}] font-bold w-[164px] text-white rounded-[8px] text-[14px]`}
          >
            {loading ? "Submitting..." : "Join the Waitlist"}
          </Button>
        </div>
        {error ? (
          <p className="text-[12px] text-[#FF0000]">
            Invalid Email format, make sure @ is included
          </p>
        ) : null}
      </form>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="min-w-screen min-h-screen p-0 bg-white flex flex-col items-center justify-center"
        >
          <div
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 !bg-transparent border-none cursor-pointer"
          >
            <i className="cancel-icon size-[20px] text-black" />
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <img
              src={listSuccessImg}
              alt="sucess Img"
              className="h-[400px] w-[380px] duration-300 mx-auto"
            />
            <p className="text-[#000000] font-bold text-[64px] leading-none">
              You’re on the list!
            </p>
            <p className="text-[#4A5565] text-[14px] font-light">
              Thank’s for joining! please check your email to confirm your spot.
            </p>
            <p className="text-[#4A5565] text-[14px] font-light mt-[30px]">
              Share with people you believe would be able to make use of this
              platform. ( Optional)
            </p>
            <Button
              onClick={handleCopy}
              className="h-[36px] mt-[20px] text-[14px] font-bold w-[138px] !bg-[#000000] !text-white !rounded-none"
            >
              {copied ? "Copied!" : "Copy Link"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
