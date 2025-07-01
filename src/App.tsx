import "./App.css";
import CafeInfo from "./components/CafeInfo/CafeInfo.tsx";
import VoteOptions from "./components/VofeOptions/VoteOptions.tsx";
import { useState } from "react";

import type { Votes, VoteTypes } from "./types/votes.ts";

interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

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

  return (
    <div className="app">
      <CafeInfo />
      <VoteOptions />
    </div>
  );
}
