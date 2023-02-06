'use client';

import { getShortenedUrl } from '@/lib/getShortenedUrl';
import { useState } from 'react';

export default function UrlForm() {
  const [error, setError] = useState(false);
  console.log('error', error);

  async function handleSubmit(e) {
    e.preventDefault();

    const inputVal = e.target.children.url.value;

    if (inputVal.length === 0) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    console.log('here');
    try {
      const shortenedUrl = await getShortenedUrl(inputVal);
      console.log('shortenedUrl', shortenedUrl);
    } catch (error) {
      console.error(
        `An error occurred trying to shorten ${inputVal}\n\n\t${error}`
      );
    }
  }

  return (
    <div className="mt-20 mb-20">
      <form className="rounded-lg bg-space-cadet p-6" onSubmit={handleSubmit}>
        <label htmlFor="url" className="sr-only">
          Url
        </label>
        <input
          type="text"
          id="url"
          placeholder="Shorten a link here..."
          className="h-12 w-full rounded-md"
        />
        <div className="h-7">
          <span
            className={`text-sm italic text-error ${error ? 'mb-2' : 'hidden'}`}
          >
            Please add a link
          </span>
        </div>
        <button className="w-full rounded-md bg-dark-turqoise py-3 text-lg font-bold text-white">
          Shorten it!
        </button>
      </form>
    </div>
  );
}
