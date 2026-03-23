interface Props {
  notes: string;
}

export default function Notes({ notes }: Props) {
  if (!notes) return null;

  return (
    <div className="mt-6 border-t pt-4 text-sm text-gray-600">
      {notes}
    </div>
  );
}