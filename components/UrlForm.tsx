'use client';

import { useState } from 'react';
import { getShortenedUrl } from '@/lib/getShortenedUrl';
import Result from './Result';

export default function UrlForm() {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const inputVal = e.target.children.url.value;
    if (inputVal.length === 0) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    try {
      const shortenedUrl = await getShortenedUrl(inputVal);

      setShortenedUrl(shortenedUrl);
      setSubmitted(true);
    } catch (error) {
      console.error(
        `An error occurred trying to shorten ${inputVal}\n\n\t${error}`
      );
    }
  }

  function handleChange(e) {
    const curr = e.target.value;
    if (curr.length > 0) setError(false);
    setUrl(curr);
  }

  return (
    <div className="mt-20 mb-20">
      <form
        className="mb-6 rounded-lg bg-space-cadet p-6"
        onSubmit={handleSubmit}
      >
        <label htmlFor="url" className="sr-only">
          Url
        </label>
        <input
          type="text"
          id="url"
          placeholder="Shorten a link here..."
          value={url}
          disabled={submitted}
          onChange={handleChange}
          className={`h-12 w-full rounded-md ${
            error
              ? 'border-4 border-solid border-error placeholder:text-error'
              : ''
          }`}
        />
        <div className="h-7">
          <span
            className={`text-sm italic text-error ${error ? 'mb-2' : 'hidden'}`}
          >
            Please add a link
          </span>
        </div>
        <button
          disabled={error || submitted}
          className={`w-full rounded-md bg-dark-turqoise py-3 text-lg font-bold text-white hover:bg-hover-turqoise disabled:cursor-not-allowed`}
        >
          Shorten it!
        </button>
      </form>

      {shortenedUrl && <Result initialUrl={url} shortenedUrl={shortenedUrl} />}
    </div>
  );
}
