import "./App.css";
import CafeInfo from "./components/CafeInfo/CafeInfo.tsx";
import VoteOptions from "./components/VoteOptions/VoteOptions.tsx";
import VoteStats from "./components/VoteStats/VoteStats.tsx";
import Notification from "./components/Notification/Notification.tsx";
import { useState } from "react";

import type { Votes, VoteType } from "./types/votes.ts";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handleVote(type: VoteType) {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  }

  function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className="app">
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
