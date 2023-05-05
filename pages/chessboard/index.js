import { useRouter } from 'next/router';
import Chessboard from '../../components/Chessboard';

export default function ChessboardPage() {
  const router = useRouter();
  const { start } = router.query;

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Chessboard</h1>
      {start && <p>Start position: {start}</p> }
      <Chessboard start={start} />
    </div>
  );
}