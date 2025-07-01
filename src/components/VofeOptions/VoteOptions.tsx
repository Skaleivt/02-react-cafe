import css from "./VoteOptions.module.css";
import type { VoteTypes } from "../../types/votes";

interface VoteOptionsProps {
  onVote: (type: VoteTypes) => void;
  onReset: () => void;
  canReset: boolean;
}
export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button}>Good</button>
      <button className={css.button}>Neutral</button>
      <button className={css.button}>Bad</button>
      <button className={`${css.button} ${css.reset}`}>Reset</button>
    </div>
  );
}
