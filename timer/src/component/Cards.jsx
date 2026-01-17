    import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext';

    const Cards = () => {
     
  const [data, setData] = useState([
    { id: 1, title: "Welcome", desc: "Welcome to the platform", unread: true },
    { id: 2, title: "Profile Update", desc: "Your profile was updated successfully", unread: true },
    { id: 3, title: "Password Changed", desc: "Your password has been changed", unread: false },
    { id: 4, title: "New Login", desc: "New login detected from Chrome", unread: true },
    { id: 5, title: "Security Alert", desc: "Unusual activity detected", unread: true },
    { id: 6, title: "Subscription", desc: "Your subscription is active", unread: false },
    { id: 7, title: "Payment Success", desc: "Payment completed successfully", unread: false },
    { id: 8, title: "Invoice Generated", desc: "Your invoice is ready to download", unread: true },
    { id: 9, title: "Message Received", desc: "You received a new message", unread: true },
    { id: 10, title: "Account Verified", desc: "Your account has been verified", unread: false },

    { id: 11, title: "App Update", desc: "New app version available", unread: true },
    { id: 12, title: "Reminder", desc: "Don’t forget to complete your profile", unread: true },
    { id: 13, title: "Team Invite", desc: "You were invited to join a team", unread: true },
    { id: 14, title: "Task Assigned", desc: "A new task has been assigned to you", unread: false },
    { id: 15, title: "Comment Added", desc: "Someone commented on your post", unread: true },
    { id: 16, title: "File Uploaded", desc: "A file was uploaded successfully", unread: false },
    { id: 17, title: "Storage Alert", desc: "You are running out of storage", unread: true },
    { id: 18, title: "Plan Expiring", desc: "Your plan will expire soon", unread: true },
    { id: 19, title: "Feedback", desc: "New feedback received", unread: false },
    { id: 20, title: "System Update", desc: "System maintenance scheduled", unread: true },

    { id: 21, title: "Login Success", desc: "You logged in successfully", unread: false },
    { id: 22, title: "Email Changed", desc: "Your email address was updated", unread: true },
    { id: 23, title: "Backup Completed", desc: "Your backup completed successfully", unread: false },
    { id: 24, title: "New Feature", desc: "Check out the new feature we added", unread: true },
    { id: 25, title: "Warning", desc: "Multiple failed login attempts", unread: true },
    { id: 26, title: "Survey", desc: "Please complete the user survey", unread: false },
    { id: 27, title: "Admin Message", desc: "Message from system admin", unread: true },
    { id: 28, title: "Role Updated", desc: "Your user role was updated", unread: false },
    { id: 29, title: "Session Expired", desc: "Your session has expired", unread: true },
    { id: 30, title: "Logout", desc: "You logged out successfully", unread: false },
  ]);
const { task1, settask } = useAppContext();
console.log("task1",task1);


  const { select, setselect } = useAppContext();

 setselect(data.filter(item => item?.unread == false).length)
  console.log("select",select);
  
  const markAsRead = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, unread: true } : item
      )
    );
  };
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(data.length / 10);
    const startIndex = (page - 1) * 10;
    const currentCards = data.slice(
        startIndex,
        startIndex + 10
    );
    
    return (
        <div className="w-1/2 flex flex-col gap-3 bg-white rounded shadow p-4 space-y-3">
        
            <div className="w-full gap-2 flex flex-col items-start">
            {
                currentCards.map((item,index)=>(
                    <div onClick={()=>{
                        markAsRead(item.id)
                      setselect(select-1)
                    }} className={`p-2 w-full  rounded cursor-pointer border transition ${item?.unread && 'bg-gray-50 border-gray-500'} bg-blue-50 border-blue-400`}>
                <h3 className="font-medium">{item?.title}</h3>
            <p className="text-sm">{item?.desc}</p>

            {
            !item.unread && <span className="text-xs text-blue-600 font-semibold">
                Unread
                </span>
            } 
            </div>
                ))
            }
                <div className="flex justify-center items-center gap-2 pt-4">
            <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
            >
            Prev
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
            <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 border rounded ${
                page === i + 1
                    ? "bg-black text-white"
                    : ""
                }`}
            >
                {i + 1}
            </button>
            ))}

            <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
            >
            Next
            </button>
        </div>
            </div>
        </div>
    )
    }

    export default Cards