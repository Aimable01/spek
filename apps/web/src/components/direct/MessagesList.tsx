import { format } from "date-fns";
import { useMemo, useState } from "react";
import { Avatar } from "@spek/ui";
import { LodgeMessage, User } from "@spek/client";

import { useConn } from "@/hooks/useConn";
import { useTypeSafeQuery } from "@/hooks/useTypeSafeQuery";

interface MessagesListProps {
  lodgeId: string;
}

interface PageProps {
  lodgeId: string;
  cursor: number;
  user: User;
  onLoadMore: (cursor: number) => void;
  isLastPage: boolean;
  isOnlyPage: boolean;
}

const Message: React.FC<{ message: LodgeMessage }> = ({ message }) => {
  const dt = useMemo(
    () => new Date(message.inserted_at),
    [message.inserted_at]
  );

  return (
    <div className={`flex flex-1 items-center px-3 rounded-md py-4 gap-3`}>
      <Avatar
        imageSrc={message.user.avatarUrl}
        size={"md"}
        alt={message.user.displayName}
        title={`@${message.user.username}`}
      />
      <div className="flex flex-col gap-1">
        <p className="font-bold text-sm">
          {message.user.displayName}
          <span className="font-normal ml-3 text-sm">
            {format(dt, "MMM dd HH:mm")}
          </span>
        </p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

const Page: React.FC<PageProps> = ({
  lodgeId,
  cursor,
  isLastPage,
  isOnlyPage,
  user,
  onLoadMore,
}) => {
  const { data, isLoading } = useTypeSafeQuery(
    ["getLodgeMessages", cursor],
    { staleTime: Infinity, refetchOnMount: "always" },
    [lodgeId, cursor]
  );

  if (isLoading) {
    return <div>loading..</div>;
  }

  if (!data) {
    return null;
  }

  if (isOnlyPage && !isLoading && !data.messages.length) {
    return <div>No messages yet</div>;
  }

  return (
    <>
      {data.messages.map((m, idx) => (
        <Message key={idx} message={m} />
      ))}
      {data.nextCursor && isLastPage ? (
        <div className="flex w-full justify-center">
          <button
            type="button"
            className="bg-alabaster-600 px-3 rounded-md"
            onClick={() => {
              onLoadMore(data.nextCursor!);
            }}
          >
            load more
          </button>
        </div>
      ) : null}
    </>
  );
};

export const MessagesList: React.FC<MessagesListProps> = ({ lodgeId }) => {
  const { user } = useConn();
  const [cursors, setCursors] = useState<number[]>([0]);

  return (
    <div className="flex flex-col-reverse gap-1">
      {cursors.map((c, i) => (
        <Page
          key={c}
          cursor={c}
          user={user}
          lodgeId={lodgeId}
          onLoadMore={(nc) => setCursors([...cursors, nc])}
          isLastPage={i === cursors.length - 1}
          isOnlyPage={cursors.length === 1}
        />
      ))}
    </div>
  );
};
