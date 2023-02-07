export default function Result({ initialUrl, shortenedUrl }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-6">
      <div className="w-full border-b-2 py-2">
        <p className="font-medium text-raisin-black">{initialUrl}</p>
      </div>
      <div>
        <p className="font-medium text-dark-turqoise">{shortenedUrl}</p>
      </div>
      <button className="w-full rounded-md bg-dark-turqoise py-2 font-bold text-white">
        Copy
      </button>
    </div>
  );
}
