import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";

import useFollow from "../../hooks/useFollow";

export default function SuggestedFriends() {
  const { data: suggestedUsersPage, isLoading } = useQuery({
    queryKey: ["suggestedUsersPage"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/users/suggestedPage");
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Something went wrong");
        return data;
      } catch (error) {
        throw new Error(error);
      }
    },
  });

  const { follow, isPending } = useFollow();

  if (suggestedUsersPage?.length === 0)
    return <div className="md:w-64 w-0"></div>;

  return (
    <>
      <div className="flex-[4_4_0] border-l border-r border-gray-700 min-h-screen">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <p className="font-bold">People you may know</p>
        </div>
        {isLoading && (
          <div className="flex justify-center h-full items-center">
            <LoadingSpinner size="lg" />
          </div>
        )}
        {!isLoading &&
          suggestedUsersPage?.map((user) => (
            <Link
              to={`/profile/${user?.username}`}
              key={user._id}
              className="flex items-center justify-between gap-4 mx-6 my-4"
            >
              <div className="flex gap-2 items-center">
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img src={user.profileImg || "/avatar-placeholder.png"} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold tracking-tight truncate w-28">
                    {user.fullName}
                  </span>
                  <span className="text-sm text-slate-500">
                    @{user.username}
                  </span>
                </div>
              </div>
              <div>
                <button
                  className="btn bg-zinc-400 text-black hover:bg-white rounded-full btn-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    follow(user._id);
                  }}
                >
                  {isPending ? <LoadingSpinner size="sm" /> : "Follow"}
                </button>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
