import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { BsArrowRight, BsBell } from "react-icons/bs";
import { PiUserCirclePlusLight } from "react-icons/pi";
import NotificationCard from "../Notifications/NotificationCard";
import "animate.css";
import { useRouter } from "next/navigation";

const NotificationsButton = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notficationRef = useRef();
  const buttonRef = useRef();
  const router = useRouter();

  function seeRequests() {
    setShowNotifications(false);
    router.push("/follow-requests");
  }

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        notficationRef.current &&
        !notficationRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }
    });
    return () => {
      document.removeEventListener("click", (e) => {});
    };
  }, []);
  return (
    <div className="relative">
      <div ref={buttonRef}>
        <BsBell
          className="text-xl cursor-pointer"
          onClick={() => setShowNotifications(!showNotifications)}
        />
      </div>
      {showNotifications && (
        <div
          ref={notficationRef}
          className="fixed p-4 right-2 max-sm:right-0 z-40 sm:rounded-md top-14 max-sm:top-12 bg-white w-[min(100%,520px)] max-h-[calc(100dvh-3rem)] overflow-y-auto"
        >
          <div className="text-xl font-bold">Notifications</div>

          <section
            onClick={() => seeRequests()}
            className="flex items-center gap-2 mt-4 mb-2 relative cursor-pointer"
          >
            <PiUserCirclePlusLight className="text-[48px]" />
            <div>
              <div className="text-sm mb-1 font-bold">Follow Requests</div>
              <div className="text-xs text-gray-500">
                uroojk844, belalnaim9 + 5 others
              </div>
            </div>
            <BsArrowRight className="absolute right-0" />
          </section>

          <section className="gap-y-4 grid mt-4">
            <div className="font-bold">Today</div>
            {"abg".split("").map((item, index) => {
              return <NotificationCard index={index} key={index} />;
            })}
          </section>
          <section className="gap-y-4 grid mt-4">
            <div className="font-bold">This week</div>
            {"abcfg".split("").map((item, index) => {
              return <NotificationCard index={index} key={index} />;
            })}
          </section>
        </div>
      )}
    </div>
  );
};

export default NotificationsButton;
