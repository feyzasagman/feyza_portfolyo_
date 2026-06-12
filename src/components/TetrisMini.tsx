import { useEffect, useRef } from 'react';

const COLS = 10;
const ROWS = 14;
const CELL = 14;

type Cell = string | null;

const SHAPES: Record<string, number[][][]> = {
  I: [[[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]]],
  O: [[[1, 1], [1, 1]]],
  T: [
    [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
  ],
  S: [
    [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
  ],
  Z: [
    [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
  ],
  J: [
    [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
  ],
  L: [
    [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
  ],
};

const COLORS: Record<string, string> = {
  I: '#6ee7b7',
  O: '#10b981',
  T: '#34d399',
  S: '#059669',
  Z: '#047857',
  J: '#a7f3d0',
  L: '#14b8a6',
};

const PIECE_KEYS = Object.keys(SHAPES);

function rotate(matrix: number[][]): number[][] {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const rotated = Array.from({ length: cols }, () => Array(rows).fill(0));
  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      rotated[x][rows - 1 - y] = matrix[y][x];
    }
  }
  return rotated;
}

function createBoard(): Cell[][] {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(null));
}

function collides(board: Cell[][], shape: number[][], offsetX: number, offsetY: number) {
  for (let y = 0; y < shape.length; y += 1) {
    for (let x = 0; x < shape[y].length; x += 1) {
      if (!shape[y][x]) continue;
      const boardX = offsetX + x;
      const boardY = offsetY + y;
      if (boardX < 0 || boardX >= COLS || boardY >= ROWS) return true;
      if (boardY >= 0 && board[boardY][boardX]) return true;
    }
  }
  return false;
}

function merge(board: Cell[][], shape: number[][], offsetX: number, offsetY: number, color: string) {
  for (let y = 0; y < shape.length; y += 1) {
    for (let x = 0; x < shape[y].length; x += 1) {
      if (!shape[y][x]) continue;
      const boardY = offsetY + y;
      const boardX = offsetX + x;
      if (boardY >= 0) board[boardY][boardX] = color;
    }
  }
}

function clearLines(board: Cell[][]) {
  let cleared = 0;
  for (let y = ROWS - 1; y >= 0; y -= 1) {
    if (board[y].every((cell) => cell)) {
      board.splice(y, 1);
      board.unshift(Array(COLS).fill(null));
      cleared += 1;
      y += 1;
    }
  }
  return cleared;
}

function randomPiece() {
  const key = PIECE_KEYS[Math.floor(Math.random() * PIECE_KEYS.length)];
  return { key, shape: SHAPES[key][0].map((row) => [...row]), color: COLORS[key] };
}

function pickAutoPlacement(board: Cell[][]) {
  const { key, shape: baseShape, color } = randomPiece();
  const options: { shape: number[][]; x: number; y: number; color: string }[] = [];

  let shape = baseShape;
  const seen = new Set<string>();

  for (let rotation = 0; rotation < 4; rotation += 1) {
    const signature = shape.map((row) => row.join('')).join('|');
    if (!seen.has(signature)) {
      seen.add(signature);
      for (let x = -2; x < COLS; x += 1) {
        let y = -shape.length;
        while (!collides(board, shape, x, y + 1)) y += 1;
        if (!collides(board, shape, x, y) && y <= ROWS) {
          options.push({ shape, x, y, color });
        }
      }
    }
    shape = rotate(shape);
  }

  if (!options.length) {
    return { key, shape: baseShape, color, x: 3, y: 0 };
  }

  const holesScore = (option: (typeof options)[0]) => {
    const temp = board.map((row) => [...row]);
    merge(temp, option.shape, option.x, option.y, option.color);
    let holes = 0;
    for (let col = 0; col < COLS; col += 1) {
      let blocked = false;
      for (let row = 0; row < ROWS; row += 1) {
        if (temp[row][col]) blocked = true;
        else if (blocked) holes += 1;
      }
    }
    return holes;
  };

  options.sort((a, b) => holesScore(a) - holesScore(b) || b.y - a.y);
  const pick = options[Math.floor(Math.random() * Math.min(3, options.length))];
  return { key, shape: pick.shape, color: pick.color, x: pick.x, y: pick.y };
}

export default function TetrisMini() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    let board = createBoard();
    let active = pickAutoPlacement(board);
    let dropTimer = 0;
    let frameId = 0;
    let lastTime = 0;
    const dropInterval = 380;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(9, 9, 11, 0.92)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < ROWS; y += 1) {
        for (let x = 0; x < COLS; x += 1) {
          const color = board[y][x];
          if (color) {
            ctx.fillStyle = color;
            ctx.fillRect(x * CELL + 1, y * CELL + 1, CELL - 2, CELL - 2);
          }
        }
      }

      for (let y = 0; y < active.shape.length; y += 1) {
        for (let x = 0; x < active.shape[y].length; x += 1) {
          if (!active.shape[y][x]) continue;
          const drawX = active.x + x;
          const drawY = active.y + y;
          if (drawY < 0) continue;
          ctx.fillStyle = active.color;
          ctx.fillRect(drawX * CELL + 1, drawY * CELL + 1, CELL - 2, CELL - 2);
        }
      }

      ctx.strokeStyle = 'rgba(16, 185, 129, 0.12)';
      for (let x = 0; x <= COLS; x += 1) {
        ctx.beginPath();
        ctx.moveTo(x * CELL + 0.5, 0);
        ctx.lineTo(x * CELL + 0.5, ROWS * CELL);
        ctx.stroke();
      }
      for (let y = 0; y <= ROWS; y += 1) {
        ctx.beginPath();
        ctx.moveTo(0, y * CELL + 0.5);
        ctx.lineTo(COLS * CELL, y * CELL + 0.5);
        ctx.stroke();
      }
    };

    const lockPiece = () => {
      merge(board, active.shape, active.x, active.y, active.color);
      clearLines(board);
      active = pickAutoPlacement(board);

      if (collides(board, active.shape, active.x, active.y)) {
        board = createBoard();
        active = pickAutoPlacement(board);
      }
    };

    const tick = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      dropTimer += delta;

      while (dropTimer >= dropInterval) {
        dropTimer -= dropInterval;
        if (!collides(board, active.shape, active.x, active.y + 1)) {
          active.y += 1;
        } else {
          lockPiece();
        }
      }

      draw();
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="tetris-mini" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="tetris-mini__canvas"
        width={COLS * CELL}
        height={ROWS * CELL}
      />
    </div>
  );
}
