'use client';

import { IconButton, Input, Stack } from '@chakra-ui/react';
import { CheckIcon, PencilIcon } from '@heroicons/react/24/outline';
import { formatDuration, intervalToDuration } from 'date-fns';
import * as Locales from 'date-fns/locale';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

enum QueryParams {
  title = 'title',
  date = 'date',
  locale = 'locale',
}
export default function Page() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const title = searchParams.get(QueryParams.title) ?? '';
  const dateQs = searchParams.get(QueryParams.date);
  const localeStr = searchParams.get(QueryParams.locale);

  const locale = useMemo(() => {
    return (
      // @ts-ignore
      Locales[localeStr || 'ru'] ?? Locales.enUS
    );
  }, [localeStr]);

  const targetDate = useMemo(
    () => (dateQs ? new Date(dateQs) : new Date()),
    [dateQs],
  );
  const [titleDraft, setTitleDraft] = useState(title);
  const [targetDateDraft, setTargetDateDraft] = useState(dateQs || '');
  const [isEditMode, setIsEditMode] = useState(false);
  const [now, setNow] = useState(new Date());
  const distanceText = useMemo(
    () =>
      formatDuration(
        intervalToDuration({
          start: now,
          end: targetDate,
        }),
        { locale },
      ),
    [locale, now, targetDate],
  );
  const save = useCallback(() => {
    setIsEditMode(false);

    const params = new URLSearchParams(searchParams);
    params.set(QueryParams.title, titleDraft);
    params.set(QueryParams.date, targetDateDraft);
    replace(`${pathname}?${params.toString()}`);
  }, [titleDraft, replace, searchParams, pathname, targetDateDraft]);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex h-screen">
      <Stack className="m-auto">
        {isEditMode ? (
          <form onSubmit={save}>
            <Stack>
              <Input
                type="text"
                value={titleDraft}
                onChange={(event) => setTitleDraft(event.target.value)}
                size="lg"
              />
              <Input
                type="datetime-local"
                size="lg"
                value={targetDateDraft}
                onChange={(event) => setTargetDateDraft(event.target.value)}
              />
              <IconButton
                rounded={'full'}
                type="submit"
                // background="none"
                aria-label="Save"
                icon={<CheckIcon width={32} />}
              />
            </Stack>
          </form>
        ) : (
          <h1
            className="cursor-pointer text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            onClick={() => setIsEditMode(true)}
          >
            {title}
            <IconButton
              className="inline"
              background="none"
              aria-label="Edit title"
              icon={<PencilIcon width={32} />}
            />
          </h1>
        )}
        <p className="mt-4 text-xl text-gray-500">{distanceText}</p>
      </Stack>
    </div>
  );
}
